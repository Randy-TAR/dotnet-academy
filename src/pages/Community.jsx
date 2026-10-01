import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';

const INITIAL_PROJECTS = [
  {
    id: 1,
    author: 'Alice',
    avatar: '👩‍💻',
    title: 'Todo API with ASP.NET Core',
    description: 'A simple REST API for managing todos with EF Core and SQL Server.',
    language: 'C#',
    likes: 24,
    comments: [
      { author: 'Bob', text: 'Great structure! Love the repository pattern.' },
      { author: 'Charlie', text: 'Consider adding pagination for the GET endpoint.' },
    ],
    code: `// TodoController.cs
[ApiController]
[Route("api/[controller]")]
public class TodosController : ControllerBase
{
    private readonly AppDbContext _db;
    public TodosController(AppDbContext db) => _db = db;

    [HttpGet]
    public async Task<ActionResult<List<Todo>>> GetTodos()
        => await _db.Todos.ToListAsync();

    [HttpPost]
    public async Task<ActionResult<Todo>> CreateTodo(Todo todo)
    {
        _db.Todos.Add(todo);
        await _db.SaveChangesAsync();
        return CreatedAtAction(nameof(GetTodos), new { id = todo.Id }, todo);
    }
}`,
  },
  {
    id: 2,
    author: 'Bob',
    avatar: '👨‍💻',
    title: 'Python Password Strength Checker',
    description: 'A CLI tool that evaluates password strength with detailed feedback.',
    language: 'Python',
    likes: 18,
    comments: [
      { author: 'Alice', text: 'Nice use of regex! Maybe add a breach check API?' },
    ],
    code: `import re

def check_password_strength(password):
    score = 0
    feedback = []
    
    if len(password) >= 12:
        score += 2
    elif len(password) >= 8:
        score += 1
    else:
        feedback.append("Use at least 12 characters")
    
    if re.search(r'[A-Z]', password):
        score += 1
    else:
        feedback.append("Add uppercase letters")
    
    if re.search(r'[a-z]', password):
        score += 1
    else:
        feedback.append("Add lowercase letters")
    
    if re.search(r'[0-9]', password):
        score += 1
    else:
        feedback.append("Add numbers")
    
    if re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
        score += 1
    else:
        feedback.append("Add special characters")
    
    strength = ["Very Weak", "Weak", "Fair", "Good", "Strong", "Very Strong"][min(score, 5)]
    return {"strength": strength, "score": score, "feedback": feedback}`,
  },
  {
    id: 3,
    author: 'Charlie',
    avatar: '🧑‍💻',
    title: 'Blazor Counter with Animations',
    description: 'A Blazor component with smooth CSS animations and state management.',
    language: 'C#',
    likes: 31,
    comments: [
      { author: 'Diana', text: 'The animations are so smooth! What library did you use?' },
      { author: 'Alice', text: 'Love the color scheme!' },
    ],
    code: `@* Counter.razor *@
@page "/fancy-counter"

<div class="counter-container">
    <h3>Counter</h3>
    <p class="counter-value">@currentCount</p>
    <div class="button-group">
        <button class="btn btn-primary" @onclick="IncrementCount">
            +1
        </button>
        <button class="btn btn-danger" @onclick="ResetCount">
            Reset
        </button>
    </div>
</div>

@code {
    private int currentCount = 0;

    private void IncrementCount() => currentCount++;
    private void ResetCount() => currentCount = 0;
}`,
  },
  {
    id: 4,
    author: 'Diana',
    avatar: '👩‍🎓',
    title: 'C# LINQ Practice — Student Grades',
    description: 'A collection of LINQ queries for analyzing student grade data.',
    language: 'C#',
    likes: 15,
    comments: [],
    code: `var students = new List<Student>
{
    new() { Name = "Alice", Grade = 95, Subject = "Math" },
    new() { Name = "Bob", Grade = 87, Subject = "Science" },
    new() { Name = "Charlie", Grade = 92, Subject = "Math" },
    new() { Name = "Diana", Grade = 78, Subject = "History" },
};

// Top performers
var topStudents = students
    .Where(s => s.Grade >= 90)
    .OrderByDescending(s => s.Grade)
    .Select(s => new { s.Name, s.Grade });

// Average by subject
var avgBySubject = students
    .GroupBy(s => s.Subject)
    .Select(g => new
    {
        Subject = g.Key,
        Average = g.Average(s => s.Grade)
    });`,
  },
];

