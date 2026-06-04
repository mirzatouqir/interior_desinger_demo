import { motion } from 'framer-motion';
import { Gem, CheckCircle, Diamond, Eye, Clock, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/SectionHeader';
import { WHY_CHOOSE_US } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  Gem: <Gem className="w-7 h-7" />,
  CheckCircle: <CheckCircle className="w-7 h-7" />,
  Diamond: <Diamond className="w-7 h-7" />,
  Eye: <Eye className="w-7 h-7" />,
  Clock: <Clock className="w-7 h-7" />,
  Shield: <Shield className="w-7 h-7" />,
};

export default function WhyChooseUsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-cream-50">
      <div className="container-luxury">
        <SectionHeader
          subtitle="Why Desert Luxe"
          title="The Desert Luxe Difference"
          description="We combine artistic vision with technical precision to deliver interiors that exceed expectations in every dimension."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-white border border-charcoal-100 hover:border-gold-300 transition-all duration-500 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-cream-100 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500">
                {iconMap[item.icon]}
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">{item.title}</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
