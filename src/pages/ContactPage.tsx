import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/SectionHeader';
import { CONTACT_INFO } from '@/data/content';

export default function ContactPage() {
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: officesRef, isVisible: officesVisible } = useScrollAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3.5 border border-charcoal-200 focus:border-gold-500 focus:outline-none text-sm transition-colors bg-white";

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Contact"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 to-charcoal-900" />
        </div>
        <div className="container-luxury relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] font-medium mb-4">Contact Us</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-6">
              Let's Create<br />Something Extraordinary
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Reach out to schedule your complimentary consultation. Our team is ready to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={formRef} className="section-padding bg-cream-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] font-medium text-gold-600 mb-4">Get in Touch</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-medium leading-tight mb-6">
                Start Your Design Journey
              </h2>
              <p className="text-charcoal-500 text-sm md:text-base leading-relaxed mb-10">
                Whether you are planning a villa renovation, apartment fit-out, or office redesign, 
                our team is here to guide you every step of the way. Fill out the form and we will 
                respond within 24 hours.
              </p>

              {/* Quick Contact Cards */}
              <div className="space-y-4 mb-10">
                <a href="tel:+97145558900" className="flex items-center gap-4 p-4 bg-white border border-charcoal-100 hover:border-gold-300 transition-all group">
                  <div className="w-12 h-12 bg-cream-100 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-charcoal-400 mb-0.5">Call Us</p>
                    <p className="text-charcoal-900 font-medium">+971 4 555 8900</p>
                  </div>
                </a>
                <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white border border-charcoal-100 hover:border-gold-300 transition-all group">
                  <div className="w-12 h-12 bg-cream-100 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-charcoal-400 mb-0.5">WhatsApp</p>
                    <p className="text-charcoal-900 font-medium">+971 50 123 4567</p>
                  </div>
                </a>
                <a href="mailto:hello@desertluxe.ae" className="flex items-center gap-4 p-4 bg-white border border-charcoal-100 hover:border-gold-300 transition-all group">
                  <div className="w-12 h-12 bg-cream-100 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-charcoal-400 mb-0.5">Email</p>
                    <p className="text-charcoal-900 font-medium">hello@desertluxe.ae</p>
                  </div>
                </a>
              </div>

              {/* Working Hours */}
              <div className="bg-charcoal-900 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <h4 className="text-white font-medium">Working Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Sunday - Thursday</span>
                    <span className="text-white">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Friday - Saturday</span>
                    <span className="text-white">By Appointment</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-charcoal-900 mb-2">Thank You!</h3>
                  <p className="text-charcoal-500 text-sm">We have received your inquiry and will contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl text-charcoal-900 mb-2">Send Us a Message</h3>
                  <p className="text-charcoal-400 text-sm mb-8">Fill in the details below and we will get back to you shortly.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-charcoal-500 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-charcoal-500 mb-1.5">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClass}
                          placeholder="+971 XX XXX XXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-500 mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-charcoal-500 mb-1.5">Project Type *</label>
                        <select
                          required
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className={inputClass}
                        >
                          <option value="">Select type</option>
                          <option value="villa">Villa Interior Design</option>
                          <option value="apartment">Apartment Interior Design</option>
                          <option value="office">Office Interior Design</option>
                          <option value="fitout">Fit-Out Services</option>
                          <option value="renovation">Renovation</option>
                          <option value="furniture">Custom Furniture</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-charcoal-500 mb-1.5">Budget Range</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className={inputClass}
                        >
                          <option value="">Select budget</option>
                          <option value="under-500k">Under AED 500,000</option>
                          <option value="500k-1m">AED 500,000 - 1,000,000</option>
                          <option value="1m-2m">AED 1,000,000 - 2,000,000</option>
                          <option value="2m-5m">AED 2,000,000 - 5,000,000</option>
                          <option value="over-5m">Over AED 5,000,000</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-500 mb-1.5">Project Details</label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-charcoal-900 text-white text-sm tracking-widest uppercase font-medium hover:bg-gold-600 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                    <p className="text-center text-xs text-charcoal-400">
                      Your information is secure. We respect your privacy and never share your details.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section ref={officesRef} className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeader
            subtitle="Our Offices"
            title="Visit Our Showrooms"
            description="Experience our design philosophy in person at our showrooms in Dubai and Abu Dhabi."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dubai Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={officesVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="border border-charcoal-100 overflow-hidden hover:border-gold-300 transition-colors"
            >
              <div className="h-64 bg-charcoal-100 relative">
                <iframe
                  src={CONTACT_INFO.dubai.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dubai Office Location"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  <h3 className="font-serif text-xl text-charcoal-900">Dubai Office</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-charcoal-500">{CONTACT_INFO.dubai.address}</p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold-500" />
                    <a href={`tel:${CONTACT_INFO.dubai.phone.replace(/\s/g, '')}`} className="text-charcoal-600 hover:text-gold-600 transition-colors">
                      {CONTACT_INFO.dubai.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gold-500" />
                    <a href={`mailto:${CONTACT_INFO.dubai.email}`} className="text-charcoal-600 hover:text-gold-600 transition-colors">
                      {CONTACT_INFO.dubai.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-500" />
                    <span className="text-charcoal-500">{CONTACT_INFO.dubai.hours}</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Dubai
                </a>
              </div>
            </motion.div>

            {/* Abu Dhabi Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={officesVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="border border-charcoal-100 overflow-hidden hover:border-gold-300 transition-colors"
            >
              <div className="h-64 bg-charcoal-100 relative">
                <iframe
                  src={CONTACT_INFO.abuDhabi.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Abu Dhabi Office Location"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  <h3 className="font-serif text-xl text-charcoal-900">Abu Dhabi Office</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-charcoal-500">{CONTACT_INFO.abuDhabi.address}</p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold-500" />
                    <a href={`tel:${CONTACT_INFO.abuDhabi.phone.replace(/\s/g, '')}`} className="text-charcoal-600 hover:text-gold-600 transition-colors">
                      {CONTACT_INFO.abuDhabi.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gold-500" />
                    <a href={`mailto:${CONTACT_INFO.abuDhabi.email}`} className="text-charcoal-600 hover:text-gold-600 transition-colors">
                      {CONTACT_INFO.abuDhabi.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-500" />
                    <span className="text-charcoal-500">{CONTACT_INFO.abuDhabi.hours}</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Abu Dhabi
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
