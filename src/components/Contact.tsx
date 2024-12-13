import React from 'react';
import { Terminal } from './Terminal';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, BookOpen, Send } from 'lucide-react';
import { ContactForm } from './ContactForm';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Ankit-Kumar6',
    username: 'Ankit Kumar'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://x.com/gr33nwzrd',
    username: '@gr33nwzrd'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/ankit-kumar-p-582764272',
    username: 'Ankit Kumar'
  },
  {
    name: 'Medium',
    icon: BookOpen,
    url: 'https://medium.com/@gr33nwzrd',
    username: '@gr33nwzrd'
  }
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen bg-[#1A1814] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-['JetBrains_Mono'] text-[#D4A373] mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contact Terminal
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Terminal title="social_links.sh">
              <div className="space-y-4">
                <div className="flex items-center mb-4">
                  <Github className="w-6 h-6 text-[#D4A373] mr-3" />
                  <span className="text-lg font-bold">Connect</span>
                </div>
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-[#FAEDCD] hover:text-[#00FF00] transition-colors p-2 rounded hover:bg-[#2D2419]"
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="font-mono">{link.username}</span>
                  </a>
                ))}
              </div>
            </Terminal>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Terminal title="contact_form.sh">
              <ContactForm />
            </Terminal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};