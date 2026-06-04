import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FAQS } from '@/data/content';

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-xs uppercase tracking-[0.3em] font-medium text-gold-600 mb-4">FAQ</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900 leading-tight mb-6">
              Frequently Asked<br />Questions
            </h2>
            <p className="text-charcoal-500 text-sm md:text-base leading-relaxed mb-8">
              Have questions about our interior design services? We have compiled the most common inquiries from our clients. If you do not find your answer here, feel free to reach out directly.
            </p>
            <div className="w-16 h-[1px] bg-gold-500" />
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="border border-charcoal-100 overflow-hidden transition-all duration-300 hover:border-gold-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-cream-50 hover:bg-white transition-colors"
                >
                  <span className="font-medium text-charcoal-900 text-sm md:text-base pr-4">{faq.question}</span>
                  <span className="shrink-0 w-8 h-8 bg-charcoal-900 text-white flex items-center justify-center">
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2">
                        <p className="text-charcoal-500 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
