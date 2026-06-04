import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import { STATS } from '@/data/content';

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-charcoal-900 py-16 md:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-[150px]" />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <AnimatedCounter
                end={parseInt(stat.number.replace(/\D/g, ''))}
                suffix={stat.number.replace(/[0-9]/g, '')}
                label={stat.label}
                description={stat.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
