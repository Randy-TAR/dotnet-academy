import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { systemConfig } from '../data/system';
import { useProgress } from '../context/ProgressContext';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const { getLevel } = useProgress();
  const level = getLevel();

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={() => setExpanded(false)}>
          <span className="fs-3">⚡</span>
          {systemConfig.name}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle navigation"
          style={{ borderColor: 'var(--dark-border)' }}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {systemConfig.navLinks.map(link => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link nav-link-custom ${isActive ? 'active' : ''}`
                  }
                  to={link.path}
                  onClick={() => setExpanded(false)}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <span
                className="level-badge"
                title={`Level ${level.level}: ${level.name}`}
              >
                {level.icon} Lv.{level.level}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
