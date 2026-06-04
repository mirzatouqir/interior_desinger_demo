import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-charcoal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/5" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] font-medium mb-4">Start Your Journey</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
              Ready to Transform<br />Your Space?
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
              Schedule a complimentary consultation with our design team. We will visit your property, understand your vision, and provide a detailed proposal tailored to your needs and budget.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold-500/20 flex items-center justify-center">
                  <span className="text-gold-400 font-serif text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Free Property Visit</h4>
                  <p className="text-white/40 text-xs">Our designers visit your space at no cost</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold-500/20 flex items-center justify-center">
                  <span className="text-gold-400 font-serif text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Custom Design Proposal</h4>
                  <p className="text-white/40 text-xs">Tailored concepts within 48 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold-500/20 flex items-center justify-center">
                  <span className="text-gold-400 font-serif text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Seamless Execution</h4>
                  <p className="text-white/40 text-xs">Turnkey delivery with full project management</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl text-charcoal-900 mb-2">Request Consultation</h3>
            <p className="text-charcoal-500 text-sm mb-6">Fill in your details and we will get back to you within 24 hours.</p>
            <LeadCaptureForm variant="card" buttonText="Schedule Consultation" showDownload />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
