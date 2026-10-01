import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';

export default function CourseCard({ course }) {
  const { getCourseProgress, isEnrolled } = useProgress();
  const progress = getCourseProgress(course.id, course.lessons.length);
  const enrolled = isEnrolled(course.id);

  const levelClass = {
    Beginner: 'badge-beginner',
    Intermediate: 'badge-intermediate',
    Advanced: 'badge-advanced',
  }[course.level] || 'badge-beginner';

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card-custom h-100 d-flex flex-column">
        <div className="card-body d-flex flex-column flex-grow-1">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <span className="fs-2">{course.icon}</span>
            <span className={`badge-level ${levelClass}`}>{course.level}</span>
          </div>
          <h5 className="card-title mb-2" style={{ color: 'var(--text)' }}>
            {course.title}
          </h5>
          <p className="card-text mb-3" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', flexGrow: 1 }}>
            {course.description}
          </p>
          <div className="mb-3">
            <div className="d-flex flex-wrap gap-1">
              {course.skills.slice(0, 3).map(skill => (
                <span
                  key={skill}
                  className="badge"
                  style={{
                    background: 'rgba(124, 58, 237, 0.15)',
                    color: 'var(--accent)',
                    fontSize: '0.7rem',
                    padding: '0.25rem 0.5rem',
                  }}
                >
                  {skill}
                </span>
              ))}
              {course.skills.length > 3 && (
                <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', alignSelf: 'center' }}>
                  +{course.skills.length - 3} more
                </span>
              )}
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                {progress.completed}/{progress.total} lessons
              </span>
              <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600 }}>
                {progress.percentage}%
              </span>
            </div>
            <div className="progress-custom">
              <div
                className="progress-bar-custom"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
          </div>
          <div className="d-flex gap-2 mt-auto">
            <Link
              to={`/courses/${course.id}`}
              className="btn btn-primary-custom flex-grow-1"
            >
              {enrolled ? 'Continue' : 'Start Learning'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
