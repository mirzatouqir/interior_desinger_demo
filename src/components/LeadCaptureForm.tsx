import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Download } from 'lucide-react';

interface LeadCaptureFormProps {
  variant?: 'inline' | 'card' | 'popup';
  buttonText?: string;
  showDownload?: boolean;
}

export default function LeadCaptureForm({ variant = 'card', buttonText = 'Get Free Consultation', showDownload = false }: LeadCaptureFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-8"
      >
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
        <h4 className="font-serif text-xl text-charcoal-900 mb-2">Thank You!</h4>
        <p className="text-charcoal-500 text-sm mb-4">We will contact you within 24 hours.</p>
        {showDownload && (
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-white text-sm hover:bg-gold-600 transition-colors">
            <Download className="w-4 h-4" />
            Download Portfolio
          </button>
        )}
      </motion.div>
    );
  }

  const inputClass = "w-full px-4 py-3 border border-charcoal-200 focus:border-gold-500 focus:outline-none text-sm transition-colors bg-white";

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
        />
        <input
          type="tel"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass}
        />
        <button type="submit" className="btn-primary whitespace-nowrap">
          <Send className="w-4 h-4 mr-2" />
          {buttonText}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          placeholder="Your Name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
        />
        <input
          type="tel"
          required
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="email"
          required
          placeholder="Email Address *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
        />
        <select
          required
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className={inputClass}
        >
          <option value="">Project Type *</option>
          <option value="villa">Villa Interior Design</option>
          <option value="apartment">Apartment Interior Design</option>
          <option value="office">Office Interior Design</option>
          <option value="fitout">Fit-Out Services</option>
          <option value="renovation">Renovation</option>
          <option value="furniture">Custom Furniture</option>
        </select>
      </div>
      <textarea
        rows={4}
        placeholder="Tell us about your project..."
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className={`${inputClass} resize-none`}
      />
      <button type="submit" className="btn-primary w-full">
        <Send className="w-4 h-4 mr-2" />
        {buttonText}
      </button>
      {showDownload && (
        <p className="text-center text-xs text-charcoal-400">
          Submit to receive our luxury portfolio PDF
        </p>
      )}
    </form>
  );
}
