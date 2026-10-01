import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCourseById } from '../data/courses';
import { useProgress } from '../context/ProgressContext';

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = getCourseById(courseId);
  const { getCourseProgress, isEnrolled, enrollInCourse, isLessonCompleted } = useProgress();

  useEffect(() => {
    if (course && !isEnrolled(course.id)) {
      enrollInCourse(course.id);
    }
  }, [course, isEnrolled, enrollInCourse]);

  if (!course) {
    return (
      <div className="py-5 text-center">
        <h2>Course not found</h2>
        <Link to="/courses" className="btn btn-primary-custom mt-3">Back to Courses</Link>
      </div>
    );
  }

  const progress = getCourseProgress(course.id, course.lessons.length);

  const levelClass = {
    Beginner: 'badge-beginner',
    Intermediate: 'badge-intermediate',
    Advanced: 'badge-advanced',
  }[course.level] || 'badge-beginner';

  return (
    <div className="py-5">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="breadcrumb" style={{ background: 'transparent', padding: 0 }}>
            <li className="breadcrumb-item">
              <Link to="/courses" style={{ color: 'var(--accent)' }}>Courses</Link>
            </li>
            <li className="breadcrumb-item active" style={{ color: 'var(--text-muted)' }}>
              {course.title}
            </li>
          </ol>
        </nav>

        {/* Course Header */}
        <div className="card-custom p-4 p-md-5 mb-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="fs-1">{course.icon}</span>
                <div>
                  <h1 className="mb-1" style={{ color: 'var(--text)', fontSize: '1.75rem' }}>
                    {course.title}
                  </h1>
                  <span className={`badge-level ${levelClass}`}>{course.level}</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                {course.description}
              </p>
              <div className="d-flex flex-wrap gap-3 mt-3">
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  ⏱️ {course.duration}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  📚 {course.lessons.length} lessons
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  📂 {course.category}
                </span>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="text-center p-4" style={{ background: 'var(--dark-surface)', borderRadius: '1rem' }}>
                <div className="stat-value mb-1">{progress.percentage}%</div>
                <div className="stat-label mb-3">Complete</div>
                <div className="progress-custom mb-3" style={{ height: '0.75rem' }}>
                  <div className="progress-bar-custom" style={{ width: `${progress.percentage}%` }} />
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                  {progress.completed} of {progress.total} lessons completed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <h5 style={{ color: 'var(--text)' }} className="mb-3">Skills You'll Learn</h5>
          <div className="d-flex flex-wrap gap-2">
            {course.skills.map(skill => (
              <span
                key={skill}
                className="badge"
                style={{
                  background: 'rgba(124, 58, 237, 0.15)',
                  color: 'var(--accent)',
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  borderRadius: '2rem',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Lessons List */}
        <h5 style={{ color: 'var(--text)' }} className="mb-3">Course Content</h5>
        <div className="accordion accordion-custom" id="courseLessons">
          {course.lessons.map((lesson, index) => {
            const completed = isLessonCompleted(course.id, lesson.id);
            return (
              <div className="accordion-item" key={lesson.id}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#lesson-${lesson.id}`}
                    aria-expanded={index === 0}
                  >
                    <div className="d-flex align-items-center gap-3 w-100">
                      <span
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: completed ? 'var(--success)' : 'var(--dark-surface)',
                          color: completed ? 'white' : 'var(--text-muted)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          flexShrink: 0,
                        }}
                      >
                        {completed ? '✓' : index + 1}
                      </span>
                      <span className="text-start" style={{ flex: 1 }}>
                        {lesson.title}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        {lesson.duration}
                      </span>
                    </div>
                  </button>
                </h2>
                <div
                  id={`lesson-${lesson.id}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  data-bs-parent="#courseLessons"
                >
                  <div className="accordion-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        {lesson.type === 'reading' ? '📖 Reading' : '🎯 Interactive'} • {lesson.duration}
                      </span>
                      <button
                        onClick={() => navigate(`/courses/${course.id}/${lesson.id}`)}
                        className="btn btn-primary-custom"
                        style={{ padding: '0.35rem 1rem', fontSize: '0.85rem' }}
                      >
                        {completed ? 'Review' : 'Start'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
