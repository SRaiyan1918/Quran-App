// Simple progress management
const STORAGE_KEY = 'quran_app_progress';

export const getProgress = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

export const saveProgress = (lessonId, type, data) => {
  try {
    const progress = getProgress();
    if (!progress[lessonId]) progress[lessonId] = {};
    progress[lessonId][type] = { ...data, timestamp: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Progress save failed', e);
  }
};

export const getLessonProgress = (lessonId) => {
  const progress = getProgress();
  return progress[lessonId] || {};
};

export const isLessonComplete = (lessonId) => {
  const p = getLessonProgress(lessonId);
  return p.exercises?.completed === true;
};

export const markExercisesComplete = (lessonId, score) => {
  saveProgress(lessonId, 'exercises', { completed: true, score });
};

export const clearProgress = () => {
  localStorage.removeItem(STORAGE_KEY);
};
