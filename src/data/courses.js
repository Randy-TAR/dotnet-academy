/**
 * ============================================================
 *  COURSE CATALOG — EDIT THIS FILE TO ADD/MODIFY COURSES
 * ============================================================
 *  Each course has:
 *    id, title, description, icon, level, duration,
 *    category, skills[], lessons[]
 * ============================================================
 */

export const courses = [
  // ─── PATH 1: C# FUNDAMENTALS ─────────────────────────────
  {
    id: "csharp-fundamentals",
    title: "C# Fundamentals",
    description:
      "Master the C# language from scratch — syntax, types, OOP, LINQ, async/await, and modern C# features.",
    icon: "📘",
    level: "Beginner",
    duration: "4-6 weeks",
    category: "Core",
    skills: ["C# Syntax", "OOP", "LINQ", "Async/Await", "Generics", "Nullable Types"],
    lessons: [
      {
        id: "cs-1",
        title: "Introduction to C# and .NET",
        duration: "30 min",
        type: "reading",
        content: `# Introduction to C# and .NET

C# is a modern, object-oriented programming language developed by Microsoft. It runs on the .NET platform, which provides a massive library of pre-built functionality.

## Why Learn C#?

- **Versatile** — Web, desktop, mobile, games, cloud, IoT
- **Type-safe** — Catch errors at compile time
- **Modern** — Constantly evolving with new features
- **In-demand** — One of the most sought-after skills in enterprise

## What is .NET?

.NET is a free, open-source developer platform. The latest version is .NET 8 (as of 2024). It includes:

- **CLR** (Common Language Runtime) — executes your code
- **Base Class Library (BCL)** — thousands of reusable types
- **SDK** — tools to build, run, and publish apps

## Your First C# Program

\`\`\`csharp
// Program.cs — the entry point of every C# app
Console.WriteLine("Hello, .NET AI Academy!");

// Variables and types
string name = "Learner";
int age = 25;
bool isEnrolled = true;
double score = 95.5;

// String interpolation
Console.WriteLine($"Welcome {name}! You are {age} years old.");
\`\`\`

## AI Coding Tip 🤖

When learning C#, use AI to **explain** code you don't understand. Ask:
- "Explain this C# code line by line"
- "What is the difference between \`string\` and \`String\` in C#?"
- "Show me 3 ways to reverse a string in C#"

> **Key Takeaway**: C# is the foundation. Master it before moving to frameworks.`,
      },
      {
        id: "cs-2",
        title: "Variables, Types & Operators",
        duration: "45 min",
        type: "reading",
        content: `# Variables, Types & Operators

C# is a **statically typed** language — every variable has a type known at compile time.

## Value Types vs Reference Types

\`\`\`csharp
// Value types (stored on stack)
int count = 10;
double price = 19.99;
char grade = 'A';
bool isActive = true;
DateTime now = DateTime.Now;

// Reference types (stored on stack, data on heap)
string name = "Alice";
int[] numbers = { 1, 2, 3 };
var list = new List<string>();
\`\`\`

## Operators

\`\`\`csharp
// Arithmetic
int sum = 10 + 5;      // 15
int remainder = 10 % 3; // 1

// Comparison
bool isEqual = (10 == 10);  // true
bool isGreater = (10 > 5);   // true

// Logical
bool result = (true && false); // false
bool other = (true || false);  // true

// Null-coalescing (C# magic)
string? input = null;
string output = input ?? "default"; // "default"
\`\`\`

## var Keyword

\`\`\`csharp
var name = "Alice";        // Compiler infers: string
var age = 25;              // Compiler infers: int
var price = 19.99;         // Compiler infers: double
\`\`\`

## AI Coding Tip 🤖

Ask AI to **convert** between types:
- "Convert this string to int in C# with error handling"
- "Show me how to parse a DateTime from user input in C#"

> **Key Takeaway**: Understanding types prevents bugs. Use \`var\` when the type is obvious, explicit types when it's not.`,
      },
      {
        id: "cs-3",
        title: "Control Flow & Loops",
        duration: "40 min",
        type: "reading",
        content: `# Control Flow & Loops

Control flow determines which code executes and when.

## If / Else If / Else

\`\`\`csharp
int score = 85;

if (score >= 90)
{
    Console.WriteLine("A — Excellent!");
}
else if (score >= 80)
{
    Console.WriteLine("B — Great job!");
}
else if (score >= 70)
{
    Console.WriteLine("C — Good effort!");
}
else
{
    Console.WriteLine("Keep practicing!");
}
\`\`\`

## Switch Expressions (Modern C#)

\`\`\`csharp
string day = "Monday";

string message = day switch
{
    "Monday" => "Start of the week",
    "Friday" => "Almost the weekend!",
    "Saturday" or "Sunday" => "Weekend!",
    _ => "Midweek"
};
\`\`\`

## Loops

\`\`\`csharp
// For loop
for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"Iteration {i}");
}

// Foreach loop
var names = new[] { "Alice", "Bob", "Charlie" };
foreach (var name in names)
{
    Console.WriteLine(name);
}

// While loop
int counter = 0;
while (counter < 3)
{
    Console.WriteLine($"Count: {counter}");
    counter++;
}

// Do-while (executes at least once)
do
{
    Console.WriteLine("This runs at least once");
} while (false);
\`\`\`

## AI Coding Tip 🤖

Use AI to **refactor** loops:
- "Convert this for loop to a foreach loop in C#"
- "How do I break out of a nested loop in C#?"

> **Key Takeaway**: Choose the right control structure. \`foreach\` for collections, \`for\` when you need the index, \`switch\` for multiple conditions.`,
      },
      {
        id: "cs-4",
        title: "Object-Oriented Programming (OOP)",
        duration: "60 min",
        type: "reading",
        content: `# Object-Oriented Programming (OOP)

OOP is the heart of C#. Everything is an object (or can be treated as one).

## The Four Pillars

### 1. Encapsulation
Hide internal state, expose only what's needed.

\`\`\`csharp
public class BankAccount
{
    // Private field — encapsulated
    private decimal _balance;

    // Public property — controlled access
    public decimal Balance => _balance;

    public void Deposit(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Amount must be positive");

        _balance += amount;
    }

    public bool Withdraw(decimal amount)
    {
        if (amount > _balance) return false;
        _balance -= amount;
        return true;
    }
}
\`\`\`

### 2. Inheritance
Create specialized versions of classes.

\`\`\`csharp
public class Animal
{
    public string Name { get; set; }
    public virtual void Speak() => Console.WriteLine("...");
}

public class Dog : Animal
{
    public override void Speak() => Console.WriteLine("Woof!");
}

public class Cat : Animal
{
    public override void Speak() => Console.WriteLine("Meow!");
}
\`\`\`

### 3. Polymorphism
Same interface, different behavior.

\`\`\`csharp
Animal[] animals = { new Dog { Name = "Rex" }, new Cat { Name = "Whiskers" } };
foreach (var animal in animals)
{
    animal.Speak(); // Woof! Meow!
}
\`\`\`

### 4. Abstraction
Define contracts with interfaces and abstract classes.

\`\`\`csharp
public interface IShape
{
    double CalculateArea();
}

public class Circle : IShape
{
    public double Radius { get; set; }
    public double CalculateArea() => Math.PI * Radius * Radius;
}

public class Rectangle : IShape
{
    public double Width { get; set; }
    public double Height { get; set; }
    public double CalculateArea() => Width * Height;
}
\`\`\`

## AI Coding Tip 🤖

Use AI to **design class hierarchies**:
- "Design a class hierarchy for a university system in C#"
- "When should I use an interface vs an abstract class in C#?"

> **Key Takeaway**: Favor composition over inheritance. Use interfaces for flexibility. Keep classes small and focused (Single Responsibility Principle).`,
      },
      {
        id: "cs-5",
        title: "Collections & LINQ",
        duration: "50 min",
        type: "reading",
        content: `# Collections & LINQ

Collections store groups of data. LINQ (Language Integrated Query) lets you query them elegantly.

## Common Collections

\`\`\`csharp
// List<T> — dynamic array
var numbers = new List<int> { 1, 2, 3, 4, 5 };
numbers.Add(6);
numbers.Remove(3);

// Dictionary<TKey, TValue> — key-value pairs
var ages = new Dictionary<string, int>
{
    ["Alice"] = 25,
    ["Bob"] = 30
};
ages["Charlie"] = 35;

// HashSet<T> — unique items
var unique = new HashSet<int> { 1, 2, 3, 3, 3 }; // { 1, 2, 3 }

// Queue<T> — FIFO
var queue = new Queue<string>();
queue.Enqueue("First");
queue.Enqueue("Second");
var next = queue.Dequeue(); // "First"

// Stack<T> — LIFO
var stack = new Stack<int>();
stack.Push(1);
stack.Push(2);
var top = stack.Pop(); // 2
\`\`\`

## LINQ — Query Collections Like a Pro

\`\`\`csharp
var people = new List<Person>
{
    new() { Name = "Alice", Age = 25, City = "NYC" },
    new() { Name = "Bob", Age = 30, City = "London" },
    new() { Name = "Charlie", Age = 35, City = "NYC" },
    new() { Name = "Diana", Age = 28, City = "Paris" }
};

// Filter
var adults = people.Where(p => p.Age >= 28);

// Project
var names = people.Select(p => p.Name);

// Sort
var sorted = people.OrderBy(p => p.Age);

// Group
var byCity = people.GroupBy(p => p.City);

// Aggregate
var averageAge = people.Average(p => p.Age);
var oldest = people.MaxBy(p => p.Age);

// Chain everything
var result = people
    .Where(p => p.City == "NYC")
    .OrderByDescending(p => p.Age)
    .Select(p => new { p.Name, p.Age })
    .ToList();
\`\`\`

## AI Coding Tip 🤖

Use AI to **write LINQ queries**:
- "Write a LINQ query to find the top 3 most expensive products"
- "Group orders by customer and calculate total spent in C# LINQ"

> **Key Takeaway**: LINQ is incredibly powerful. Learn the method syntax — it's more flexible than query syntax and works with all providers.`,
      },
      {
        id: "cs-6",
        title: "Async/Await & Task-Based Programming",
        duration: "45 min",
        type: "reading",
        content: `# Async/Await & Task-Based Programming

Modern apps must be responsive. Async/await makes asynchronous code look synchronous.

## The Problem

\`\`\`csharp
// Synchronous — blocks the thread
public string DownloadData()
{
    var client = new HttpClient();
    var result = client.GetStringAsync("https://api.example.com").Result; // BLOCKS!
    return result;
}
\`\`\`

## The Solution

\`\`\`csharp
// Asynchronous — frees the thread
public async Task<string> DownloadDataAsync()
{
    using var client = new HttpClient();
    var result = await client.GetStringAsync("https://api.example.com");
    return result;
}
\`\`\`

## Key Concepts

\`\`\`csharp
// Task<T> represents an async operation that returns T
Task<int> GetNumberAsync() => Task.FromResult(42);

// Awaiting multiple tasks
var task1 = DownloadDataAsync();
var task2 = GetOtherDataAsync();
await Task.WhenAll(task1, task2);

// Exception handling
try
{
    var data = await DownloadDataAsync();
}
catch (HttpRequestException ex)
{
    Console.WriteLine($"Network error: {ex.Message}");
}

// Cancellation
var cts = new CancellationTokenSource();
var data = await DownloadDataAsync(cts.Token);
\`\`\`

## Common Mistakes

\`\`\`csharp
// ❌ Deadlock risk — never use .Result or .Wait()
var result = GetNumberAsync().Result;

// ❌ async void — only for event handlers
public async void Bad() { }

// ✅ async Task — always return Task
public async Task Good() { }

// ✅ ConfigureAwait(false) in library code
await Task.Delay(1000).ConfigureAwait(false);
\`\`\`

## AI Coding Tip 🤖

Use AI to **convert sync to async**:
- "Convert this synchronous method to async/await in C#"
- "How do I handle exceptions in async methods in C#?"

> **Key Takeaway**: Use \`async Task\` for all I/O operations. Never use \`.Result\` or \`.Wait()\`. Always pass \`CancellationToken\` when possible.`,
      },
    ],
  },

  // ─── PATH 2: ASP.NET CORE WEB ────────────────────────────
  {
    id: "aspnet-core-web",
    title: "ASP.NET Core Web Development",
    description:
      "Build modern web APIs and MVC applications with ASP.NET Core — routing, middleware, EF Core, authentication, and deployment.",
    icon: "🌐",
    level: "Intermediate",
    duration: "6-8 weeks",
    category: "Web",
    skills: ["ASP.NET Core", "MVC", "Web API", "EF Core", "Identity", "REST"],
    lessons: [
      {
        id: "web-1",
        title: "ASP.NET Core Fundamentals",
        duration: "40 min",
        type: "reading",
        content: `# ASP.NET Core Fundamentals

ASP.NET Core is Microsoft's framework for building web apps. It's cross-platform, high-performance, and modular.

## Project Structure

\`\`\`
MyWebApp/
├── Program.cs          ← Entry point & pipeline
├── Controllers/        ← Handle HTTP requests
├── Models/             ← Data classes
├── Views/              ← Razor templates (MVC)
├── Data/               ← DbContext & migrations
├── Services/           ← Business logic
└── wwwroot/            ← Static files
\`\`\`

## Minimal APIs (Modern Approach)

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/api/users/{id}", (int id) =>
{
    return Results.Ok(new { Id = id, Name = "Alice" });
});

app.MapPost("/api/users", (User user) =>
{
    return Results.Created($"/api/users/{user.Id}", user);
});

app.Run();
\`\`\`

## Middleware Pipeline

\`\`\`csharp
// Middleware = request processing pipeline
app.UseExceptionHandler();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
UseAuthorization();

app.MapControllers();
\`\`\`

## AI Coding Tip 🤖

Use AI to **scaffold projects**:
- "Create a minimal API endpoint for a todo list in ASP.NET Core"
- "Add Swagger/OpenAPI to my ASP.NET Core project"

> **Key Takeaway**: Understand the middleware pipeline — it's the backbone of every ASP.NET Core app.`,
      },
      {
        id: "web-2",
        title: "Entity Framework Core & Databases",
        duration: "55 min",
        type: "reading",
        content: `# Entity Framework Core & Databases

EF Core is the ORM (Object-Relational Mapper) for .NET. It lets you work with databases using C# objects.

## DbContext & Models

\`\`\`csharp
public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Order> Orders { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlServer("Server=.;Database=Shop;Trusted_Connection=True;");
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public int Stock { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
\`\`\`

## CRUD Operations

\`\`\`csharp
// Create
var product = new Product { Name = "Laptop", Price = 999.99m };
db.Products.Add(product);
await db.SaveChangesAsync();

// Read
var products = await db.Products
    .Where(p => p.Price > 100)
    .OrderBy(p => p.Name)
    .ToListAsync();

// Update
var product = await db.Products.FindAsync(1);
product.Price = 899.99m;
await db.SaveChangesAsync();

// Delete
var product = await db.Products.FindAsync(1);
db.Products.Remove(product);
await db.SaveChangesAsync();
\`\`\`

## Migrations

\`\`\`bash
# Add a migration
dotnet ef migrations add InitialCreate

# Apply to database
dotnet ef database update
\`\`\`

## AI Coding Tip 🤖

Use AI to **design database schemas**:
- "Design an EF Core model for an e-commerce system"
- "Write a LINQ query to get orders with customer details"

> **Key Takeaway**: EF Core saves enormous time. Use migrations for schema changes. Always use async methods for database calls.`,
      },
      {
        id: "web-3",
        title: "REST API Design & Best Practices",
        duration: "50 min",
        type: "reading",
        content: `# REST API Design & Best Practices

Build clean, consistent, and well-documented REST APIs.

## Controller-Based APIs

\`\`\`csharp
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _db;

    public ProductsController(AppDbContext db) => _db = db;

    // GET: api/products
    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts(
        [FromQuery] string? search = null,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 20)
    {
        var query = _db.Products.AsQueryable();

        if (!string.IsNullOrEmpty(search))
            query = query.Where(p => p.Name.Contains(search));

        var total = await query.CountAsync();
        var items = await query
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        return Ok(new { Total = total, Page = page, PageSize = pageSize, Items = items });
    }

    // GET: api/products/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _db.Products.FindAsync(id);
        return product == null ? NotFound() : Ok(product);
    }

    // POST: api/products
    [HttpPost]
    public async Task<ActionResult<Product>> CreateProduct(ProductDto dto)
    {
        var product = new Product { Name = dto.Name, Price = dto.Price };
        _db.Products.Add(product);
        await _db.SaveChangesAsync();

        return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
    }

    // PUT: api/products/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProduct(int id, ProductDto dto)
    {
        var product = await _db.Products.FindAsync(id);
        if (product == null) return NotFound();

        product.Name = dto.Name;
        product.Price = dto.Price;
        await _db.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/products/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
        var product = await _db.Products.FindAsync(id);
        if (product == null) return NotFound();

        _db.Products.Remove(product);
        await _db.SaveChangesAsync();

        return NoContent();
    }
}
\`\`\`

## HTTP Status Codes

| Code | Meaning | When to Use |
|------|---------|-------------|
| 200 | OK | Successful GET/PUT |
| 201 | Created | Successful POST |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Validation failed |
| 401 | Unauthorized | Not authenticated |
| 403 | Forbidden | Not allowed |
| 404 | Not Found | Resource doesn't exist |
| 500 | Server Error | Unexpected error |

## AI Coding Tip 🤖

Use AI to **review API design**:
- "Review this REST API controller for best practices"
- "Add input validation to this API endpoint"

> **Key Takeaway**: Use DTOs for input/output. Return proper status codes. Version your APIs from day one.`,
      },
    ],
  },

  // ─── PATH 3: BLAZOR ──────────────────────────────────────
  {
    id: "blazor",
    title: "Blazor — C# for the Web",
    description:
      "Build interactive web UIs with C# instead of JavaScript. Learn Blazor Server, WebAssembly, components, and real-time apps.",
    icon: "🔥",
    level: "Intermediate",
    duration: "4-6 weeks",
    category: "Web",
    skills: ["Blazor", "Components", "Razor", "WebAssembly", "SignalR", "JavaScript Interop"],
    lessons: [
      {
        id: "blazor-1",
        title: "Blazor Fundamentals",
        duration: "45 min",
        type: "reading",
        content: `# Blazor Fundamentals

Blazor lets you build web UIs with C# instead of JavaScript. It runs on .NET — either on the server (Blazor Server) or in the browser via WebAssembly (Blazor WASM).

## Two Hosting Models

| Feature | Blazor Server | Blazor WebAssembly |
|---------|--------------|-------------------|
| Runs on | Server | Browser (WASM) |
| UI updates | SignalR (real-time) | In browser |
| Offline | No | Yes |
| Latency | Network round-trip | None |
| .NET Runtime | Server | Browser |

## Component Basics

\`\`\`razor
@* Counter.razor *@
@page "/counter"

<h3>Counter</h3>
<p>Current count: @currentCount</p>
<button class="btn btn-primary" @onclick="IncrementCount">Click me</button>

@code {
    private int currentCount = 0;

    private void IncrementCount()
    {
        currentCount++;
    }
}
\`\`\`

## Data Binding

\`\`\`razor
@* Two-way binding *@
<input @bind="username" />
<p>Hello, @username!</p>

@* Binding with format *@
<input @bind="price" @bind:format="0.00" />
<p>Price: @price.ToString("C")</p>

@code {
    private string username = "";
    private decimal price = 0;
}
\`\`\`

## AI Coding Tip 🤖

Use AI to **generate components**:
- "Create a Blazor component for a contact form with validation"
- "Build a Blazor data table with sorting and filtering"

> **Key Takeaway**: Blazor components are reusable. Use \`@code\` blocks for logic, \`@page\` for routing, and \`@bind\` for two-way data binding.`,
      },
      {
        id: "blazor-2",
        title: "Component Lifecycle & State",
        duration: "40 min",
        type: "reading",
        content: `# Component Lifecycle & State

Understanding the component lifecycle is crucial for building responsive Blazor apps.

## Lifecycle Methods

\`\`\`csharp
@code {
    private string data = "";

    // Called once when component is initialized
    protected override void OnInitialized()
    {
        Console.WriteLine("Component initialized");
    }

    // Called after each render
    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender)
        {
            Console.WriteLine("First render complete");
        }
    }

    // Called when parameters change
    protected override async Task OnParametersSetAsync()
    {
        data = await LoadDataAsync();
    }

    // Called to prevent re-rendering
    protected override bool ShouldRender() => true;
}
\`\`\`

## State Management

\`\`\`csharp
// Simple state with event
public class CounterState
{
    public int Count { get; private set; }
    public event Action? OnChange;

    public void Increment()
    {
        Count++;
        OnChange?.Invoke();
    }
}

// Register as scoped service
builder.Services.AddScoped<CounterState>();

// Use in component
@inject CounterState State

<p>Count: @State.Count</p>
<button @onclick="State.Increment">+1</button>

@code {
    protected override void OnInitialized()
    {
        State.OnChange += StateHasChanged;
    }
}
\`\`\`

## AI Coding Tip 🤖

Use AI to **manage state**:
- "How do I share state between Blazor components?"
- "Create a Blazor service for managing shopping cart state"

> **Key Takeaway**: Use lifecycle methods wisely. \`OnInitialized\` for setup, \`OnParametersSet\` for parameter changes, \`OnAfterRender\` for JS interop.`,
      },
    ],
  },

  // ─── PATH 4: DESKTOP APPS ────────────────────────────────
  {
    id: "desktop-apps",
    title: "Desktop Apps (WPF & WinUI)",
    description:
      "Build Windows desktop applications with WPF and WinUI — XAML, MVVM pattern, data binding, and modern UI.",
    icon: "🖥️",
    level: "Intermediate",
    duration: "4-6 weeks",
    category: "Desktop",
    skills: ["WPF", "XAML", "MVVM", "WinUI", "Data Binding", "Commands"],
    lessons: [
      {
        id: "desktop-1",
        title: "WPF & XAML Fundamentals",
        duration: "45 min",
        type: "reading",
        content: `# WPF & XAML Fundamentals

WPF (Windows Presentation Foundation) uses XAML to define UIs declaratively. It's powerful, flexible, and still widely used.

## XAML Basics

\`\`\`xml
<Window x:Class="MyApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        Title="My App" Height="450" Width="800">
    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto"/>
            <RowDefinition Height="*"/>
        </Grid.RowDefinitions>

        <TextBlock Text="Welcome to WPF!"
                   FontSize="24"
                   HorizontalAlignment="Center"
                   Margin="20"/>

        <Button Grid.Row="1"
                Content="Click Me"
                Click="Button_Click"
                Width="120" Height="40"
                HorizontalAlignment="Center"/>
    </Grid>
</Window>
\`\`\`

## Layout Panels

\`\`\`xml
<!-- StackPanel — vertical/horizontal stack -->
<StackPanel>
    <Button Content="First"/>
    <Button Content="Second"/>
    <Button Content="Third"/>
</StackPanel>

<!-- Grid — rows and columns -->
<Grid>
    <Grid.ColumnDefinitions>
        <ColumnDefinition Width="*"/>
        <ColumnDefinition Width="2*"/>
    </Grid.ColumnDefinitions>
    <TextBlock Text="Left"/>
    <TextBlock Grid.Column="1" Text="Right"/>
</Grid>

<!-- DockPanel — dock to edges -->
<DockPanel>
    <Button DockPanel.Dock="Top" Content="Top"/>
    <Button DockPanel.Dock="Left" Content="Left"/>
    <Button Content="Fill"/>
</DockPanel>
\`\`\`

## AI Coding Tip 🤖

Use AI to **generate XAML layouts**:
- "Create a WPF login window with username and password fields"
- "Design a WPF dashboard layout with a sidebar and main content area"

> **Key Takeaway**: XAML separates UI from logic. Use the right layout panel for the job — Grid for most cases, StackPanel for simple stacks.`,
      },
      {
        id: "desktop-2",
        title: "MVVM Pattern",
        duration: "50 min",
        type: "reading",
        content: `# MVVM Pattern

MVVM (Model-View-ViewModel) is the standard architecture for WPF apps. It separates concerns and makes apps testable.

## The Three Layers

\`\`\`csharp
// Model — data and business logic
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
}

// ViewModel — presentation logic
public class MainViewModel : INotifyPropertyChanged
{
    private string _searchText = "";
    public string SearchText
    {
        get => _searchText;
        set
        {
            _searchText = value;
            OnPropertyChanged();
            FilterProducts();
        }
    }

    public ObservableCollection<Product> Products { get; } = new();

    public ICommand SearchCommand { get; }

    public MainViewModel()
    {
        SearchCommand = new RelayCommand(FilterProducts);
        LoadProducts();
    }

    public event PropertyChangedEventHandler? PropertyChanged;
    protected void OnPropertyChanged([CallerMemberName] string name = "")
        => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
}

// View — XAML binds to ViewModel
\`\`\`

## Data Binding in XAML

\`\`\`xml
<Window.DataContext>
    <local:MainViewModel/>
</Window.DataContext>

<TextBox Text="{Binding SearchText, UpdateSourceTrigger=PropertyChanged}"/>
<ItemsControl ItemsSource="{Binding Products}">
    <ItemsControl.ItemTemplate>
        <DataTemplate>
            <TextBlock Text="{Binding Name}"/>
        </DataTemplate>
    </ItemsControl.ItemTemplate>
</ItemsControl>
<Button Command="{Binding SearchCommand}" Content="Search"/>
\`\`\`

## AI Coding Tip 🤖

Use AI to **implement MVVM**:
- "Create a ViewModel for a todo list app with add/remove functionality"
- "Implement ICommand for a save button in WPF"

> **Key Takeaway**: MVVM makes your app testable and maintainable. The View knows nothing about the Model — the ViewModel is the bridge.`,
      },
    ],
  },

  // ─── PATH 5: MOBILE APPS ─────────────────────────────────
  {
    id: "mobile-apps",
    title: "Mobile Apps (.NET MAUI)",
    description:
      "Build cross-platform mobile and desktop apps with .NET MAUI — iOS, Android, Windows, and macOS from a single codebase.",
    icon: "📱",
    level: "Advanced",
    duration: "5-7 weeks",
    category: "Mobile",
    skills: [".NET MAUI", "XAML", "Cross-Platform", "MVVM", "Platform APIs", "App Lifecycle"],
    lessons: [
      {
        id: "mobile-1",
        title: ".NET MAUI Fundamentals",
        duration: "45 min",
        type: "reading",
        content: `# .NET MAUI Fundamentals

.NET MAUI (Multi-platform App UI) lets you build native apps for iOS, Android, Windows, and macOS from a single C# codebase.

## Project Structure

\`\`\`
MyMauiApp/
├── App.xaml              ← Application resources
├── AppShell.xaml         ← Navigation shell
├── MainPage.xaml         ← Main page
├── MauiProgram.cs        ← Entry point & DI
├── Platforms/            ← Platform-specific code
│   ├── Android/
│   ├── iOS/
│   ├── Windows/
│   └── MacCatalyst/
├── Services/             ← Platform services
├── ViewModels/           ← MVVM ViewModels
└── Views/                ← XAML pages
\`\`\`

## Your First Page

\`\`\`xml
<!-- MainPage.xaml -->
<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             Title="My App">
    <ScrollView>
        <VerticalStackLayout Spacing="20" Padding="20">
            <Label Text="Welcome to .NET MAUI!"
                   FontSize="28"
                   HorizontalOptions="Center"/>

            <Entry Placeholder="Enter your name"
                   Text="{Binding Name}"/>

            <Button Text="Say Hello"
                    Clicked="OnSayHelloClicked"/>

            <Label Text="{Binding Greeting}"
                   FontSize="20"
                   HorizontalOptions="Center"/>
        </VerticalStackLayout>
    </ScrollView>
</ContentPage>
\`\`\`

## AI Coding Tip 🤖

Use AI to **build MAUI pages**:
- "Create a .NET MAUI page for a weather app with current conditions"
- "Build a MAUI settings page with toggles and sliders"

> **Key Takeaway**: MAUI uses the same XAML you know from WPF. Most code is shared — only platform-specific features need special handling.`,
      },
    ],
  },

  // ─── PATH 6: REACT (BONUS) ──────────────────────────────
  {
    id: "react-bonus",
    title: "React for .NET Developers",
    description:
      "Learn React as a .NET developer — components, hooks, state management, and how to integrate with ASP.NET Core APIs.",
    icon: "⚛️",
    level: "Intermediate",
    duration: "3-4 weeks",
    category: "Web",
    skills: ["React", "JSX", "Hooks", "State Management", "API Integration", "TypeScript"],
    lessons: [
      {
        id: "react-1",
        title: "React Fundamentals for C# Devs",
        duration: "40 min",
        type: "reading",
        content: `# React Fundamentals for C# Developers

Coming from C#? React will feel different but familiar. Here's your bridge.

## C# vs React Mental Model

| C# Concept | React Equivalent |
|-----------|-----------------|
| Class component | Function component |
| Properties | Props |
| State fields | useState |
| Lifecycle methods | useEffect |
| XAML | JSX |
| MVVM | Custom hooks |

## Your First Component

\`\`\`tsx
// A simple component — like a Blazor component but in JS/TS
function Welcome({ name }: { name: string }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Hello, {name}!</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// Usage: <Welcome name="Alice" />
\`\`\`

## Hooks — The Power of React

\`\`\`tsx
// useState — component state
const [todos, setTodos] = useState<string[]>([]);

// useEffect — side effects (like OnInitialized)
useEffect(() => {
  fetch('/api/todos')
    .then(r => r.json())
    .then(data => setTodos(data));
}, []); // Empty array = run once

// useMemo — cached computation
const expensiveValue = useMemo(() => {
  return todos.filter(t => t.length > 5);
}, [todos]);

// useCallback — cached function
const addTodo = useCallback((text: string) => {
  setTodos(prev => [...prev, text]);
}, []);
\`\`\`

## AI Coding Tip 🤖

Use AI to **convert between C# and React**:
- "Convert this C# ViewModel to a React custom hook"
- "Create a React component that calls my ASP.NET Core API"

> **Key Takeaway**: React is component-based like Blazor. Hooks replace lifecycle methods. Think of \`useState\` as a property that triggers re-renders.`,
      },
    ],
  },
  // ─── EXTRA COURSE: PYTHON (Study More Section) ────────────
  {
    id: "python-extra",
    title: "Python — Development & Cybersecurity",
    description:
      "Learn Python for web development, automation, and cybersecurity. Covers frameworks like Django, Flask, FastAPI, and security tools like Scapy, Cryptography, and more.",
    icon: "🐍",
    level: "Beginner",
    duration: "6-8 weeks",
    category: "Extra",
    skills: ["Python", "Django", "Flask", "FastAPI", "Cybersecurity", "Automation", "Scapy", "Cryptography"],
    lessons: [
      {
        id: "py-1",
        title: "Python Fundamentals",
        duration: "40 min",
        type: "reading",
        content: `# Python Fundamentals

Python is one of the most versatile and in-demand programming languages. It's used in web development, data science, AI/ML, automation, and cybersecurity.

## Why Learn Python?

- **Simple syntax** — reads like English
- **Massive ecosystem** — 400,000+ packages on PyPI
- **Cross-domain** — web, data, AI, security, automation
- **Industry standard** — used by Google, Netflix, NASA, and cybersecurity professionals

## Your First Python Program

\`\`\`python
# Variables and types
name = "Learner"
age = 25
is_enrolled = True
score = 95.5

# f-strings (like C# string interpolation)
print(f"Welcome {name}! You are {age} years old.")

# Lists (like List<T>)
numbers = [1, 2, 3, 4, 5]
numbers.append(6)

# Dictionaries (like Dictionary<TKey, TValue>)
user = {"name": "Alice", "age": 25, "city": "NYC"}

# Control flow
if score >= 90:
    print("A — Excellent!")
elif score >= 80:
    print("B — Great job!")
else:
    print("Keep practicing!")
\`\`\`

## Python vs C#

| Feature | C# | Python |
|---------|-----|--------|
| Typing | Static | Dynamic |
| Braces | \`{ }\` | Indentation |
| Semicolons | Required | Not used |
| Compilation | Compiled | Interpreted |
| Performance | Faster | Sufficient for most tasks |

> **Key Takeaway**: Python is the perfect complement to C#. Use C# for performance-critical apps and Python for scripting, automation, and rapid prototyping.`,
      },
      {
        id: "py-2",
        title: "Python for Web Development",
        duration: "50 min",
        type: "reading",
        content: `# Python for Web Development

Python powers some of the world's biggest websites. Learn the three main frameworks: Django, Flask, and FastAPI.

## Framework Comparison

| Framework | Best For | Learning Curve | Built-in Features |
|-----------|----------|----------------|-------------------|
| Django | Full-featured apps | Steep | ORM, Admin, Auth |
| Flask | Microservices, APIs | Easy | Minimal |
| FastAPI | Modern APIs, async | Medium | Auto-docs, Type hints |

## Flask — Quick API

\`\`\`python
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"message": "Hello from Flask!"})

@app.route("/api/users/<int:user_id>")
def get_user(user_id):
    return jsonify({"id": user_id, "name": "Alice"})

@app.route("/api/users", methods=["POST"])
def create_user():
    data = request.get_json()
    return jsonify({"created": data}), 201

if __name__ == "__main__":
    app.run(debug=True)
\`\`\`

## FastAPI — Modern Async API

\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    name: str
    age: int

@app.get("/")
def home():
    return {"message": "Hello from FastAPI!"}

@app.post("/users")
def create_user(user: User):
    return {"created": user}

# Auto-generated docs at /docs
\`\`\`

## Django — The Full-Stack Framework

\`\`\`python
# models.py
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

# views.py
from django.http import JsonResponse
from .models import Product

def product_list(request):
    products = Product.objects.all()
    return JsonResponse({"products": list(products.values())})
\`\`\`

> **Key Takeaway**: Choose Flask for simplicity, FastAPI for modern async APIs, and Django for full-stack applications with admin panels.`,
      },
      {
        id: "py-3",
        title: "Python for Cybersecurity",
        duration: "55 min",
        type: "reading",
        content: `# Python for Cybersecurity

Python is the #1 language in cybersecurity. From penetration testing to incident response, Python powers the tools that keep the digital world safe.

## Essential Security Libraries

| Library | Purpose | Use Case |
|---------|---------|----------|
| Scapy | Network packet manipulation | Packet sniffing, scanning |
| Cryptography | Encryption/decryption | Secure communications |
| Requests | HTTP library | Web vulnerability testing |
| Paramiko | SSH automation | Remote server management |
| BeautifulSoup | HTML parsing | Web scraping, recon |
| PyCryptodome | Cryptographic operations | Custom encryption |

## Network Scanner with Scapy

\`\`\`python
from scapy.all import ARP, Ether, srp

def scan_network(ip_range):
    """Scan a network range for active devices."""
    arp = ARP(pdst=ip_range)
    ether = Ether(dst="ff:ff:ff:ff:ff:ff")
    packet = ether/arp
    
    result = srp(packet, timeout=3, verbose=0)[0]
    
    devices = []
    for sent, received in result:
        devices.append({"ip": received.psrc, "mac": received.hwsrc})
    
    return devices

# Scan local network
devices = scan_network("192.168.1.0/24")
for device in devices:
    print(f"Found: {device['ip']} at {device['mac']}")
\`\`\`

## Password Strength Checker

\`\`\`python
import re

def check_password_strength(password):
    """Evaluate password strength with detailed feedback."""
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
    return {"strength": strength, "score": score, "feedback": feedback}
\`\`\`

## File Hashing for Integrity

\`\`\`python
import hashlib

def hash_file(filepath, algorithm="sha256"):
    """Calculate file hash for integrity verification."""
    h = hashlib.new(algorithm)
    with open(filepath, "rb") as f:
        while chunk := f.read(8192):
            h.update(chunk)
    return h.hexdigest()

# Verify file integrity
original_hash = "abc123..."
current_hash = hash_file("important_file.exe")
if original_hash == current_hash:
    print("File integrity verified")
else:
    print("WARNING: File has been modified!")
\`\`\`

> **Key Takeaway**: Python's security ecosystem is unmatched. Learn Scapy for networking, Cryptography for encryption, and Requests for web security testing.`,
      },
      {
        id: "py-4",
        title: "Python Automation & Scripting",
        duration: "45 min",
        type: "reading",
        content: `# Python Automation & Scripting

Automate boring tasks and boost productivity with Python scripts.

## File Operations

\`\`\`python
import os
import shutil
from pathlib import Path

# Batch rename files
def batch_rename(directory, old_ext, new_ext):
    for filename in os.listdir(directory):
        if filename.endswith(old_ext):
            new_name = filename.replace(old_ext, new_ext)
            os.rename(
                os.path.join(directory, filename),
                os.path.join(directory, new_name)
            )
            print(f"Renamed: {filename} -> {new_name}")

# Organize downloads folder
def organize_downloads(downloads_path):
    extensions = {
        "pdf": "Documents",
        "jpg": "Images",
        "png": "Images",
        "zip": "Archives",
        "mp4": "Videos",
    }
    
    for file in Path(downloads_path).iterdir():
        if file.is_file():
            ext = file.suffix.lower().lstrip(".")
            folder = extensions.get(ext, "Others")
            target = Path(downloads_path) / folder
            target.mkdir(exist_ok=True)
            shutil.move(str(file), str(target / file.name))
\`\`\`

## Web Scraping

\`\`\`python
import requests
from bs4 import BeautifulSoup

def scrape_headlines(url):
    """Scrape news headlines from a website."""
    response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
    soup = BeautifulSoup(response.content, "html.parser")
    
    headlines = []
    for article in soup.find_all("h2", class_="headline"):
        title = article.get_text(strip=True)
        link = article.find("a")["href"] if article.find("a") else None
        headlines.append({"title": title, "link": link})
    
    return headlines
\`\`\`

## Task Scheduler

\`\`\`python
import schedule
import time

def backup_database():
    print("Running database backup...")
    # Your backup logic here

def send_report():
    print("Sending daily report...")
    # Your reporting logic here

# Schedule tasks
schedule.every().day.at("02:00").do(backup_database)
schedule.every().hour.do(send_report)

while True:
    schedule.run_pending()
    time.sleep(60)
\`\`\`

> **Key Takeaway**: Python automation saves hours of repetitive work. Start with file operations, then move to web scraping and scheduled tasks.`,
      },
    ],
  },
];

// ── Helper: Get all courses ────────────────────────────────
export const getAllCourses = () => courses;

// ── Helper: Get course by ID ───────────────────────────────
export const getCourseById = (id) => courses.find(c => c.id === id);

// ── Helper: Get lesson by ID ───────────────────────────────
export const getLessonById = (courseId, lessonId) => {
  const course = getCourseById(courseId);
  return course?.lessons.find(l => l.id === lessonId);
};

// ── Helper: Get total lesson count ─────────────────────────
export const getTotalLessons = () =>
  courses.reduce((sum, c) => sum + c.lessons.length, 0);
