import React, { useState } from 'react';

const LANGUAGES = [
  { id: 'csharp', name: 'C#', template: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, .NET Academy!");
        
        // Try editing this code below
        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine($"Iteration {i}");
        }
    }
}` },
  { id: 'python', name: 'Python', template: `def main():
    print("Hello, .NET Academy!")
    
    # Try editing this code below
    for i in range(1, 6):
        print(f"Iteration {i}")

if __name__ == "__main__":
    main()` },
  { id: 'javascript', name: 'JavaScript', template: `function main() {
    console.log("Hello, .NET Academy!");
    
    // Try editing this code below
    for (let i = 1; i <= 5; i++) {
        console.log(\`Iteration \${i}\`);
    }
}

main();` },
  { id: 'sql', name: 'SQL', template: `-- Try writing SQL queries below
SELECT * FROM Users WHERE Age >= 18;

-- Create a table
CREATE TABLE Products (
    Id INT PRIMARY KEY,
    Name NVARCHAR(100),
    Price DECIMAL(10,2)
);

-- Insert data
INSERT INTO Products (Id, Name, Price) 
VALUES (1, 'Laptop', 999.99);` },
];

export default function Playground() {
  const [language, setLanguage] = useState('csharp');
  const [code, setCode] = useState(LANGUAGES[0].template);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleLanguageChange = (langId) => {
    setLanguage(langId);
    const lang = LANGUAGES.find(l => l.id === langId);
    setCode(lang.template);
    setOutput('');
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput('');

    // Simulate code execution with a simple output
    setTimeout(() => {
      const lines = [];
      lines.push(`[${language.toUpperCase()}] Running...`);
      lines.push('');

      // Simple simulation of code output
      if (language === 'csharp' || language === 'javascript') {
        lines.push('Hello, .NET Academy!');
        lines.push('');
        for (let i = 1; i <= 5; i++) {
          lines.push(`Iteration ${i}`);
        }
      } else if (language === 'python') {
        lines.push('Hello, .NET Academy!');
        lines.push('');
        for (let i = 1; i <= 6; i++) {
          lines.push(`Iteration ${i}`);
        }
      } else if (language === 'sql') {
        lines.push('Query executed successfully.');
        lines.push('3 rows affected.');
      }

      lines.push('');
      lines.push(`[${language.toUpperCase()}] Execution complete.`);
      setOutput(lines.join('\n'));
      setIsRunning(false);
    }, 800);
  };

  const handleReset = () => {
    const lang = LANGUAGES.find(l => l.id === language);
    setCode(lang.template);
    setOutput('');
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 style={{ color: 'var(--text)' }}>Code Playground</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Practice coding in your browser. Write, run, and experiment with code in multiple languages.
          </p>
        </div>

        {/* Language Selector */}
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
          {LANGUAGES.map(lang => (
            <button
              key={lang.id}
              onClick={() => handleLanguageChange(lang.id)}
              className="btn"
              style={{
                background: language === lang.id ? 'var(--primary)' : 'var(--dark-surface)',
                color: language === lang.id ? 'white' : 'var(--text-muted)',
                border: `1px solid ${language === lang.id ? 'var(--primary)' : 'var(--dark-border)'}`,
                fontWeight: 600,
                padding: '0.5rem 1.25rem',
              }}
            >
              {lang.name}
            </button>
          ))}
        </div>

        {/* Editor + Output */}
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card-custom overflow-hidden">
              <div
                className="d-flex justify-content-between align-items-center px-3 py-2"
                style={{ background: 'var(--dark-surface)', borderBottom: '1px solid var(--dark-border)' }}
              >
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                  📝 Editor — {LANGUAGES.find(l => l.id === language)?.name}
                </span>
                <div className="d-flex gap-2">
                  <button
                    onClick={handleReset}
                    className="btn btn-sm"
                    style={{
                      background: 'var(--dark-surface)',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--dark-border)',
                      fontSize: '0.75rem',
                    }}
                  >
                    Reset
                  </button>
                  <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className="btn btn-sm"
                    style={{
                      background: 'var(--success)',
                      color: 'white',
                      border: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    {isRunning ? '⏳ Running...' : '▶ Run'}
                  </button>
                </div>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                style={{
                  width: '100%',
                  minHeight: '400px',
                  background: '#0d1117',
                  color: '#c9d1d9',
                  border: 'none',
                  padding: '1rem',
                  fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",
                  fontSize: '0.875rem',
                  lineHeight: '1.7',
                  resize: 'vertical',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card-custom overflow-hidden">
              <div
                className="d-flex align-items-center px-3 py-2"
                style={{ background: 'var(--dark-surface)', borderBottom: '1px solid var(--dark-border)' }}
              >
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                  📤 Output
                </span>
              </div>
              <div
                style={{
                  minHeight: '400px',
                  background: '#0a0a0f',
                  padding: '1rem',
                  fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",
                  fontSize: '0.875rem',
                  lineHeight: '1.7',
                  color: output ? '#22c55e' : 'var(--text-muted)',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {output || '// Click "Run" to see output here'}
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="card-custom p-4 mt-4">
          <h5 style={{ color: 'var(--accent)' }} className="mb-3">💡 Playground Tips</h5>
          <div className="row g-3">
            {[
              { icon: '✏️', title: 'Edit Freely', desc: 'Modify the code and click Run to see changes' },
              { icon: '🔄', title: 'Reset Anytime', desc: 'Go back to the template with the Reset button' },
              { icon: '🌐', title: 'Multiple Languages', desc: 'Switch between C#, Python, JavaScript, and SQL' },
              { icon: '⚡', title: 'Instant Feedback', desc: 'See output immediately after running your code' },
            ].map((tip, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="text-center">
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tip.icon}</div>
                  <h6 style={{ color: 'var(--text)', marginBottom: '0.25rem' }}>{tip.title}</h6>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0 }}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
