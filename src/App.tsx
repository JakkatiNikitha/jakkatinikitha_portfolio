import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import FloatingElements from './components/FloatingElements';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const activeSection = useScrollSpy();

  const sections = [
    { id: 'hero', name: 'Welcome', emoji: '👋' },
    { id: 'about', name: 'About Me', emoji: '💡' },
    { id: 'skills', name: 'Skills', emoji: '🛠️' },
  { id: 'projects', name: 'Projects', emoji: '📂' },
  { id: 'research', name: 'Research', emoji: '🔬' },
  { id: 'education', name: 'Education', emoji: '🎓' },
    { id: 'experience', name: 'Experience', emoji: '💼' },
    { id: 'certificates', name: 'Certificates', emoji: '🏅' },
    { id: 'contact', name: 'Contact', emoji: '✉️' },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <FloatingElements />
      <Navigation
        sections={sections}
        activeSection={activeSection}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <Hero />
      <About />
      <Skills />
  <Projects />
  <Research />
  <Education />
      <WorkExperience />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
