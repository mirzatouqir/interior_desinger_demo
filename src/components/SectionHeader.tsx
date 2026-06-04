import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({ subtitle, title, description, align = 'center', light = false }: SectionHeaderProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-xs uppercase tracking-[0.3em] font-medium mb-4 ${light ? 'text-gold-400' : 'text-gold-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 ${light ? 'text-white' : 'text-charcoal-900'}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`max-w-2xl ${align === 'center' ? 'mx-auto' : ''} text-sm md:text-base leading-relaxed ${light ? 'text-white/70' : 'text-charcoal-500'}`}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`w-16 h-[1px] mt-6 ${align === 'center' ? 'mx-auto' : ''} ${light ? 'bg-gold-400' : 'bg-gold-500'}`}
      />
    </div>
  );
}
