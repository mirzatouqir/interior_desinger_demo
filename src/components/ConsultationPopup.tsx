import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem('consultationPopupSeen');
      if (!hasSeen) {
        setIsOpen(true);
        sessionStorage.setItem('consultationPopupSeen', 'true');
      }
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white w-full max-w-lg relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-charcoal-900 px-8 py-6 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-serif text-2xl text-white mb-1">Get Your Free Consultation</h3>
              <p className="text-white/60 text-sm">Transform your space with our expert designers</p>
            </div>

            {/* Form */}
            <div className="p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="font-serif text-xl text-charcoal-900 mb-2">Thank You!</h4>
                  <p className="text-charcoal-500 text-sm">We will contact you within 24 hours to schedule your consultation.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-500 mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-charcoal-200 focus:border-gold-500 focus:outline-none text-sm transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-500 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-charcoal-200 focus:border-gold-500 focus:outline-none text-sm transition-colors"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-500 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-charcoal-200 focus:border-gold-500 focus:outline-none text-sm transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-500 mb-1.5">Project Type</label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 border border-charcoal-200 focus:border-gold-500 focus:outline-none text-sm transition-colors bg-white"
                    >
                      <option value="">Select project type</option>
                      <option value="villa">Villa Interior Design</option>
                      <option value="apartment">Apartment Interior Design</option>
                      <option value="office">Office Interior Design</option>
                      <option value="fitout">Fit-Out Services</option>
                      <option value="renovation">Renovation</option>
                      <option value="furniture">Custom Furniture</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-500 mb-1.5">Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-charcoal-200 focus:border-gold-500 focus:outline-none text-sm transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-charcoal-900 text-white text-sm tracking-widest uppercase font-medium hover:bg-gold-600 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Request Consultation
                  </button>
                  <p className="text-center text-xs text-charcoal-400">
                    We respect your privacy. Your information is secure with us.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
