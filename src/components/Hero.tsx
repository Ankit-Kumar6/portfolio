import React, { useEffect, useState } from 'react';
import { Terminal } from './Terminal';
import { motion } from 'framer-motion';
import { Code2, Shield, Terminal as TerminalIcon } from 'lucide-react';

const commands = [
  { cmd: 'whoami', output: 'Ankit Kumar - gr33nwzrd' },
  { cmd: 'man gr33nwzrd', output: 'Reverse Engineer & Malware Analyst | CTF Player' },
  { cmd: './gr33nwzrd -h', output: 'Advanced Static & Dynamic Analysis of Malware files and binaries' },
];

export const Hero: React.FC = () => {
  const [commandIndex, setCommandIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (commandIndex < commands.length) {
      const timer = setTimeout(() => {
        setTyping(false);
        setTimeout(() => {
          if (commandIndex < commands.length - 1) {
            setCommandIndex(i => i + 1);
            setTyping(true);
          }
        }, 1000);
      }, commands[commandIndex].cmd.length * 50);
      return () => clearTimeout(timer);
    }
  }, [commandIndex]);

  return (
    <div className="min-h-screen bg-[#1A1814] flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 hex-pattern opacity-5" />
      
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-center space-x-4 mb-4">
          <Code2 className="w-8 h-8 text-[#D4A373]" />
          <Shield className="w-10 h-10 text-[#D4A373]" />
          <TerminalIcon className="w-8 h-8 text-[#D4A373]" />
        </div>
        <h1 className="text-4xl font-bold text-[#D4A373] mb-2 font-['JetBrains_Mono']">
          gr33nwzrd
        </h1>
        <p className="text-[#8B7355] font-['Fira_Code']">A cybersecurity enthusiast who is passionate about Reverse Engineering & Malware Analysis.</p>
      </motion.div>

      <Terminal className="w-full max-w-2xl">
        {commands.slice(0, commandIndex + 1).map((cmd, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center">
              <span className="text-[#8B7355]">┌──(</span>
              <span className="text-[#00FF00]">gr33nwzrd</span>
              <span className="text-[#8B7355]">)─[</span>
              <span className="text-[#D4A373]">~/home</span>
              <span className="text-[#8B7355]">]</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#8B7355]">└─</span>
              <span className="text-[#D4A373] ml-1">$ {cmd.cmd}</span>
            </div>
            <div className="mt-2 text-[#FAEDCD]">{cmd.output}</div>
          </div>
        ))}
      </Terminal>
    </div>
  );
};