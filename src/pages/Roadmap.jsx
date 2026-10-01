import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { useProgress } from '../context/ProgressContext';

export default function Roadmap() {
  const { isEnrolled, isLessonCompleted, getCourseProgress } = useProgress();

  const phases = [
    {
      phase: "Phase 1",
      title: "C# Fundamentals",
      duration: "4-6 weeks",
      description: "Master the C# language — syntax, OOP, collections, async/await",
      courseId: "csharp-fundamentals",
    },
    {
      phase: "Phase 2",
      title: "Web Development",
      duration: "6-8 weeks",
      description: "Build web APIs and MVC apps with ASP.NET Core",
      courseId: "aspnet-core-web",
    },
    {
      phase: "Phase 3",
      title: "Blazor",
      duration: "4-6 weeks",
      description: "Create interactive web UIs with C# using Blazor",
      courseId: "blazor",
    },
    {
      phase: "Phase 4",
      title: "Desktop Applications",
      duration: "4-6 weeks",
      description: "Build Windows desktop apps with WPF and MVVM",
      courseId: "desktop-apps",
    },
    {
      phase: "Phase 5",
      title: "Mobile Development",
      duration: "5-7 weeks",
      description: "Cross-platform mobile apps with .NET MAUI",
      courseId: "mobile-apps",
    },
    {
      phase: "Bonus",
      title: "React for .NET Developers",
      duration: "3-4 weeks",
      description: "Learn React to complement your .NET skills",
      courseId: "react-bonus",
    },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 style={{ color: 'var(--text)' }}>Learning Roadmap</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Your journey from C# beginner to full-stack .NET developer with AI
          </p>
        </div>

        <div className="roadmap-timeline">
          {phases.map((phase, i) => {
            const course = courses.find(c => c.id === phase.courseId);
            const enrolled = isEnrolled(phase.courseId);
            const progress = course ? getCourseProgress(phase.courseId, course.lessons.length) : { percentage: 0 };

            return (
              <div className={`roadmap-item ${progress.percentage === 100 ? 'completed' : ''}`} key={i}>
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span
                        className="badge"
                        style={{
                          background: progress.percentage === 100 ? 'rgba(34, 197, 94, 0.15)' : 'rgba(124, 58, 237, 0.15)',
                          color: progress.percentage === 100 ? 'var(--success)' : 'var(--accent)',
                          fontSize: '0.7rem',
                        }}
                      >
                        {phase.phase}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        {phase.duration}
                      </span>
                    </div>
                    <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem' }}>
                      {course?.icon} {phase.title}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>
                      {phase.description}
                    </p>
                  </div>
                  <div className="col-lg-4 mt-3 mt-lg-0 text-lg-end">
                    {progress.percentage > 0 && (
                      <div className="mb-2">
                        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
                          {progress.percentage}%
                        </span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}> complete</span>
                      </div>
                    )}
                    <Link
                      to={`/courses/${phase.courseId}`}
                      className="btn btn-primary-custom"
                      style={{ fontSize: '0.85rem' }}
                    >
                      {progress.percentage === 100 ? 'Review' : enrolled ? 'Continue' : 'Start'}
                    </Link>
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
