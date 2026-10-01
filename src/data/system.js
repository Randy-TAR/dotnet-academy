/**
 * ============================================================
 *  SYSTEM CONFIGURATION — EDIT THIS FILE TO CUSTOMIZE
 * ============================================================
 *  This file controls the entire platform's branding, structure,
 *  and content organization. Edit values here and the whole
 *  app updates automatically.
 * ============================================================
 */

export const systemConfig = {
  // ── Branding ──────────────────────────────────────────────
  name: ".NET Academy",
  tagline: "Master C# & .NET — From Zero to Professional Developer",
  description:
    "A comprehensive, free learning platform that takes you from C# basics to building web, desktop, and mobile applications — with modern AI-assisted coding woven into every step.",

  // ── Theme Colors (Purple & Black) ─────────────────────────
  colors: {
    primary: "#7c3aed",       // Purple
    primaryDark: "#5b21b6",   // Dark Purple
    secondary: "#a855f7",     // Light Purple
    accent: "#c084fc",        // Accent Purple
    dark: "#0a0a0f",          // Near Black
    darkCard: "#12121a",      // Card Black
    darkSurface: "#1a1a2e",   // Surface Black
    text: "#e2e8f0",          // Light Text
    textMuted: "#94a3b8",     // Muted Text
  },

  // ── Navigation ────────────────────────────────────────────
  navLinks: [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/roadmap", label: "Roadmap" },
    { path: "/ai-coding", label: "AI Coding" },
    { path: "/playground", label: "Playground" },
    { path: "/community", label: "Community" },
    { path: "/about", label: "About" },
  ],

  // ── Stats (shown on homepage) ────────────────────────────
  stats: [
    { value: "7", label: "Learning Paths" },
    { value: "50+", label: "Lessons" },
    { value: "100%", label: "Free & Open" },
    { value: "10", label: "Levels" },
  ],

  // ── Social / External Links ──────────────────────────────
  links: {
    github: "https://github.com",
    dotnet: "https://dotnet.microsoft.com",
    blazor: "https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor",
    maui: "https://dotnet.microsoft.com/apps/maui",
    visualStudio: "https://visualstudio.microsoft.com",
    vscode: "https://code.visualstudio.com",
  },

  // ── AI Tools Recommendations ─────────────────────────────
  aiTools: [
    {
      name: "GitHub Copilot",
      description: "Your AI pair programmer — suggests whole lines and functions as you type.",
      category: "IDE Integration",
      url: "https://github.com/features/copilot",
    },
    {
      name: "ChatGPT / Claude",
      description: "Conversational AI for explaining concepts, debugging, and code review.",
      category: "Conversational",
      url: "https://chat.openai.com",
    },
    {
      name: "Cursor",
      description: "AI-first code editor with deep codebase understanding.",
      category: "IDE",
      url: "https://cursor.sh",
    },
    {
      name: "Tabnine",
      description: "AI code completion that learns your patterns.",
      category: "IDE Integration",
      url: "https://www.tabnine.com",
    },
  ],
};
