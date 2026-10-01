import React, { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const categories = ['All', 'Core', 'Web', 'Desktop', 'Mobile', 'Extra'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filtered = courses.filter(c => {
    const catMatch = selectedCategory === 'All' || c.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || c.level === selectedLevel;
    return catMatch && levelMatch;
  });

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 style={{ color: 'var(--text)' }}>All Courses</h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Choose your path and start learning
          </p>
        </div>

        {/* Filters */}
        <div className="d-flex flex-column flex-md-row gap-3 mb-4 justify-content-center">
          <div>
            <label style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }} className="d-block mb-1">
              Category
            </label>
            <div className="d-flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="btn"
                  style={{
                    background: selectedCategory === cat ? 'var(--primary)' : 'var(--dark-surface)',
                    color: selectedCategory === cat ? 'white' : 'var(--text-muted)',
                    border: `1px solid ${selectedCategory === cat ? 'var(--primary)' : 'var(--dark-border)'}`,
                    fontSize: '0.8rem',
                    padding: '0.35rem 0.75rem',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }} className="d-block mb-1">
              Level
            </label>
            <div className="d-flex flex-wrap gap-2">
              {levels.map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className="btn"
                  style={{
                    background: selectedLevel === level ? 'var(--primary)' : 'var(--dark-surface)',
                    color: selectedLevel === level ? 'white' : 'var(--text-muted)',
                    border: `1px solid ${selectedLevel === level ? 'var(--primary)' : 'var(--dark-border)'}`,
                    fontSize: '0.8rem',
                    padding: '0.35rem 0.75rem',
                  }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="row">
          {filtered.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-5">
            <p style={{ color: 'var(--text-muted)' }}>No courses match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
