export interface Project {
  id: string;
  title: string;
  description: string;
  hash?: string;
  classification?: string;
  findings?: string[];
  methodology?: string[];
  impact?: string;
  gitUrl?: string;
  techStack: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: 'reverse-engineering' | 'malware-analysis' | 'zero-day' | 'tool-development';
  content: string;
  gitUrl?: string;
  snippets?: Array<{
    language: string;
    code: string;
  }>;
}