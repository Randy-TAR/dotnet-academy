import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCourseById } from '../data/courses';
import { useProgress } from '../context/ProgressContext';
import MarkdownRenderer from '../components/MarkdownRenderer';

// Exercise data for each lesson
const LESSON_EXERCISES = {
  'cs-1': [
    { id: 'ex-1-1', question: 'Create a variable called "name" with your name and print it using Console.WriteLine.', hint: 'Use string name = "YourName"; then Console.WriteLine(name);' },
    { id: 'ex-1-2', question: 'Create an integer variable "age" and a boolean "isStudent", then print both using string interpolation.', hint: 'Use $"Age: {age}, Student: {isStudent}"' },
    { id: 'ex-1-3', question: 'What is the difference between the CLR and the BCL? Write a short explanation.', hint: 'CLR executes code, BCL provides reusable types and methods.' },
  ],
  'cs-2': [
    { id: 'ex-2-1', question: 'Create a double variable "price" with value 19.99 and an int "quantity" with value 5. Calculate and print the total.', hint: 'double total = price * quantity;' },
    { id: 'ex-2-2', question: 'Use the null-coalescing operator (??) to provide a default value for a nullable string.', hint: 'string? input = null; string output = input ?? "default";' },
    { id: 'ex-2-3', question: 'What is the difference between a value type and a reference type? Give one example of each.', hint: 'Value types store data directly (int, double), reference types store a reference (string, arrays).' },
  ],
  'cs-3': [
    { id: 'ex-3-1', question: 'Write an if/else statement that prints "Even" if a number is even and "Odd" if it is odd.', hint: 'Use the modulus operator: if (number % 2 == 0)' },
    { id: 'ex-3-2', question: 'Create a for loop that prints numbers from 1 to 10.', hint: 'for (int i = 1; i <= 10; i++)' },
    { id: 'ex-3-3', question: 'Use a switch expression to convert a number (1-7) to a day of the week.', hint: 'Use the modern switch expression syntax with pattern matching.' },
  ],
  'cs-4': [
    { id: 'ex-4-1', question: 'Create a class "Car" with properties "Make", "Model", and "Year". Add a method "StartEngine" that prints a message.', hint: 'Use auto-properties and a simple void method.' },
    { id: 'ex-4-2', question: 'Create an interface "IDrivable" with a method "Drive". Implement it in a class "Truck".', hint: 'public interface IDrivable { void Drive(); }' },
    { id: 'ex-4-3', question: 'Explain the difference between inheritance and composition. When would you use each?', hint: 'Inheritance is "is-a", composition is "has-a". Favor composition for flexibility.' },
  ],
  'cs-5': [
    { id: 'ex-5-1', question: 'Create a List<int> with numbers 1-10. Use LINQ to find all even numbers.', hint: 'numbers.Where(n => n % 2 == 0).ToList()' },
    { id: 'ex-5-2', question: 'Create a Dictionary<string, int> with names and ages. Print each key-value pair.', hint: 'Use foreach (var kvp in dict) to iterate.' },
    { id: 'ex-5-3', question: 'Use LINQ to find the average of a list of numbers, then find the maximum value.', hint: 'list.Average() and list.Max()' },
  ],
  'cs-6': [
    { id: 'ex-6-1', question: 'Create an async method that returns Task<string> and uses Task.Delay to simulate work.', hint: 'public async Task<string> GetDataAsync() { await Task.Delay(1000); return "data"; }' },
    { id: 'ex-6-2', question: 'What is wrong with this code: var result = GetNumberAsync().Result? Fix it.', hint: 'Using .Result can cause deadlocks. Use await instead.' },
    { id: 'ex-6-3', question: 'Write an async method that downloads data from a URL using HttpClient with proper error handling.', hint: 'Use try/catch with HttpRequestException.' },
  ],
  'web-1': [
    { id: 'ex-web-1-1', question: 'Create a minimal API endpoint that returns a list of products.', hint: 'Use app.MapGet("/api/products", () => Results.Ok(products));' },
    { id: 'ex-web-1-2', question: 'What is middleware? Name 3 common middleware components in ASP.NET Core.', hint: 'Middleware processes requests. Examples: UseRouting, UseAuthentication, UseStaticFiles.' },
    { id: 'ex-web-1-3', question: 'Create a POST endpoint that accepts a JSON body and returns a 201 Created response.', hint: 'Use app.MapPost with a parameter and Results.Created.' },
  ],
  'web-2': [
    { id: 'ex-web-2-1', question: 'Create an EF Core model for a "Blog" with "Title", "Content", and "CreatedAt" properties.', hint: 'Use data annotations or fluent API for configuration.' },
    { id: 'ex-web-2-2', question: 'Write a LINQ query to get all products with price greater than 100, ordered by name.', hint: 'db.Products.Where(p => p.Price > 100).OrderBy(p => p.Name).ToListAsync()' },
    { id: 'ex-web-2-3', question: 'What are EF Core migrations? How do you add and apply one?', hint: 'Migrations track schema changes. Use "dotnet ef migrations add Name" then "dotnet ef database update".' },
  ],
  'web-3': [
    { id: 'ex-web-3-1', question: 'Create a REST API controller with GET, POST, PUT, and DELETE endpoints for a "Product" resource.', hint: 'Use [ApiController] and [Route] attributes with proper HTTP verbs.' },
    { id: 'ex-web-3-2', question: 'What is the difference between Ok(), NotFound(), and BadRequest()? When would you use each?', hint: '200, 404, and 400 status codes respectively.' },
    { id: 'ex-web-3-3', question: 'Add pagination to a GET endpoint using query parameters for page and pageSize.', hint: 'Use [FromQuery] parameters and LINQ Skip/Take.' },
  ],
  'blazor-1': [
    { id: 'ex-blazor-1-1', question: 'Create a Blazor component that displays a list of names using a foreach loop.', hint: 'Use @foreach (var name in names) { <p>@name</p> }' },
    { id: 'ex-blazor-1-2', question: 'Add two-way data binding to an input field in a Blazor component.', hint: 'Use @bind="propertyName" on the input element.' },
    { id: 'ex-blazor-1-3', question: 'What is the difference between Blazor Server and Blazor WebAssembly?', hint: 'Server runs on server with SignalR, WASM runs in browser via WebAssembly.' },
  ],
  'blazor-2': [
    { id: 'ex-blazor-2-1', question: 'Create a Blazor component that loads data in OnParametersSetAsync.', hint: 'Override OnParametersSetAsync and call your data loading method.' },
    { id: 'ex-blazor-2-2', question: 'Implement a simple state service that notifies components when state changes.', hint: 'Use an event Action and call StateHasChanged in components.' },
    { id: 'ex-blazor-2-3', question: 'When would you use OnAfterRender instead of OnInitialized?', hint: 'OnAfterRender is for JS interop and DOM manipulation after rendering.' },
  ],
  'desktop-1': [
    { id: 'ex-desktop-1-1', question: 'Create a WPF window with a Grid containing 2 rows and 2 columns.', hint: 'Use Grid.RowDefinitions and Grid.ColumnDefinitions.' },
    { id: 'ex-desktop-1-2', question: 'Add a Button to a WPF window that shows a MessageBox when clicked.', hint: 'Use the Click event and MessageBox.Show().' },
    { id: 'ex-desktop-1-3', question: 'What is XAML? How does it relate to WPF?', hint: 'XAML is a declarative markup language used to define WPF UIs.' },
  ],
  'desktop-2': [
    { id: 'ex-desktop-2-1', question: 'Create a ViewModel that implements INotifyPropertyChanged.', hint: 'Use the PropertyChanged event and OnPropertyChanged method.' },
    { id: 'ex-desktop-2-2', question: 'Implement a RelayCommand that can be bound to a Button in XAML.', hint: 'Create a class implementing ICommand with Execute and CanExecute.' },
    { id: 'ex-desktop-2-3', question: 'What are the benefits of the MVVM pattern?', hint: 'Separation of concerns, testability, maintainability, and design-time support.' },
  ],
  'mobile-1': [
    { id: 'ex-mobile-1-1', question: 'Create a .NET MAUI page with a Label, Entry, and Button.', hint: 'Use VerticalStackLayout with controls bound to properties.' },
    { id: 'ex-mobile-1-2', question: 'What platforms does .NET MAUI support?', hint: 'iOS, Android, Windows, and macOS from a single codebase.' },
    { id: 'ex-mobile-1-3', question: 'How do you handle platform-specific code in .NET MAUI?', hint: 'Use conditional compilation or partial classes in the Platforms folder.' },
  ],
  'react-1': [
    { id: 'ex-react-1-1', question: 'Create a React component with useState that counts button clicks.', hint: 'const [count, setCount] = useState(0);' },
    { id: 'ex-react-1-2', question: 'Use useEffect to fetch data from an API when a component mounts.', hint: 'useEffect(() => { fetchData(); }, []);' },
    { id: 'ex-react-1-3', question: 'What is the difference between props and state in React?', hint: 'Props are passed from parent (read-only), state is internal and mutable.' },
  ],
  'py-1': [
    { id: 'ex-py-1-1', question: 'Create a Python script that asks for the user\'s name and prints a greeting.', hint: 'Use input() and print(f"Hello, {name}!")' },
    { id: 'ex-py-1-2', question: 'Create a list of 5 numbers and use a for loop to print each one squared.', hint: 'for num in numbers: print(num ** 2)' },
    { id: 'ex-py-1-3', question: 'What is the difference between a list and a dictionary in Python?', hint: 'Lists are ordered collections accessed by index, dictionaries store key-value pairs.' },
  ],
  'py-2': [
    { id: 'ex-py-2-1', question: 'Create a Flask API with a GET endpoint that returns JSON.', hint: 'Use @app.route("/api/data") and jsonify().' },
    { id: 'ex-py-2-2', question: 'Create a FastAPI endpoint that accepts a Pydantic model.', hint: 'Define a BaseModel class and use it as a parameter.' },
    { id: 'ex-py-2-3', question: 'What is the difference between Django and Flask?', hint: 'Django is full-featured with built-in ORM/admin, Flask is minimal and flexible.' },
  ],
  'py-3': [
    { id: 'ex-py-3-1', question: 'Write a Python function that checks if a password contains uppercase, lowercase, and numbers.', hint: 'Use re.search() with appropriate patterns.' },
    { id: 'ex-py-3-2', question: 'Use Scapy to create and send an ARP request.', hint: 'Use ARP() and Ether() to build packets, srp() to send.' },
    { id: 'ex-py-3-3', question: 'What is the purpose of hashing in cybersecurity? Name two common hashing algorithms.', hint: 'Hashing verifies integrity and stores passwords securely. Examples: SHA-256, MD5 (legacy).' },
  ],
  'py-4': [
    { id: 'ex-py-4-1', question: 'Write a Python script that renames all .txt files in a directory to .bak.', hint: 'Use os.listdir() and os.rename().' },
    { id: 'ex-py-4-2', question: 'Create a simple web scraper using requests and BeautifulSoup.', hint: 'Use requests.get() and BeautifulSoup(response.content, "html.parser").' },
    { id: 'ex-py-4-3', question: 'What Python library would you use for scheduling tasks? Show a simple example.', hint: 'Use the schedule library with schedule.every().day.at("02:00").do(task).' },
  ],
};

