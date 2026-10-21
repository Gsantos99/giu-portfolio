import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Impact } from './sections/Impact';
import { Projects } from './sections/Projects';
import { ExperienceSection } from './sections/Experience';
import { TechStack } from './sections/TechStack';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F17] text-slate-800 dark:text-[#E2E8F0] selection:bg-[#7AF298] selection:text-[#0B0F17] transition-colors duration-300 relative bg-dev-grid">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Impact />
          <Projects />
          <ExperienceSection />
          <TechStack />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
