import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ title = 'terminal', children, className = '' }) => {
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor(c => !c);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className={`terminal-window ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="terminal-header">
        <div className="terminal-button terminal-close" />
        <div className="terminal-button terminal-minimize" />
        <div className="terminal-button terminal-maximize" />
        <span className="ml-4 text-gray-400 text-sm font-mono">{title}</span>
      </div>
      <div className="terminal-content">
        {children}
        <span className={`inline-block w-2 h-4 bg-green-400 ml-1 ${cursor ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </motion.div>
  );
};