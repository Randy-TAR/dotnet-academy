import React from 'react';
import { Link } from 'react-router-dom';
import { systemConfig } from '../data/system';
import { courses, getTotalLessons } from '../data/courses';
import { useProgress } from '../context/ProgressContext';

export default function About() {
  const { getOverallProgress, resetProgress, progress, getLevel } = useProgress();
  const overall = getOverallProgress(getTotalLessons());
  const level = getLevel();

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 style={{ color: 'var(--text)' }}>About {systemConfig.name}</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Our mission is to make C# and .NET education accessible to everyone —
            with modern AI-assisted coding at the core.
          </p>
        </div>

        {/* FinRaceTeam Section */}
        <div className="card-custom p-4 p-md-5 mb-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 style={{ color: 'var(--accent)' }} className="mb-3">
                🏢 Built by FinRaceTeam (FRT)
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                {systemConfig.name} is a project by <strong style={{ color: 'var(--text)' }}>FinRaceTeam (FRT)</strong>,
                a technology company dedicated to empowering developers with the skills they need to thrive
                in the modern software industry.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                FRT believes that quality education should be free and accessible to everyone. We combine
                cutting-edge technology with proven teaching methods to create learning experiences that
                are both effective and enjoyable.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-custom"
                >
                  🌐 Visit FRT
                </a>
                <Link to="/courses" className="btn btn-primary-custom">
                  Start Learning →
                </Link>
              </div>
            </div>
            <div className="col-lg-4 text-center mt-4 mt-lg-0">
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  margin: '0 auto',
                }}
              >
                ⚡
              </div>
              <h5 style={{ color: 'var(--text)', marginTop: '1rem' }}>FinRaceTeam</h5>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>FRT — Empowering Developers</p>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="card-custom p-4 h-100">
              <h4 style={{ color: 'var(--accent)' }} className="mb-3">🎯 Our Mission</h4>
              <p style={{ color: 'var(--text-muted)' }}>
                We believe that learning to code should be free, accessible, and relevant to the
                modern world. That's why we've built a platform that teaches C# and .NET from
                scratch — with AI-assisted coding integrated into every lesson.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                The software industry has changed. AI tools like GitHub Copilot, ChatGPT, and Cursor
                are now essential parts of a developer's toolkit. Our curriculum teaches you
                <strong style={{ color: 'var(--text)' }}> how to code WITH AI</strong> — not just
                coding in general.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-custom p-4 h-100">
              <h4 style={{ color: 'var(--accent)' }} className="mb-3">🤖 AI-First Philosophy</h4>
              <p style={{ color: 'var(--text-muted)' }}>
                AI doesn't replace developers — it multiplies their output. Our platform teaches:
              </p>
              <ul style={{ color: 'var(--text-muted)' }}>
                <li>How to write effective prompts for code generation</li>
                <li>How to review and verify AI-generated code</li>
                <li>How to use AI for debugging, refactoring, and learning</li>
                <li>Security best practices when using AI coding tools</li>
                <li>The 80/20 rule: let AI handle boilerplate, you handle architecture</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Your Progress */}
        <div className="card-custom p-4 mb-5">
          <h4 style={{ color: 'var(--text)' }} className="mb-3">Your Progress</h4>
          <div className="row align-items-center">
            <div className="col-md-8">
              <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                You've completed <strong style={{ color: 'var(--accent)' }}>{overall.completed}</strong> of{' '}
                <strong style={{ color: 'var(--accent)' }}>{overall.total}</strong> lessons across{' '}
                <strong style={{ color: 'var(--accent)' }}>{progress.enrolledCourses.length}</strong> courses.
              </p>
              <div className="progress-custom" style={{ height: '0.75rem' }}>
                <div className="progress-bar-custom" style={{ width: `${overall.percentage}%` }} />
              </div>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <div className="stat-value">{overall.percentage}%</div>
              <div className="stat-label">Overall Progress</div>
            </div>
          </div>

          {/* Level Display */}
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--dark-border)' }}>
            <div className="d-flex align-items-center gap-3">
              <span style={{ fontSize: '2rem' }}>{level.icon}</span>
              <div>
                <h5 style={{ color: 'var(--text)', margin: 0 }}>
                  Level {level.level}: {level.name}
                </h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                  {level.next
                    ? `${level.next.minLessons - overall.completed} more lessons to reach Level ${level.next.level}: ${level.next.name}`
                    : 'You have reached the maximum level!'}
                </p>
              </div>
            </div>
          </div>

          {overall.completed > 0 && (
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--dark-border)' }}>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                    resetProgress();
                  }
                }}
                className="btn btn-sm"
                style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  color: 'var(--danger)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                }}
              >
                Reset All Progress
              </button>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="card-custom p-4">
          <h4 style={{ color: 'var(--text)' }} className="mb-3">Built With</h4>
          <div className="d-flex flex-wrap gap-2">
            {['React', 'Bootstrap', 'Vite', 'React Router', 'React Markdown', 'React Syntax Highlighter', 'localStorage API'].map(tech => (
              <span
                key={tech}
                className="badge"
                style={{
                  background: 'rgba(124, 58, 237, 0.15)',
                  color: 'var(--accent)',
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
