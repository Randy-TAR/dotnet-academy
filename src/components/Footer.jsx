import React from 'react';
import { Link } from 'react-router-dom';
import { systemConfig } from '../data/system';

export default function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="mb-3" style={{ color: 'var(--accent)' }}>
              ⚡ {systemConfig.name}
            </h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {systemConfig.description}
            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h6 className="mb-3" style={{ color: 'var(--text)' }}>Platform</h6>
            <ul className="list-unstyled">
              {systemConfig.navLinks.map(link => (
                <li key={link.path} className="mb-2">
                  <Link
                    to={link.path}
                    style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h6 className="mb-3" style={{ color: 'var(--text)' }}>Resources</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href={systemConfig.links.dotnet} target="_blank" rel="noopener noreferrer"
                   style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  .NET Documentation
                </a>
              </li>
              <li className="mb-2">
                <a href={systemConfig.links.blazor} target="_blank" rel="noopener noreferrer"
                   style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Blazor
                </a>
              </li>
              <li className="mb-2">
                <a href={systemConfig.links.maui} target="_blank" rel="noopener noreferrer"
                   style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  .NET MAUI
                </a>
              </li>
              <li className="mb-2">
                <a href={systemConfig.links.visualstudio} target="_blank" rel="noopener noreferrer"
                   style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Visual Studio
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h6 className="mb-3" style={{ color: 'var(--text)' }}>Platform</h6>
            <ul className="list-unstyled">
              {systemConfig.aiTools.slice(0, 4).map(tool => (
                <li key={tool.name} className="mb-2">
                  <a href={tool.url} target="_blank" rel="noopener noreferrer"
                     style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {tool.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr style={{ borderColor: 'var(--dark-border)' }} />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
            © {new Date().getFullYear()} {systemConfig.name}. Free & open for everyone.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
            Built with ❤️ for the .NET community
          </p>
        </div>
      </div>
    </footer>
  );
}
