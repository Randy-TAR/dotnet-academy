import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ProgressContext = createContext();

const STORAGE_KEY = 'dotnet-academy-progress';

// Level thresholds based on completed lessons
const LEVELS = [
  { level: 1, name: 'Newcomer', minLessons: 0, icon: '🌱' },
  { level: 2, name: 'Beginner', minLessons: 3, icon: '📗' },
  { level: 3, name: 'Learner', minLessons: 6, icon: '📘' },
  { level: 4, name: 'Coder', minLessons: 10, icon: '💻' },
  { level: 5, name: 'Developer', minLessons: 15, icon: '⚡' },
  { level: 6, name: 'Advanced Dev', minLessons: 20, icon: '🚀' },
  { level: 7, name: 'Senior Dev', minLessons: 25, icon: '🏆' },
  { level: 8, name: 'Expert', minLessons: 30, icon: '👑' },
  { level: 9, name: 'Master', minLessons: 35, icon: '💎' },
  { level: 10, name: 'Legend', minLessons: 40, icon: '🔥' },
];

export function getLevelInfo(completedCount) {
  let current = LEVELS[0];
  for (const lvl of LEVELS) {
    if (completedCount >= lvl.minLessons) {
      current = lvl;
    }
  }
  const next = LEVELS.find(l => l.minLessons > completedCount) || null;
  return { ...current, next };
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : { completedLessons: {}, enrolledCourses: [] };
    } catch {
      return { completedLessons: {}, enrolledCourses: [] };
    }
  });

  // Save to localStorage whenever progress changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeLesson = useCallback((courseId, lessonId) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: {
        ...prev.completedLessons,
        [`${courseId}-${lessonId}`]: true,
      },
    }));
  }, []);

  const uncompleteLesson = useCallback((courseId, lessonId) => {
    setProgress(prev => {
      const key = `${courseId}-${lessonId}`;
      const newCompleted = { ...prev.completedLessons };
      delete newCompleted[key];
      return { ...prev, completedLessons: newCompleted };
    });
  }, []);

  const isLessonCompleted = useCallback((courseId, lessonId) => {
    return !!progress.completedLessons[`${courseId}-${lessonId}`];
  }, [progress.completedLessons]);

  const enrollInCourse = useCallback((courseId) => {
    setProgress(prev => ({
      ...prev,
      enrolledCourses: prev.enrolledCourses.includes(courseId)
        ? prev.enrolledCourses
        : [...prev.enrolledCourses, courseId],
    }));
  }, []);

  const isEnrolled = useCallback((courseId) => {
    return progress.enrolledCourses.includes(courseId);
  }, [progress.enrolledCourses]);

  const getCourseProgress = useCallback((courseId, totalLessons) => {
    const completed = Object.keys(progress.completedLessons).filter(
      key => key.startsWith(`${courseId}-`)
    ).length;
    return {
      completed,
      total: totalLessons,
      percentage: totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0,
    };
  }, [progress.completedLessons]);

  const getOverallProgress = useCallback((totalLessons) => {
    const completed = Object.keys(progress.completedLessons).length;
    return {
      completed,
      total: totalLessons,
      percentage: totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0,
    };
  }, [progress.completedLessons]);

  const resetProgress = useCallback(() => {
    setProgress({ completedLessons: {}, enrolledCourses: [] });
  }, []);

  const getCompletedCount = useCallback(() => {
    return Object.keys(progress.completedLessons).length;
  }, [progress.completedLessons]);

  const getLevel = useCallback(() => {
    const count = Object.keys(progress.completedLessons).length;
    return getLevelInfo(count);
  }, [progress.completedLessons]);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        completeLesson,
        uncompleteLesson,
        isLessonCompleted,
        enrollInCourse,
        isEnrolled,
        getCourseProgress,
        getOverallProgress,
        resetProgress,
        getCompletedCount,
        getLevel,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
