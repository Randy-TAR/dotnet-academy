import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import LessonPage from './pages/LessonPage';
import AICoding from './pages/AICoding';
import Roadmap from './pages/Roadmap';
import Playground from './pages/Playground';
import Community from './pages/Community';
import About from './pages/About';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/courses/:courseId/:lessonId" element={<LessonPage />} />
          <Route path="/ai-coding" element={<AICoding />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
