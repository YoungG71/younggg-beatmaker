import React, { useState } from 'react';
import { CheckCircle, Send, Loader2, AlertCircle } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xreqdqej';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle | loading | success | error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 text-center relative border-t border-zinc-800">
      <h2 className="text-west-gold uppercase tracking-[5px] mb-2 relative z-10 text-3xl md:text-4xl font-bold">
        CONTACT
      </h2>
      <p className="text-gray-400 mb-10 text-lg relative z-10 max-w-xl mx-auto">
        Questions about a beat or a CD? Drop a message below.
      </p>

      {formState === 'success' ? (
        <div className="max-w-md mx-auto bg-zinc-900/50 border border-west-gold/30 rounded-xl p-10 relative z-10">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl text-west-gold font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-400">I'll get back to you as soon as possible.</p>
          <button
            onClick={() => setFormState('idle')}
            className="mt-6 text-west-gold underline hover:no-underline transition-all"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto text-left bg-black/60 border border-zinc-800 p-8 rounded-xl relative z-10 backdrop-blur-sm"
        >
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="name" className="text-west-gold block mb-2 text-sm tracking-wider uppercase font-semibold">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 text-white px-4 py-3 rounded outline-none focus:border-west-gold focus:ring-2 focus:ring-west-gold/30 transition-all placeholder:text-zinc-600"
              aria-required="true"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="text-west-gold block mb-2 text-sm tracking-wider uppercase font-semibold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 text-white px-4 py-3 rounded outline-none focus:border-west-gold focus:ring-2 focus:ring-west-gold/30 transition-all placeholder:text-zinc-600"
              aria-required="true"
            />
          </div>

          {/* Subject */}
          <div className="mb-5">
            <label htmlFor="subject" className="text-west-gold block mb-2 text-sm tracking-wider uppercase font-semibold">
              Subject / Beat #
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Ex: Beat #05 enquiry"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 text-white px-4 py-3 rounded outline-none focus:border-west-gold focus:ring-2 focus:ring-west-gold/30 transition-all placeholder:text-zinc-600"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="text-west-gold block mb-2 text-sm tracking-wider uppercase font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message here..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 text-white px-4 py-3 rounded outline-none focus:border-west-gold focus:ring-2 focus:ring-west-gold/30 transition-all placeholder:text-zinc-600 resize-vertical"
              aria-required="true"
            />
          </div>

          {/* Error message */}
          {formState === 'error' && (
            <div className="mb-4 p-3 bg-red-900/30 border border-red-500/50 rounded flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              Something went wrong. Please try again or send an email directly.
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={formState === 'loading'}
            className="w-full py-4 bg-west-gold text-black font-black text-lg uppercase tracking-widest rounded-lg hover:bg-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-west-gold/50"
          >
            {formState === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                SENDING...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                SEND MESSAGE
              </>
            )}
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
