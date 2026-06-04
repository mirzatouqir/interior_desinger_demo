import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Building2, Briefcase, Hammer, RefreshCw, Sofa } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/SectionHeader';
import { SERVICES } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
  Hammer: <Hammer className="w-8 h-8" />,
  RefreshCw: <RefreshCw className="w-8 h-8" />,
  Sofa: <Sofa className="w-8 h-8" />,
};

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="section-padding bg-cream-50">
      <div className="container-luxury">
        <SectionHeader
          subtitle="Our Services"
          title="Comprehensive Design Solutions"
          description="From concept to completion, we offer a full spectrum of interior design and fit-out services tailored to your unique vision and lifestyle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white border border-charcoal-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-gold-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      {iconMap[service.icon]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-charcoal-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center text-xs uppercase tracking-widest font-medium text-charcoal-700 hover:text-gold-600 transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gold-500 transition-all duration-500 ${
                hoveredIndex === index ? 'w-full' : 'w-0'
              }`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-primary">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
