import { grammarLessons } from '../data/grammarData';
import { tajweedLessons } from '../data/tajweedData';
import { isLessonComplete } from '../data/progress';

const catLabel = (cat) => cat.replace(/_/g, ' ');

export default function Home({ selectedTab, setSelectedTab, navigate }) {
  const grammarGroups = [
    {
      label: 'Pronouns & Nouns',
      icon: '🔤',
      lessons: grammarLessons.filter(l => l.id <= 4)
    },
    {
      label: 'Prepositions',
      icon: '🔗',
      lessons: grammarLessons.filter(l => l.id >= 5 && l.id <= 8)
    },
    {
      label: 'Past Tense (فعل ماضٍ)',
      icon: '📘',
      lessons: grammarLessons.filter(l => l.id >= 9 && l.id <= 11)
    },
    {
      label: 'Present/Future Tense (فعل مضارع)',
      icon: '📗',
      lessons: grammarLessons.filter(l => l.id >= 12 && l.id <= 14)
    },
    {
      label: 'Commands & Participles',
      icon: '📙',
      lessons: grammarLessons.filter(l => l.id >= 15 && l.id <= 19)
    }
  ];

  const tajweedGroups = [
    {
      label: 'Introduction',
      lessons: tajweedLessons.filter(l => l.category === 'intro')
    },
    {
      label: 'Makharij (Articulation Points)',
      lessons: tajweedLessons.filter(l => l.category === 'makharij' || l.category === 'review')
    },
    {
      label: 'Sifaat (Letter Qualities)',
      lessons: tajweedLessons.filter(l => l.category === 'sifaat')
    },
    {
      label: 'Madd (Stretching Rules)',
      lessons: tajweedLessons.filter(l => l.category === 'madd')
    },
    {
      label: 'Sukoon & Special Letters',
      lessons: tajweedLessons.filter(l => l.category === 'sukoon' || l.category === 'shaddah' || l.category === 'ghunnah' || l.category === 'tanween')
    },
    {
      label: 'Laam Rules',
      lessons: tajweedLessons.filter(l => l.category === 'lam_rules')
    },
    {
      label: 'Meem Saakinah',
      lessons: tajweedLessons.filter(l => l.category === 'meem_rules')
    },
    {
      label: 'Noon Saakinah & Tanween (4 Rules)',
      lessons: tajweedLessons.filter(l => l.category === 'noon_rules')
    },
    {
      label: 'Special Cases & Silent Letters',
      lessons: tajweedLessons.filter(l => l.category === 'special')
    },
    {
      label: 'Waqf (Stopping Rules)',
      lessons: tajweedLessons.filter(l => l.category === 'waqf')
    }
  ];

  const totalGrammar = grammarLessons.length;
  const doneGrammar = grammarLessons.filter(l => isLessonComplete(l.id)).length;

  return (
    <div className="app-shell">
      {/* Hero */}
      <div className="home-hero">
        <div className="hero-badge">Let's Learn Quran</div>
        <div className="hero-arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
        <div className="hero-title">Quran Learning App</div>
        <div className="hero-sub">Arabic Grammar & Tajweed — The Easy Way</div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num">{totalGrammar}</div>
            <div className="hero-stat-label">Grammar Lessons</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num" style={{color: '#a8d8b0'}}>{doneGrammar}</div>
            <div className="hero-stat-label">Completed</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">{tajweedLessons.length}</div>
            <div className="hero-stat-label">Tajweed Topics</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-bar">
        <button
          className={`tab-btn ${selectedTab === 'grammar' ? 'active' : ''}`}
          onClick={() => setSelectedTab('grammar')}
        >
          📖 Arabic Grammar
        </button>
        <button
          className={`tab-btn ${selectedTab === 'tajweed' ? 'active' : ''}`}
          onClick={() => setSelectedTab('tajweed')}
        >
          🔊 Tajweed
        </button>
      </div>

      {/* Grammar tab */}
      {selectedTab === 'grammar' && (
        <div style={{paddingBottom: 40}}>
          {grammarGroups.map(group => (
            <div className="section" key={group.label}>
              <div className="section-header">
                <div className="section-icon">{group.icon}</div>
                <div>
                  <div className="section-title">{group.label}</div>
                  <div className="section-sub">{group.lessons.length} lessons</div>
                </div>
              </div>
              <div className="lesson-list">
                {group.lessons.map(lesson => {
                  const done = isLessonComplete(lesson.id);
                  return (
                    <div
                      key={lesson.id}
                      className={`lesson-card ${done ? 'completed' : ''}`}
                      onClick={() => navigate('grammar-lesson', lesson)}
                    >
                      <div className={`lesson-card-icon ${done ? 'done' : ''}`}>
                        {done ? '✓' : lesson.id}
                      </div>
                      <div className="lesson-card-body">
                        <div className="lesson-card-num">Lesson {lesson.id}</div>
                        <div className="lesson-card-title">{lesson.title}</div>
                        <div className="lesson-card-arabic">{lesson.arabicTitle}</div>
                      </div>
                      <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap:4}}>
                        {lesson.quranCount && (
                          <div className="lesson-card-tag">{lesson.quranCount}×</div>
                        )}
                        <div className="lesson-card-arrow">›</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tajweed tab */}
      {selectedTab === 'tajweed' && (
        <div style={{paddingBottom: 40}}>
          <div style={{
            margin: '16px 16px 0',
            background: 'linear-gradient(135deg, #fff3cd, #fde2c8)',
            borderRadius: 12,
            padding: '14px 16px',
            display:'flex', gap:10, alignItems:'flex-start'
          }}>
            <div style={{fontSize:'1.2rem'}}>ℹ️</div>
            <div style={{fontSize:'0.82rem', color:'#7a5c00', lineHeight:1.6}}>
              <strong>Tajweed Reference:</strong> Theory & Makharij diagrams only. Letter photos will be added — tap any letter to see its photo placeholder.
            </div>
          </div>
          {tajweedGroups.filter(g => g.lessons.length > 0).map(group => (
            <div className="section" key={group.label}>
              <div className="section-header">
                <div className="section-icon">🔊</div>
                <div>
                  <div className="section-title">{group.label}</div>
                  <div className="section-sub">{group.lessons.length} topics</div>
                </div>
              </div>
              <div className="lesson-list">
                {group.lessons.map(lesson => (
                  <div
                    key={lesson.id}
                    className="tajweed-card"
                    onClick={() => navigate('tajweed-lesson', lesson)}
                  >
                    <div className="lesson-card-icon" style={{background:'var(--cream-dark)', color:'var(--green-dark)', fontSize:'0.75rem', fontWeight:900}}>
                      {lesson.id}
                    </div>
                    <div className="lesson-card-body">
                      <div className="lesson-card-num">
                        <span className={`tajweed-cat-badge ${lesson.category}`}>
                          {catLabel(lesson.category)}
                        </span>
                      </div>
                      <div className="lesson-card-title" style={{marginTop:4}}>{lesson.title}</div>
                    </div>
                    <div className="lesson-card-arrow">›</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
