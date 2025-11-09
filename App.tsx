import { useState, useEffect } from 'react';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Skills from './src/components/Skills';
import Projects from './src/components/Projects';
import Certificates from './src/components/Certificates';
import Contact from './src/components/Contact';
import Navigation from './src/components/Navigation';
import Education from './src/components/Education';
import WorkExperience from './src/components/WorkExperience';
import FloatingElements from './src/components/FloatingElements';
import { useScrollSpy } from './src/hooks/useScrollSpy';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const activeSection = useScrollSpy();

  const sections = [
    { id: 'hero', name: 'Welcome', emoji: '👋' },
    { id: 'about', name: 'About Me', emoji: '💡' },
    { id: 'skills', name: 'Skills', emoji: '🛠️' },
    { id: 'projects', name: 'Projects', emoji: '📂' },
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
      <Education />
      <WorkExperience />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