export default function Community() {
  const { getLevel } = useProgress();
  const level = getLevel();
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', description: '', language: 'C#', code: '' });

  const handleLike = (projectId) => {
    setProjects(prev =>
      prev.map(p => (p.id === projectId ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  const handleComment = (projectId) => {
    if (!newComment.trim()) return;
    setProjects(prev =>
      prev.map(p =>
        p.id === projectId
          ? { ...p, comments: [...p.comments, { author: 'You', text: newComment }] }
          : p
      )
    );
    setNewComment('');
  };

  const handleSubmitProject = () => {
    if (!newProject.title.trim() || !newProject.code.trim()) return;
    const project = {
      id: Date.now(),
      author: 'You',
      avatar: level.icon,
      title: newProject.title,
      description: newProject.description,
      language: newProject.language,
      likes: 0,
      comments: [],
      code: newProject.code,
    };
    setProjects(prev => [project, ...prev]);
    setNewProject({ title: '', description: '', language: 'C#', code: '' });
    setShowSubmitForm(false);
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 style={{ color: 'var(--text)' }}>Code Community</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Share your projects, get feedback, and learn from other developers in the community.
          </p>
        </div>

        {/* Submit Project Button */}
        <div className="text-center mb-4">
          <button
            onClick={() => setShowSubmitForm(!showSubmitForm)}
            className="btn btn-primary-custom btn-lg"
          >
            {showSubmitForm ? '✕ Cancel' : '🚀 Submit Your Project'}
          </button>
        </div>

        {/* Submit Project Form */}
        {showSubmitForm && (
          <div className="card-custom p-4 mb-5">
            <h4 style={{ color: 'var(--accent)' }} className="mb-3">Submit a Project</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }} className="d-block mb-1">Project Title</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="form-control"
                  placeholder="My Awesome Project"
                  style={{
                    background: 'var(--dark-surface)',
                    border: '1px solid var(--dark-border)',
                    color: 'var(--text)',
                  }}
                />
              </div>
              <div className="col-md-6">
                <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }} className="d-block mb-1">Language</label>
                <select
                  value={newProject.language}
                  onChange={(e) => setNewProject({ ...newProject, language: e.target.value })}
                  className="form-select"
                  style={{
                    background: 'var(--dark-surface)',
                    border: '1px solid var(--dark-border)',
                    color: 'var(--text)',
                  }}
                >
                  <option value="C#">C#</option>
                  <option value="Python">Python</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="SQL">SQL</option>
                </select>
              </div>
              <div className="col-12">
                <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }} className="d-block mb-1">Description</label>
                <input
                  type="text"
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  className="form-control"
                  placeholder="A brief description of your project"
                  style={{
                    background: 'var(--dark-surface)',
                    border: '1px solid var(--dark-border)',
                    color: 'var(--text)',
                  }}
                />
              </div>
              <div className="col-12">
                <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }} className="d-block mb-1">Code</label>
                <textarea
                  value={newProject.code}
                  onChange={(e) => setNewProject({ ...newProject, code: e.target.value })}
                  className="form-control"
                  rows={8}
                  placeholder="Paste your code here..."
                  style={{
                    background: '#0d1117',
                    border: '1px solid var(--dark-border)',
                    color: '#c9d1d9',
                    fontFamily: "'Fira Code', monospace",
                    fontSize: '0.875rem',
                  }}
                />
              </div>
              <div className="col-12 text-end">
                <button onClick={handleSubmitProject} className="btn btn-primary-custom">
                  Submit Project
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="row g-4">
          {projects.map(project => (
            <div className="col-lg-6" key={project.id}>
              <div className="card-custom p-4 h-100">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <span style={{ fontSize: '2rem' }}>{project.avatar}</span>
                    <div>
                      <h5 style={{ color: 'var(--text)', margin: 0 }}>{project.title}</h5>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        by {project.author}
                      </span>
                    </div>
                  </div>
                  <span
                    className="badge"
                    style={{
                      background: 'rgba(124, 58, 237, 0.15)',
                      color: 'var(--accent)',
                      fontSize: '0.75rem',
                    }}
                  >
                    {project.language}
                  </span>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{project.description}</p>

                {/* Code Preview */}
                <div
                  className="code-block mb-3"
                  style={{ maxHeight: '200px', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
                >
                  <pre style={{ margin: 0, fontSize: '0.8rem' }}>
                    <code>{project.code.substring(0, 300)}{project.code.length > 300 ? '...' : ''}</code>
                  </pre>
                </div>

                {/* Expanded Code View */}
                {selectedProject?.id === project.id && (
                  <div className="code-block mb-3">
                    <pre style={{ margin: 0, fontSize: '0.8rem' }}>
                      <code>{project.code}</code>
                    </pre>
                  </div>
                )}

                {/* Actions */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-3">
                    <button
                      onClick={() => handleLike(project.id)}
                      className="btn btn-sm"
                      style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        color: 'var(--danger)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        fontSize: '0.8rem',
                      }}
                    >
                      ❤️ {project.likes}
                    </button>
                    <button
                      onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
                      className="btn btn-sm"
                      style={{
                        background: 'rgba(124, 58, 237, 0.1)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(124, 58, 237, 0.2)',
                        fontSize: '0.8rem',
                      }}
                    >
                      💬 {project.comments.length} comments
                    </button>
                  </div>
                </div>

                {/* Comments Section */}
                {selectedProject?.id === project.id && (
                  <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--dark-border)' }}>
                    {project.comments.map((comment, i) => (
                      <div key={i} className="mb-2">
                        <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600 }}>
                          {comment.author}:
                        </span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}> {comment.text}</span>
                      </div>
                    ))}
                    <div className="d-flex gap-2 mt-3">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="form-control"
                        style={{
                          background: 'var(--dark-surface)',
                          border: '1px solid var(--dark-border)',
                          color: 'var(--text)',
                          fontSize: '0.85rem',
                        }}
                      />
                      <button
                        onClick={() => handleComment(project.id)}
                        className="btn btn-primary-custom"
                        style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
                      >
                        Post
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
