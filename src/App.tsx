import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import './styles/terminal.css';

function App() {
  return (
    <div className="bg-[#1A1814]">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;