import React, { useState } from 'react';
import { aiCurriculum } from '../data/ai-curriculum';

export default function AICoding() {
  const [activeTab, setActiveTab] = useState('principles');
  const [copiedPrompt, setCopiedPrompt] = useState(null);

  const copyPrompt = (prompt, id) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(id);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <div className="py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="ai-gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
            {aiCurriculum.title}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            {aiCurriculum.description}
          </p>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs nav-tabs-custom justify-content-center" role="tablist">
          {[
            { id: 'principles', label: '🧠 Principles' },
            { id: 'prompts', label: '💬 Prompt Patterns' },
            { id: 'workflow', label: '⚙️ Workflow' },
            { id: 'tools', label: '🛠️ AI Tools' },
          ].map(tab => (
            <li className="nav-item" key={tab.id}>
              <button
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ background: 'transparent', border: 'none' }}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          {/* Principles Tab */}
          {activeTab === 'principles' && (
            <div>
              <div className="row g-4 mb-5">
                {aiCurriculum.principles.map((principle, i) => (
                  <div className="col-md-6 col-lg-4" key={i}>
                    <div className="ai-card">
                      <div className="ai-icon">{principle.icon}</div>
                      <h5 style={{ color: 'var(--text)' }}>{principle.title}</h5>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h4 style={{ color: 'var(--text)' }} className="mb-4">Best Practices</h4>
              <div className="row g-4">
                {aiCurriculum.bestPractices.map((practice, i) => (
                  <div className="col-md-6" key={i}>
                    <div className="prompt-card">
                      <h6 style={{ color: 'var(--accent)' }}>{practice.title}</h6>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                        {practice.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prompts Tab */}
          {activeTab === 'prompts' && (
            <div>
              {aiCurriculum.promptPatterns.map((category, ci) => (
                <div key={ci} className="mb-5">
                  <h4 style={{ color: 'var(--text)' }} className="mb-3">
                    {category.icon} {category.category}
                  </h4>
                  <div className="row g-3">
                    {category.prompts.map((prompt, pi) => (
                      <div className="col-md-6" key={pi}>
                        <div className="prompt-card">
                          <h6 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                            {prompt.title}
                          </h6>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                            {prompt.example}
                          </p>
                          <div
                            className="prompt-text"
                            onClick={() => copyPrompt(prompt.prompt, `${ci}-${pi}`)}
                          >
                            {copiedPrompt === `${ci}-${pi}` ? '✓ Copied!' : prompt.prompt}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Workflow Tab */}
          {activeTab === 'workflow' && (
            <div>
              <div className="roadmap-timeline">
                {aiCurriculum.workflow.map((step, i) => (
                  <div className="roadmap-item" key={i}>
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <span
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '1rem',
                          flexShrink: 0,
                        }}
                      >
                        {step.step}
                      </span>
                      <h5 style={{ color: 'var(--text)', margin: 0 }}>{step.title}</h5>
                    </div>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                      {step.description}
                    </p>
                    <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '1.25rem', margin: 0 }}>
                      {step.tips.map((tip, ti) => (
                        <li key={ti} className="mb-1">{tip}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools Tab */}
          {activeTab === 'tools' && (
            <div>
              <div className="row g-4">
                {aiCurriculum.tools.map((tool, i) => (
                  <div className="col-md-6" key={i}>
                    <div className="ai-card">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <h5 style={{ color: 'var(--text)', margin: 0 }}>{tool.name}</h5>
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm"
                          style={{
                            background: 'rgba(124, 58, 237, 0.15)',
                            color: 'var(--accent)',
                            fontSize: '0.75rem',
                          }}
                        >
                          Visit →
                        </a>
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        {tool.description}
                      </p>
                      <div className="mt-3">
                        <span
                          className="badge"
                          style={{
                            background: 'rgba(124, 58, 237, 0.15)',
                            color: 'var(--accent)',
                            fontSize: '0.75rem',
                            marginRight: '0.5rem',
                          }}
                        >
                          Best for: {tool.bestFor}
                        </span>
                        <span
                          className="badge"
                          style={{
                            background: 'rgba(34, 197, 94, 0.15)',
                            color: 'var(--success)',
                            fontSize: '0.75rem',
                          }}
                        >
                          {tool.pricing}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
