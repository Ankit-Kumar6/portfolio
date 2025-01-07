import React from 'react';
import { Terminal } from './Terminal';
import { motion } from 'framer-motion';
import { Bug, Code2, Cpu, Shield, Terminal as TerminalIcon } from 'lucide-react';

const skillCategories = [
  {
    title: 'Reverse Engineering',
    icon: Cpu,
    skills: [
      'IDA Pro & Ghidra',
      'Radadre2',
      'dnSpy',
      'CheatEngine',
      //'x86/x64 Assembly Analysis',
      //'Windows Internals & System Programming',
      //'Anti-Debug & Anti-VM Technique Analysis'
    ]
  },
  {
    title: 'Malware Analysis',
    icon: Bug,
    skills: [
      'Advanced Static & Dynamic Analysis',
      //'Malware Classification',
      //'Network Traffic Analysis',
      'Macro Analysis',
      'Deobfuscation',
      'Wireshark'
    ]
  },
  {
    title: 'Malware Development',
    icon: Code2,
    skills: [
      'Shellcode Injection',
      'Custom Security Tool Development',
      'Automation Script Development',
      'Exploit Development',
      'API Hooking & DLL Injection'
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen bg-[#1A1814] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-['JetBrains_Mono'] text-[#D4A373] mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Terminal title={`${category.title.toLowerCase()}.sh`}>
                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <category.icon className="w-6 h-6 text-[#D4A373] mr-3" />
                    <span className="text-lg font-bold">{category.title}</span>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center">
                        <span className="text-[#8B7355] mr-2">[*]</span>
                        <span className="text-[#FAEDCD]">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Terminal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};