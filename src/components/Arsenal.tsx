import React from 'react';
import { Terminal } from './Terminal';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const skills = [
  'Advanced Malware Analysis',
  'Static and Dynamic Reverse Engineering',
  //'Binary Exploitation & Vulnerability Research',
  //'Windows Internals & System Programming',
  'Assembly (x86/x64)',
  //'Custom Tool Development for Security Analysis',
  //'Threat Intelligence & Zero-day Research',
  //'Network Protocol Analysis & Exploitation',
  //'Anti-Debug & Anti-VM Technique Analysis'
];

export const Arsenal: React.FC = () => {
  return (
    <section id="arsenal" className="min-h-screen bg-[#1A1814] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-['JetBrains_Mono'] text-[#D4A373] mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Terminal title="skills.sh">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-[#D4A373] mr-3" />
              <span className="text-lg">Core Competencies</span>
            </div>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-[#8B7355] mr-2">[*]</span>
                  <span className="text-[#FAEDCD]">{skill}</span>
                </div>
              ))}
            </div>
          </Terminal>
        </motion.div>
      </div>
    </section>
  );
};