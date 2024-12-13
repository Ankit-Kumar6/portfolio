import React, { useEffect } from 'react';
import { Mail } from 'lucide-react';
import { useContactStore } from '../store/contactStore';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export const ContactForm: React.FC = () => {
  const { form, isSubmitting, setField, submitForm } = useContactStore();

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields');
      return;
    }
    
    if (!isValidEmail(form.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    await submitForm();
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <Mail className="w-6 h-6 text-[#D4A373] mr-3" />
        <span className="text-lg font-bold">Message</span>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-[#8B7355] mb-2">Name:</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setField('name', e.target.value)}
            className="w-full bg-[#2D2419] border border-[#8B7355] rounded p-2 text-[#FAEDCD] focus:outline-none focus:border-[#D4A373]"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label className="block text-[#8B7355] mb-2">Email:</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setField('email', e.target.value)}
            className="w-full bg-[#2D2419] border border-[#8B7355] rounded p-2 text-[#FAEDCD] focus:outline-none focus:border-[#D4A373]"
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-[#8B7355] mb-2">Message:</label>
          <textarea
            value={form.message}
            onChange={(e) => setField('message', e.target.value)}
            className="w-full bg-[#2D2419] border border-[#8B7355] rounded p-2 text-[#FAEDCD] focus:outline-none focus:border-[#D4A373] h-32"
            placeholder="Your message here..."
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#2D2419] border border-[#D4A373] text-[#D4A373] py-2 rounded 
            ${!isSubmitting ? 'hover:bg-[#D4A373] hover:text-[#1A1814]' : 'opacity-50 cursor-not-allowed'}
            transition-colors`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};