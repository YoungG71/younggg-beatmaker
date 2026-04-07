import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ background: '#000', padding: '80px 20px', textAlign: 'center', borderTop: '1px solid #333' }}>
      <h2 style={{ color: '#FFD700', textTransform: 'uppercase', letterSpacing: '5px', marginBottom: '10px' }}>CONTACT</h2>
      <p style={{ color: '#888', marginBottom: '40px' }}>Questions about a beat or a CD? Drop a message below.</p>

      <form 
        action="https://formspree.io/f/xreqdqej" 
        method="POST" 
        style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left', background: '#0a0a0a', padding: '30px', borderRadius: '10px', border: '1px solid #1a1a1a' }}
      >
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#FFD700', display: 'block', marginBottom: '8px', fontSize: '0.9rem', letterSpacing: '1px' }}>NAME</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required
            style={{ width: '100%', padding: '12px', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '5px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#FFD700', display: 'block', marginBottom: '8px', fontSize: '0.9rem', letterSpacing: '1px' }}>EMAIL ADDRESS</label>
          <input 
            type="email" 
            name="email" 
            placeholder="email@example.com" 
            required
            style={{ width: '100%', padding: '12px', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '5px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#FFD700', display: 'block', marginBottom: '8px', fontSize: '0.9rem', letterSpacing: '1px' }}>SUBJECT / BEAT #</label>
          <input 
            type="text" 
            name="subject" 
            placeholder="Ex: Beat #05 enquiry"
            style={{ width: '100%', padding: '12px', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '5px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '30px' }}>
          <label style={{ color: '#FFD700', display: 'block', marginBottom: '8px', fontSize: '0.9rem', letterSpacing: '1px' }}>MESSAGE</label>
          <textarea 
            name="message" 
            rows="5" 
            placeholder="Your message here..." 
            required
            style={{ width: '100%', padding: '12px', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '5px', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="contact-submit"
          style={{ width: '100%', padding: '15px', background: '#FFD700', color: '#000', border: 'none', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', borderRadius: '5px', cursor: 'pointer', transition: '0.3s' }}
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;
