import React from 'react';
import { Terminal } from './Terminal';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Tag, GitBranch } from 'lucide-react';
import type { BlogPost } from '../types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const posts: BlogPost[] = [
  {
    id: 'malware-dev',
    title: 'Enumerating Process and Querying Memory',
    date: '2025-01-6',
    category: 'malware-dev',
    content: 'Enumerating the running process, listing them and then quering their memory region, based on a filter that only allows the process with RWX protection.',
    gitUrl: 'https://github.com/gr33nwzrd/NIL',
    snippets: [
      {
        language: 'C++',
        code: `void ListProcess(){
        DWORD Proc[1024], MemtoStorePID, totalProc; //Initialize

//Process ID enum
if (EnumProcesses(Proc, sizeof(Proc), &MemtoStorePID)) {
    totalProc = MemtoStorePID / sizeof(DWORD);
    }
    if (EnumProcessModules(hProc, &hMod, sizeof(hMod), &MemtoStorePID)) {
    GetModuleBaseNameA(hProc, hMod, ProcName, sizeof(ProcName) / sizeof(CHAR));
}`
      }
    ]
  },
  {
    id: 'analyzing-emotet',
    title: 'Analyzing Emotet: Advanced Evasion Techniques',
    date: '2024-03-15',
    category: 'malware-analysis',
    content: 'Recent analysis of Emotet samples revealed sophisticated anti-analysis techniques...',
    snippets: [
      {
        language: 'python',
        code: `def detect_vm_artifacts():
    artifacts = [
        "VMwareService.exe",
        "VBoxService.exe"
    ]
    for artifact in artifacts:
        if check_process(artifact):
            return True
    return False`
      }
    ]
  },
  {
    id: 'zero-day-windows',
    title: 'Zero-day Discovery: Windows Kernel Exploitation',
    date: '2024-03-10',
    category: 'zero-day',
    content: 'During routine kernel analysis, we discovered a critical vulnerability...',
    snippets: [
      {
        language: 'cpp',
        code: `NTSTATUS TriggerVulnerability() {
    HANDLE hDevice = CreateFileW(L"\\\\.\\Device",
        GENERIC_READ | GENERIC_WRITE,
        0, NULL, OPEN_EXISTING,
        FILE_ATTRIBUTE_NORMAL, NULL);
    // Vulnerability trigger code
    return STATUS_SUCCESS;
}`
      }
    ]
  }
];

const categoryColors = {
  'reverse-engineering': 'text-yellow-400',
  'malware-analysis': 'text-green-400',
  'malware-dev': 'text-red-400',
  'zero-day': 'text-purple-400',
  'tool-development': 'text-blue-400',
};

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="min-h-screen bg-[#1A1814] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-['JetBrains_Mono'] text-[#D4A373] mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Research Log
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Terminal title={`${post.id}.log`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpen className="w-6 h-6 text-[#D4A373] mr-3" />
                      <span className="text-lg font-bold">{post.title}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-[#8B7355] mr-2" />
                        <span className="text-sm text-[#8B7355]">{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 text-[#8B7355] mr-2" />
                        <span className={`text-sm ${categoryColors[post.category]}`}>
                          {post.category.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-[#FAEDCD]">{post.content}</div>
                  
                  {post.snippets?.map((snippet, i) => (
                    <div key={i} className="mt-4">
                      <div className="text-[#8B7355] mb-2">Code Sample:</div>
                      <SyntaxHighlighter
                        language={snippet.language}
                        style={vscDarkPlus}
                        customStyle={{
                          background: '#2D2419',
                          padding: '1rem',
                          borderRadius: '0.5rem',
                          fontSize: '0.9rem',
                        }}
                      >
                        {snippet.code}
                      </SyntaxHighlighter>
                    </div>
                  ))}

                  {post.gitUrl && (
                    <a
                      href={post.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-[#00FF00] hover:text-[#FAEDCD] transition-colors mt-2"
                    >
                      <GitBranch className="w-4 h-4" />
                      <span>View Source</span>
                    </a>
                  )}
                </div>
              </Terminal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
