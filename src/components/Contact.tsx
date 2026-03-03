'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formDataObj  = new FormData(formElement);

    try {
      const response = await fetch("/__forms.html", {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataObj
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-12">
          Have a project in mind? I&apos;d love to hear from you. Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>

        {submitted && (
          <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ Thank you for your message! I&apos;ll be in touch soon.
          </div>
        )}

        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-lg shadow-md"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Or connect with me on social media:</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/buiquangduy/" className="text-gray-600 hover:text-blue-600 transition">
              LinkedIn
            </a>
            <a href="https://github.com/jojobear88/" className="text-gray-600 hover:text-blue-600 transition">
              GitHub
            </a>
            <a href="https://x.com/jojobear8888" className="text-gray-600 hover:text-blue-600 transition">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