export default function LessonPage() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const course = getCourseById(courseId);
  const { isLessonCompleted, completeLesson, uncompleteLesson } = useProgress();
  const [showExercises, setShowExercises] = useState(false);
  const [completedExercises, setCompletedExercises] = useState({});

  const lesson = course?.lessons.find(l => l.id === lessonId);
  const lessonIndex = course?.lessons.findIndex(l => l.id === lessonId) ?? -1;
  const isCompleted = isLessonCompleted(courseId, lessonId);

  const prevLesson = course && lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson = course && lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : null;

  const exercises = LESSON_EXERCISES[lessonId] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  if (!course || !lesson) {
    return (
      <div className="py-5 text-center">
        <h2>Lesson not found</h2>
        <Link to="/courses" className="btn btn-primary-custom mt-3">Back to Courses</Link>
      </div>
    );
  }

  const toggleComplete = () => {
    if (isCompleted) {
      uncompleteLesson(courseId, lessonId);
    } else {
      completeLesson(courseId, lessonId);
    }
  };

  const toggleExercise = (exId) => {
    setCompletedExercises(prev => ({
      ...prev,
      [exId]: !prev[exId],
    }));
  };

  const completedCount = exercises.filter(ex => completedExercises[ex.id]).length;

  return (
    <div className="py-5">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="breadcrumb" style={{ background: 'transparent', padding: 0 }}>
            <li className="breadcrumb-item">
              <Link to="/courses" style={{ color: 'var(--accent)' }}>Courses</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/courses/${course.id}`} style={{ color: 'var(--accent)' }}>{course.title}</Link>
            </li>
            <li className="breadcrumb-item active" style={{ color: 'var(--text-muted)' }}>
              {lesson.title}
            </li>
          </ol>
        </nav>

        {/* Lesson Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
          <div>
            <h1 style={{ color: 'var(--text)', fontSize: '1.5rem' }}>{lesson.title}</h1>
            <div className="d-flex align-items-center gap-3 mt-2">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                ⏱️ {lesson.duration}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                📖 {lessonIndex + 1} of {course.lessons.length}
              </span>
              {isCompleted && (
                <span className="completion-badge">✓ Completed</span>
              )}
            </div>
          </div>
          <button
            onClick={toggleComplete}
            className="btn"
            style={{
              background: isCompleted ? 'rgba(34, 197, 94, 0.15)' : 'var(--dark-surface)',
              border: `1px solid ${isCompleted ? 'var(--success)' : 'var(--dark-border)'}`,
              color: isCompleted ? 'var(--success)' : 'var(--text-muted)',
              fontWeight: 600,
            }}
          >
            {isCompleted ? '✓ Completed' : 'Mark as Complete'}
          </button>
        </div>

        {/* Lesson Content */}
        <div className="card-custom p-4 p-md-5 mb-4">
          <MarkdownRenderer content={lesson.content} />
        </div>

        {/* Exercises Section */}
        {exercises.length > 0 && (
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 style={{ color: 'var(--text)', margin: 0 }}>
                🎯 Exercises
              </h4>
              <button
                onClick={() => setShowExercises(!showExercises)}
                className="btn btn-sm"
                style={{
                  background: 'rgba(124, 58, 237, 0.15)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                }}
              >
                {showExercises ? 'Hide Exercises' : 'Show Exercises'}
              </button>
            </div>

            {showExercises && (
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  Complete these exercises to practice what you've learned. Check them off as you go!
                </p>
                <div className="d-flex gap-2 mb-3">
                  <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
                    {completedCount}/{exercises.length}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    exercises completed
                  </span>
                </div>
                {exercises.map((exercise, index) => {
                  const isExCompleted = completedExercises[exercise.id];
                  return (
                    <div
                      className="card-custom p-3 mb-3"
                      key={exercise.id}
                      style={{
                        borderLeft: isExCompleted ? '4px solid var(--success)' : '4px solid var(--primary)',
                      }}
                    >
                      <div className="d-flex align-items-start gap-3">
                        <button
                          onClick={() => toggleExercise(exercise.id)}
                          className="btn btn-sm mt-1"
                          style={{
                            background: isExCompleted ? 'var(--success)' : 'var(--dark-surface)',
                            color: isExCompleted ? 'white' : 'var(--text-muted)',
                            border: `1px solid ${isExCompleted ? 'var(--success)' : 'var(--dark-border)'}`,
                            width: '28px',
                            height: '28px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            flexShrink: 0,
                          }}
                        >
                          {isExCompleted ? '✓' : index + 1}
                        </button>
                        <div className="flex-grow-1">
                          <p style={{ color: 'var(--text)', marginBottom: '0.5rem', fontWeight: 500 }}>
                            {exercise.question}
                          </p>
                          <details>
                            <summary
                              style={{
                                color: 'var(--accent)',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                              }}
                            >
                              💡 Show Hint
                            </summary>
                            <p
                              style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.85rem',
                                marginTop: '0.5rem',
                                padding: '0.75rem',
                                background: 'var(--dark-surface)',
                                borderRadius: '0.5rem',
                              }}
                            >
                              {exercise.hint}
                            </p>
                          </details>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
          {prevLesson ? (
            <button
              onClick={() => navigate(`/courses/${course.id}/${prevLesson.id}`)}
              className="btn btn-outline-custom"
            >
              ← Previous: {prevLesson.title}
            </button>
          ) : (
            <div />
          )}
          {nextLesson ? (
            <button
              onClick={() => navigate(`/courses/${course.id}/${nextLesson.id}`)}
              className="btn btn-primary-custom"
            >
              Next: {nextLesson.title} →
            </button>
          ) : (
            <Link to={`/courses/${course.id}`} className="btn btn-primary-custom">
              Back to Course →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
