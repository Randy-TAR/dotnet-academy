import React, { useState } from 'react';

export default function CodeBlock({ code, language = 'csharp' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block position-relative">
      <button
        onClick={handleCopy}
        className="position-absolute"
        style={{
          top: '0.5rem',
          right: '0.5rem',
          background: 'rgba(124, 58, 237, 0.2)',
          border: '1px solid var(--dark-border)',
          borderRadius: '0.25rem',
          color: 'var(--accent)',
          fontSize: '0.7rem',
          padding: '0.25rem 0.5rem',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        {copied ? '✓ Copied' : 'Copy'}
      </button>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
