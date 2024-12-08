import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code2, BookOpen, Send } from 'lucide-react';

const navItems = [
  { icon: Terminal, label: 'Home', href: '#' },
  { icon: Shield, label: 'Arsenal', href: '#skills' },
  { icon: Code2, label: 'Projects', href: '#projects' },
  { icon: BookOpen, label: 'Blog', href: '#blog' },
  { icon: Send, label: 'Contact', href: '#contact' }
];

export const Navigation: React.FC = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-[#1A1814]/90 backdrop-blur-sm border-b border-[#2D2419] z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-[#00FF00] font-['Fira_Code'] font-bold">gr33nwzrd</span>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-[#D4A373] hover:text-[#FAEDCD] transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-mono text-sm">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};