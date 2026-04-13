import { useState, useCallback } from 'react';
import { markExercisesComplete } from '../data/progress';

// ── MCQ Component ──
function MCQExercise({ exercise, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (opt) => {
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
    const correct = opt === exercise.answer;
    setTimeout(() => onAnswer(correct), 1000);
  };

  return (
    <div className="mcq-options fade-up">
      {exercise.options.map((opt, i) => {
        let cls = 'mcq-option';
        if (answered) {
          if (opt === exercise.answer) cls += ' correct';
          else if (opt === selected) cls += ' wrong';
        }
        return (
          <button key={i} className={cls} onClick={() => handleSelect(opt)} disabled={answered}>
            <span className="option-dot" />
            <span>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── Match Component ──
// ── Match Component (FIXED) ──
function MatchExercise({ exercise, onAnswer }) {
  const pairs = exercise.pairs;
  
  // Initialize once - don't reshuffle on clicks
  const [arabicItems] = useState(() => pairs.map(p => p.arabic));
  const [englishItems] = useState(() => [...pairs.map(p => p.english)].sort(() => Math.random() - 0.5));
  
  const [selectedArabic, setSelectedArabic] = useState(null);
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrongPair, setWrongPair] = useState(null);

  const isArabicMatched = (a) => matched.some(m => m.arabic === a);
  const isEnglishMatched = (e) => matched.some(m => m.english === e);

  const handleArabic = (a) => {
    if (isArabicMatched(a) || wrongPair) return;
    setSelectedArabic(a);
    if (selectedEnglish) {
      checkPair(a, selectedEnglish);
    }
  };

  const handleEnglish = (e) => {
    if (isEnglishMatched(e) || wrongPair) return;
    setSelectedEnglish(e);
    if (selectedArabic) {
      checkPair(selectedArabic, e);
    }
  };

  const checkPair = (a, e) => {
    const correctPair = pairs.find(p => p.arabic === a);
    const correct = correctPair?.english === e;
    
    if (correct) {
      const newMatched = [...matched, { arabic: a, english: e, correct: true }];
      setMatched(newMatched);
      setSelectedArabic(null);
      setSelectedEnglish(null);
      
      if (newMatched.length === pairs.length) {
        setTimeout(() => onAnswer(true), 600);
      }
    } else {
      setWrongPair({ arabic: a, english: e });
      setTimeout(() => {
        setWrongPair(null);
        setSelectedArabic(null);
        setSelectedEnglish(null);
      }, 700);
    }
  };

  const getArabicClass = (a) => {
    if (matched.find(mm => mm.arabic === a)) return 'match-item arabic-item matched-correct';
    if (wrongPair?.arabic === a) return 'match-item arabic-item matched-wrong';
    if (selectedArabic === a) return 'match-item arabic-item selected';
    return 'match-item arabic-item';
  };

  const getEnglishClass = (e) => {
    if (matched.find(mm => mm.english === e)) return 'match-item matched-correct';
    if (wrongPair?.english === e) return 'match-item matched-wrong';
    if (selectedEnglish === e) return 'match-item selected';
    return 'match-item';
  };

  return (
    <div style={{padding:'0 16px'}} className="fade-up">
      <div style={{
        display:'grid', 
        gridTemplateColumns:'1fr 1fr', 
        gap:10, 
        marginBottom:8
      }}>
        <div className="match-col-label">Arabic</div>
        <div className="match-col-label">English</div>
      </div>
      
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
        {/* Arabic Column - Fixed order */}
        <div className="match-items-col">
          {arabicItems.map((a, i) => (
            <button 
              key={i} 
              className={getArabicClass(a)} 
              onClick={() => handleArabic(a)}
              disabled={!!wrongPair || matched.find(mm => mm.arabic === a)}
            >
              {a}
            </button>
          ))}
        </div>
        
        {/* English Column - Fixed order (shuffled once at start) */}
        <div className="match-items-col">
          {englishItems.map((e, i) => (
            <button 
              key={i} 
              className={getEnglishClass(e)} 
              onClick={() => handleEnglish(e)}
              disabled={!!wrongPair || matched.find(mm => mm.english === e)}
            >
              {e}
            </button>
          ))}
        </div>
      </div>
      
      <div style={{textAlign:'center', marginTop:10, fontSize:'0.78rem', color:'var(--text-muted)'}}>
        {matched.length}/{pairs.length} matched
      </div>
      
      {/* Feedback for wrong match */}
      {wrongPair && (
        <div className="feedback-bar wrong" style={{marginTop:16}}>
          <span>❌</span>
          <span>Incorrect! Try again.</span>
        </div>
      )}
    </div>
  );
}

// ── Fill Blank Component ──
function FillExercise({ exercise, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (opt) => {
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
    const correct = opt === exercise.answer;
    setTimeout(() => onAnswer(correct), 1000);
  };

  return (
    <div className="fill-options fade-up">
      {exercise.options.map((opt, i) => {
        let cls = 'fill-option';
        if (answered) {
          if (opt === exercise.answer) cls += ' correct';
          else if (opt === selected) cls += ' wrong';
        }
        return (
          <button key={i} className={cls} onClick={() => handleSelect(opt)} disabled={answered}>
            {opt}
          </button>
        );
      })}
    </div>
  );
}

// ── Main Exercise Page ──
export default function GrammarExercise({ lesson, navigate }) {
  const exercises = lesson?.exercises || [];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(null);
  const [finished, setFinished] = useState(false);
  const [key, setKey] = useState(0); // force re-render

  if (!lesson || exercises.length === 0) {
    return (
      <div>
        <div className="app-header">
          <button className="header-back" onClick={() => navigate('grammar-lesson', lesson)}>←</button>
          <div className="header-title">No exercises</div>
        </div>
        <div style={{padding:40, textAlign:'center', color:'var(--text-muted)'}}>No exercises available.</div>
      </div>
    );
  }

  const current = exercises[currentIdx];
  const progress = ((currentIdx) / exercises.length) * 100;

  const handleAnswer = (correct) => {
    const newScore = correct ? score + 1 : score;
    setScore(newScore);
    setLastCorrect(correct);
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentIdx + 1 >= exercises.length) {
      markExercisesComplete(lesson.id, score);
      setFinished(true);
    } else {
      setCurrentIdx(currentIdx + 1);
      setAnswered(false);
      setLastCorrect(null);
      setKey(k => k + 1);
    }
  };

  const handleMatchComplete = (correct) => {
    const newScore = correct ? score + 1 : score;
    setScore(newScore);
    setLastCorrect(true);
    setAnswered(true);
  };

  if (finished) {
    const pct = Math.round((score / exercises.length) * 100);
    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
    return (
      <div>
        <div className="app-header">
          <button className="header-back" onClick={() => navigate('home')}>←</button>
          <div className="header-title">Lesson {lesson.id} — Results</div>
        </div>
        <div className="result-screen">
          <div className="result-emoji">{emoji}</div>
          <div className="result-score">{score}/{exercises.length}</div>
          <div className="result-label">{pct}% correct</div>
          <div style={{
            background: pct>=80?'var(--green-pale)':'#fff3cd',
            color: pct>=80?'var(--green-dark)':'#856404',
            borderRadius:12, padding:'12px 20px', marginBottom:24,
            fontSize:'0.88rem', fontWeight:600, textAlign:'center'
          }}>
            {pct >= 80 ? '✅ Lesson Completed! Keep going!' : pct >= 60 ? '💪 Good effort! Try again to improve.' : '📚 Review the lesson and try again.'}
          </div>
          <div className="result-actions">
            <button className="result-btn primary" onClick={() => navigate('grammar-lesson', lesson)}>
              📖 Back to Lesson
            </button>
            <button className="result-btn secondary" onClick={() => {
              setCurrentIdx(0); setScore(0); setAnswered(false); setLastCorrect(null); setFinished(false); setKey(k=>k+1);
            }}>
              🔄 Try Again
            </button>
            <button className="result-btn secondary" onClick={() => navigate('home')}>
              🏠 Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="app-header">
        <button className="header-back" onClick={() => navigate('grammar-lesson', lesson)}>←</button>
        <div>
          <div className="header-title">Lesson {lesson.id} — Exercises</div>
          <div className="header-subtitle">{lesson.title}</div>
        </div>
      </div>

      <div className="exercise-container">
        <div className="exercise-progress-bar">
          <div className="exercise-progress-fill" style={{width: `${progress}%`}} />
        </div>

        <div className="exercise-header">
          <span className="exercise-counter">{currentIdx + 1} / {exercises.length}</span>
          <span className="exercise-score-badge">Score: {score}</span>
        </div>

        <div className={`exercise-type-tag ${current.type}`}>
          {current.type === 'mcq' && '🔘 Multiple Choice'}
          {current.type === 'match' && '🔗 Match the Pair'}
          {current.type === 'fill' && '✏️ Choose the Answer'}
        </div>

        <div className="exercise-question">{current.question}</div>

        <div key={key}>
          {current.type === 'mcq' && (
            <MCQExercise exercise={current} onAnswer={handleAnswer} />
          )}
          {current.type === 'match' && (
            <MatchExercise exercise={current} onAnswer={handleMatchComplete} />
          )}
          {current.type === 'fill' && (
            <FillExercise exercise={current} onAnswer={handleAnswer} />
          )}
        </div>

        {answered && current.type !== 'match' && (
          <>
            <div className={`feedback-bar ${lastCorrect ? 'correct' : 'wrong'} pop-in`}>
              <span>{lastCorrect ? '✅' : '❌'}</span>
              <span>{lastCorrect ? 'Correct!' : `Correct answer: ${current.answer}`}</span>
            </div>
            <button className="next-btn" onClick={handleNext}>
              {currentIdx + 1 >= exercises.length ? '🏁 See Results' : '➡️ Next Question'}
            </button>
          </>
        )}

        {answered && current.type === 'match' && (
          <>
            <div className="feedback-bar correct pop-in">
              <span>✅</span>
              <span>All pairs matched!</span>
            </div>
            <button className="next-btn" onClick={handleNext}>
              {currentIdx + 1 >= exercises.length ? '🏁 See Results' : '➡️ Next Question'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
