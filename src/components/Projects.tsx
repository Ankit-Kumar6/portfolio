import React from 'react';
import { Terminal } from './Terminal';
import { motion } from 'framer-motion';
import { Code2, GitBranch, Terminal as TerminalIcon } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: 'malware-analyzer',
    title: 'Advanced Malware Analyzer',
    description: 'Automated malware analysis framework with advanced evasion detection',
    hash: 'SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    classification: 'Analysis Framework',
    findings: [
      'Automated unpacking capabilities',
      'Anti-VM detection mechanisms',
      'Network behavior analysis'
    ],
    methodology: [
      'Static analysis with custom signatures',
      'Dynamic behavior monitoring',
      'Memory forensics integration'
    ],
    impact: 'Enhanced malware detection rates by 85%',
    gitUrl: 'https://github.com/gr33nwzrd/malware-analyzer',
    techStack: ['Python', 'Assembly', 'C++', 'YARA']
  },
  {
    id: 'binary-diffing',
    title: 'Binary Diffing Engine',
    description: 'Advanced binary comparison tool for vulnerability research',
    classification: 'Security Tool',
    findings: [
      'Pattern-based difference detection',
      'Semantic analysis capabilities',
      'Cross-platform support'
    ],
    gitUrl: 'https://github.com/gr33nwzrd/binary-differ',
    techStack: ['Rust', 'Python', 'IDA SDK']
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen bg-[#1A1814] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-['JetBrains_Mono'] text-[#D4A373] mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Research Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Terminal title={`project_${project.id}.info`}>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Code2 className="w-6 h-6 text-[#D4A373] mr-3" />
                    <span className="text-lg font-bold">{project.title}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-[#8B7355]">Description:</div>
                      <div className="text-[#FAEDCD]">{project.description}</div>
                      
                      {project.hash && (
                        <>
                          <div className="text-[#8B7355]">Hash:</div>
                          <div className="text-[#FAEDCD] text-sm font-mono">{project.hash}</div>
                        </>
                      )}
                      
                      {project.findings && (
                        <>
                          <div className="text-[#8B7355]">Key Findings:</div>
                          <ul className="list-none space-y-1">
                            {project.findings.map((finding, i) => (
                              <li key={i} className="text-[#FAEDCD]">
                                <span className="text-[#8B7355]">→</span> {finding}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      {project.methodology && (
                        <>
                          <div className="text-[#8B7355]">Methodology:</div>
                          <ul className="list-none space-y-1">
                            {project.methodology.map((method, i) => (
                              <li key={i} className="text-[#FAEDCD]">
                                <span className="text-[#8B7355]">[+]</span> {method}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      
                      <div className="text-[#8B7355]">Tech Stack:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="bg-[#2D2419] px-2 py-1 rounded text-sm text-[#FAEDCD]">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {project.gitUrl && (
                        <a
                          href={project.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-[#00FF00] hover:text-[#FAEDCD] transition-colors mt-2"
                        >
                          <GitBranch className="w-4 h-4" />
                          <span>View Source</span>
                        </a>
                      )}
                    </div>
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