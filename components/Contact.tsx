'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(`Oops! ${data.error || 'There was a problem sending your message. Please try again.'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Oops! There was a problem sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg">
            <div className="flex items-start mb-6">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <a href="mailto:timjshuman@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  timjshuman@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-gray-700 dark:text-gray-300">United States</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Social</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/timshuman/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                    LinkedIn
                  </a>
                  <a href="https://github.com/timjshuman" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

