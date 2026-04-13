import { useState } from 'react';
import Home from './pages/Home';
import GrammarLesson from './pages/GrammarLesson';
import GrammarExercise from './pages/GrammarExercise';
import TajweedLesson from './pages/TajweedLesson';
import './index.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedTab, setSelectedTab] = useState('grammar'); // 'grammar' | 'tajweed'

  const navigate = (to, lesson = null) => {
    setSelectedLesson(lesson);
    setPage(to);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-shell">
      {page === 'home' && (
        <Home
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          navigate={navigate}
        />
      )}
      {page === 'grammar-lesson' && (
        <GrammarLesson
          lesson={selectedLesson}
          navigate={navigate}
        />
      )}
      {page === 'grammar-exercise' && (
        <GrammarExercise
          lesson={selectedLesson}
          navigate={navigate}
        />
      )}
      {page === 'tajweed-lesson' && (
        <TajweedLesson
          lesson={selectedLesson}
          navigate={navigate}
        />
      )}
    </div>
  );
}
