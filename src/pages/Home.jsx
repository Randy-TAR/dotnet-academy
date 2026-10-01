import React from 'react';
import { Link } from 'react-router-dom';
import { systemConfig } from '../data/system';
import { courses, getTotalLessons } from '../data/courses';
import { useProgress } from '../context/ProgressContext';
import CourseCard from '../components/CourseCard';

export default function Home() {
  const { getOverallProgress, getLevel } = useProgress();
  const overall = getOverallProgress(getTotalLessons());
  const level = getLevel();

  const mainCourses = courses.filter(c => c.category !== 'Extra');
  const extraCourses = courses.filter(c => c.category === 'Extra');

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title mb-4">
                Master C# & .NET
              </h1>
              <p className="hero-subtitle mx-auto mb-4">
                From absolute beginner to building web, desktop, and mobile apps —
                with modern AI-assisted coding woven into every step. Free, comprehensive, and beginner-friendly.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link to="/courses" className="btn btn-primary-custom btn-lg">
                  Start Learning — It's Free
                </Link>
                <Link to="/playground" className="btn btn-outline-custom btn-lg">
                  Try Code Playground
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {systemConfig.stats.map((stat, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Progress */}
      {overall.completed > 0 && (
        <section className="py-4">
          <div className="container">
            <div className="card-custom p-4">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h4 style={{ color: 'var(--text)' }}>Your Learning Progress</h4>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    You've completed {overall.completed} of {overall.total} lessons. Keep going!
                  </p>
                  <div className="progress-custom" style={{ height: '0.75rem' }}>
                    <div
                      className="progress-bar-custom"
                      style={{ width: `${overall.percentage}%` }}
                    />
                  </div>
                </div>
                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                  <div className="d-flex align-items-center justify-content-md-end gap-3">
                    <div>
                      <div className="stat-value">{overall.percentage}%</div>
                      <div className="stat-label">Complete</div>
                    </div>
                    <div
                      className="d-flex align-items-center gap-2"
                      style={{
                        background: 'rgba(124, 58, 237, 0.1)',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        borderRadius: '0.75rem',
                        padding: '0.5rem 1rem',
                      }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>{level.icon}</span>
                      <div>
                        <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem' }}>
                          Level {level.level}
                        </div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                          {level.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Courses Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--text)' }}>Learning Paths</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Structured courses that take you from zero to professional
            </p>
          </div>
          <div className="row">
            {mainCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Extra Courses Section */}
      <section className="py-5" style={{ background: 'var(--dark-card)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--text)' }}>Study More</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Expand your skills with additional programming languages and technologies
            </p>
          </div>
          <div className="row">
            {extraCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-4">
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              💡 These are supplementary courses. Master .NET first, then explore other languages!
            </p>
          </div>
        </div>
      </section>

      {/* AI Coding CTA */}
      <section className="py-5">
        <div className="container">
          <div className="card-custom p-4 p-md-5">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 className="ai-gradient-text mb-3">🤖 Learn to Code WITH AI</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                  The world of coding has been revolutionized by AI. Our platform teaches you
                  how to use AI as your pair programmer — writing better code, faster, while
                  still understanding every line. This is the future of software development.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link to="/ai-coding" className="btn btn-primary-custom btn-lg">
                  Explore AI Curriculum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-5" style={{ background: 'var(--dark-card)' }}>
        <div className="container">
          <div className="card-custom p-4 p-md-5">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 style={{ color: 'var(--text)' }} className="mb-3">👥 Join the Community</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                  Share your projects, get feedback from other developers, and learn together.
                  Our code community is the place to showcase your skills and grow.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link to="/community" className="btn btn-primary-custom btn-lg">
                  Visit Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Platform */}
      <section className="py-5">
        <div className="container">
          <h3 className="text-center mb-5" style={{ color: 'var(--text)' }}>
            Why Learn With Us?
          </h3>
          <div className="row g-4">
            {[
              {
                icon: '🎯',
                title: 'Structured Learning',
                description: 'Clear paths from basics to advanced — no guesswork about what to learn next.',
              },
              {
                icon: '🤖',
                title: 'AI-First Approach',
                description: 'Every lesson includes AI coding tips. Learn to code WITH AI, not against it.',
              },
              {
                icon: '📱',
                title: 'Fully Responsive',
                description: 'Learn on any device — desktop, tablet, or mobile. Your progress is always saved.',
              },
              {
                icon: '🆓',
                title: '100% Free',
                description: 'No paywalls, no subscriptions. Quality education should be accessible to everyone.',
              },
              {
                icon: '💾',
                title: 'Progress Saved',
                description: 'Your learning progress is stored in your browser. Come back anytime, continue where you left off.',
              },
              {
                icon: '🚀',
                title: 'Real-World Skills',
                description: 'Build actual web, desktop, and mobile apps — not just toy examples.',
              },
            ].map((item, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="ai-card">
                  <div className="ai-icon">{item.icon}</div>
                  <h5 style={{ color: 'var(--text)' }}>{item.title}</h5>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
