/**
 * ============================================================
 *  AI-ASSISTED CODING CURRICULUM
 * ============================================================
 *  This is the core differentiator — teaching people HOW to
 *  code WITH AI, not just coding in general.
 * ============================================================
 */

export const aiCurriculum = {
  title: "AI-Assisted Coding Mastery",
  subtitle: "Learn to code WITH AI — not against it",
  description:
    "The world of coding has changed. AI doesn't replace developers — it multiplies their output. This curriculum teaches you how to use AI as your pair programmer, code reviewer, debugger, and mentor.",

  principles: [
    {
      icon: "🧠",
      title: "AI is Your Pair Programmer",
      description:
        "Just like having a senior developer sitting next to you. AI can write boilerplate, suggest implementations, and explain complex concepts — but YOU make the decisions.",
    },
    {
      icon: "✅",
      title: "Always Verify AI Output",
      description:
        "AI can be wrong. Always review, test, and understand the code AI generates. Never blindly copy-paste. Think of AI as a helpful intern, not an oracle.",
    },
    {
      icon: "📝",
      title: "Write Better Prompts",
      description:
        "The quality of AI output depends on your prompts. Learn to give context, specify constraints, and iterate. This is THE skill of the AI era.",
    },
    {
      icon: "🔒",
      title: "Security & Ethics First",
      description:
        "Never paste sensitive data into AI tools. Understand what AI can and can't do. Write secure code even when AI helps you.",
    },
    {
      icon: "🚀",
      title: "Ship Faster, Learn More",
      description:
        "Use AI to accelerate the boring parts so you can focus on architecture, problem-solving, and creativity — the things that make you valuable.",
    },
  ],

  promptPatterns: [
    {
      category: "Code Generation",
      icon: "⚡",
      prompts: [
        {
          title: "Generate a Template",
          prompt: "Create a [type] in [language] that does [functionality]. Include error handling and follow [framework] best practices.",
          example: "Create a C# service class that handles user registration with email validation and password hashing.",
        },
        {
          title: "Scaffold a Feature",
          prompt: "I'm building [app type]. I need to add [feature]. Show me the file structure, models, and controller/service code.",
          example: "I'm building an ASP.NET Core API. I need to add JWT authentication. Show me the setup, middleware, and login endpoint.",
        },
        {
          title: "Write Tests",
          prompt: "Write unit tests for the following [method/class]. Cover happy path, edge cases, and error scenarios.",
          example: "Write xUnit tests for a CalculateDiscount method that takes a customer type and order total.",
        },
      ],
    },
    {
      category: "Code Review & Debugging",
      icon: "🔍",
      prompts: [
        {
          title: "Find Bugs",
          prompt: "Review this code for bugs, security issues, and performance problems. Here's the code: [paste code]",
          example: "Review this C# method for SQL injection vulnerabilities and null reference exceptions.",
        },
        {
          title: "Explain Errors",
          prompt: "I'm getting this error: [error message]. Here's my code: [code]. What's causing it and how do I fix it?",
          example: "I'm getting a NullReferenceException in my Blazor component when loading data. Here's the code...",
        },
        {
          title: "Refactor Code",
          prompt: "Refactor this code to be more [readable/efficient/maintainable]. Explain each change you make.",
          example: "Refactor this C# method to use LINQ instead of nested loops. Explain the performance implications.",
        },
      ],
    },
    {
      category: "Learning & Understanding",
      icon: "📚",
      prompts: [
        {
          title: "Explain a Concept",
          prompt: "Explain [concept] to me like I'm a [beginner/intermediate/advanced] developer. Use analogies and code examples.",
          example: "Explain dependency injection in .NET to me like I'm a beginner. Use a real-world analogy.",
        },
        {
          title: "Compare Approaches",
          prompt: "What are the pros and cons of [approach A] vs [approach B] for [use case]? When should I use each?",
          example: "What are the pros and cons of Blazor Server vs Blazor WebAssembly for an internal dashboard app?",
        },
        {
          title: "Architecture Advice",
          prompt: "I'm building [app description]. What architecture pattern should I use? Show me the project structure.",
          example: "I'm building a real-time chat app with ASP.NET Core. Should I use SignalR with a service bus? Show me the structure.",
        },
      ],
    },
    {
      category: "AI + .NET Specific",
      icon: "🤖",
      prompts: [
        {
          title: "Generate C# Code",
          prompt: "Write a C# method that [functionality]. Use modern C# features (records, pattern matching, nullable reference types).",
          example: "Write a C# method that reads a CSV file and returns a list of records. Use modern C# features.",
        },
        {
          title: "Entity Framework",
          prompt: "Create an EF Core DbContext and models for [domain]. Include relationships, indexes, and a sample query.",
          example: "Create an EF Core DbContext for a blog with Posts, Tags, and Comments. Include a query to get posts with their tags.",
        },
        {
          title: "Blazor Component",
          prompt: "Create a Blazor component that [functionality]. Include data binding, validation, and error handling.",
          example: "Create a Blazor component for a searchable, sortable data table with pagination.",
        },
        {
          title: "API Integration",
          prompt: "Write a C# HttpClient service that calls [API]. Include retry logic, caching, and proper error handling.",
          example: "Write a C# HttpClient service that calls the OpenWeatherMap API. Include retry logic and response caching.",
        },
      ],
    },
  ],

  workflow: [
    {
      step: 1,
      title: "Plan with AI",
      description:
        "Before writing code, use AI to plan your approach. Describe your problem, ask for architecture suggestions, and evaluate the response.",
      tips: [
        "Describe the problem, not just the solution you want",
        "Ask for multiple approaches and compare them",
        "Request a file/folder structure before coding",
      ],
    },
    {
      step: 2,
      title: "Generate & Customize",
      description:
        "Use AI to generate boilerplate and templates. Then customize the output to fit your specific needs and coding standards.",
      tips: [
        "Generate the skeleton, fill in the business logic yourself",
        "Ask AI to follow your naming conventions",
        "Request comments explaining complex parts",
      ],
    },
    {
      step: 3,
      title: "Review & Test",
      description:
        "Always review AI-generated code. Run it, test it, and understand every line before accepting it.",
      tips: [
        "Ask AI to explain any part you don't understand",
        "Write tests for AI-generated code",
        "Check for security vulnerabilities manually",
      ],
    },
    {
      step: 4,
      title: "Iterate & Improve",
      description:
        "Use AI to refactor, optimize, and add features. The conversation continues — don't settle for the first output.",
      tips: [
        "Ask 'how can this be improved?' after each iteration",
        "Request performance optimizations",
        "Ask for edge cases you might have missed",
      ],
    },
  ],

  bestPractices: [
    {
      title: "The 80/20 Rule",
      description:
        "Let AI handle the 80% of boilerplate and repetitive code. You focus on the 20% that requires human judgment — architecture, business logic, and user experience.",
    },
    {
      title: "Context is King",
      description:
        "The more context you give AI, the better the output. Share your project structure, coding standards, constraints, and the specific problem you're solving.",
    },
    {
      title: "Iterative Refinement",
      description:
        "Don't expect perfect code on the first try. Start with a basic prompt, then refine: 'Now add error handling', 'Make it async', 'Add logging'.",
    },
    {
      title: "Learn from AI",
      description:
        "When AI shows you something new, take the time to understand it. Ask 'why' and 'how does this work'. This is how you grow as a developer.",
    },
    {
      title: "Security Boundaries",
      description:
        "Never share API keys, passwords, PII, or proprietary code with AI tools. Use environment variables and secrets management.",
    },
    {
      title: "Version Control Everything",
      description:
        "Commit before and after AI-assisted changes. This lets you review what AI changed and revert if needed. Git is your safety net.",
    },
  ],

  tools: [
    {
      name: "GitHub Copilot",
      description: "AI pair programmer in your IDE. Suggests code as you type, writes functions from comments, and helps with tests.",
      bestFor: "Everyday coding, boilerplate, learning new APIs",
      pricing: "Free for students, $10/month for individuals",
      url: "https://github.com/features/copilot",
    },
    {
      name: "ChatGPT",
      description: "Conversational AI for planning, debugging, code review, and learning. Great for architecture discussions.",
      bestFor: "Planning, debugging, learning concepts, code review",
      pricing: "Free tier available, $20/month for Plus",
      url: "https://chat.openai.com",
    },
    {
      name: "Claude",
      description: "AI assistant with large context windows. Excellent for analyzing entire codebases and detailed explanations.",
      bestFor: "Codebase analysis, detailed explanations, refactoring",
      pricing: "Free tier available, $20/month for Pro",
      url: "https://claude.ai",
    },
    {
      name: "Cursor",
      description: "AI-first code editor. Understands your entire codebase and can make multi-file changes.",
      bestFor: "Multi-file refactoring, codebase-wide changes",
      pricing: "Free tier available, $20/month for Pro",
      url: "https://cursor.sh",
    },
  ],
};
