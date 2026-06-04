import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/SectionHeader';
import { TESTIMONIALS } from '@/data/content';

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section ref={ref} className="section-padding bg-charcoal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-luxury relative z-10">
        <SectionHeader
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Hear from villa owners, apartment residents, and business leaders who have transformed their spaces with Desert Luxe Interiors."
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="w-16 h-16 text-gold-500/20 absolute -top-4 -left-4" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-8 italic">
                  "{current.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold-500 mb-4"
                  />
                  <h4 className="text-white font-medium text-lg">{current.name}</h4>
                  <p className="text-white/50 text-sm">{current.role}</p>
                  <p className="text-gold-400 text-xs mt-1">{current.location}</p>
                  <p className="text-white/30 text-xs mt-2">Project: {current.project}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={prev}
                className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-charcoal-900 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'bg-gold-500 w-6' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-charcoal-900 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
