import { create } from 'zustand';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface ContactStore {
  form: ContactForm;
  isSubmitting: boolean;
  setField: (field: keyof ContactForm, value: string) => void;
  resetForm: () => void;
  submitForm: () => Promise<void>;
}

const initialState: ContactForm = {
  name: '',
  email: '',
  message: ''
};

export const useContactStore = create<ContactStore>((set, get) => ({
  form: initialState,
  isSubmitting: false,
  
  setField: (field, value) => {
    set((state) => ({
      form: { ...state.form, [field]: value }
    }));
  },
  
  resetForm: () => {
    set({ form: initialState });
  },
  
  submitForm: async () => {
    const { form } = get();
    set({ isSubmitting: true });
    
    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      if (response.status === 200) {
        get().resetForm();
        alert('Message sent successfully!');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      set({ isSubmitting: false });
    }
  }
}));