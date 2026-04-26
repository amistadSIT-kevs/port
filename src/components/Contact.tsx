import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        setErrorMsg(data.error || 'Failed to send. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Cannot reach the server. Is node server.js running?');
      setStatus('error');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">

          {/* Header */}
          <p className="text-uppercase text-secondary mb-1" style={{ fontSize: 11, letterSpacing: '0.12em' }}>
            Get in touch
          </p>
          <h2 className="fw-normal mb-2" style={{ fontFamily: 'Georgia, serif', fontSize: 32, color: '#111' }}>
            Let's work together
          </h2>
          <p className="mb-4" style={{ fontSize: 14, lineHeight: 1.7, color: '#666' }}>
            Have a project in mind or just want to say hello? Fill out the form and I'll get back to you shortly.
          </p>

          {/* Alerts */}
          {status === 'success' && (
            <div className="alert alert-success d-flex align-items-center gap-2 py-2" style={{ fontSize: 13 }}>
              <span>✓</span> Message sent! I'll be in touch soon.
            </div>
          )}
          {status === 'error' && (
            <div className="alert alert-danger d-flex align-items-center gap-2 py-2" style={{ fontSize: 13 }}>
              <span>!</span> {errorMsg}
            </div>
          )}

          {/* Card */}
          <div className="p-4 rounded-3" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5' }}>
            <form onSubmit={handleSubmit}>

              {/* Name + Email row */}
              <div className="row g-3 mb-3">
                <div className="col-12 col-sm-6">
                  <label className="form-label" style={{ fontSize: 12, letterSpacing: '0.04em', color: '#888' }}>
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Jane Smith"
                    required
                    maxLength={100}
                    value={formData.name}
                    style={{ backgroundColor: '#f5f5f5', fontSize: 14, color: '#111' }}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label" style={{ fontSize: 12, letterSpacing: '0.04em', color: '#888' }}>
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="jane@example.com"
                    required
                    maxLength={200}
                    value={formData.email}
                    style={{ backgroundColor: '#f5f5f5', fontSize: 14, color: '#111' }}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-0">
                <label className="form-label" style={{ fontSize: 12, letterSpacing: '0.04em', color: '#888' }}>
                  Message
                </label>
                <textarea
                  className="form-control border-0"
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  required
                  maxLength={2000}
                  value={formData.message}
                  style={{ backgroundColor: '#f5f5f5', fontSize: 14, color: '#111', resize: 'vertical' }}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <div className="text-end mt-1" style={{ fontSize: 11, color: '#aaa' }}>
                  {formData.message.length} / 2000
                </div>
              </div>

              {/* Footer */}
              <div
                className="d-flex align-items-center justify-content-between mt-4 pt-3"
                style={{ borderTop: '1px solid #eee' }}
              >
                <button
                  type="submit"
                  className="btn btn-dark px-4 fw-medium"
                  disabled={status === 'loading'}
                  style={{ fontSize: 14 }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send message →'}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;