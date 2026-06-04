import { useCountUp } from '@/hooks/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  description: string;
}

export default function AnimatedCounter({ end, suffix = '', label, description }: AnimatedCounterProps) {
  const { ref, count } = useCountUp(end, 2000);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-2">
        {count}{suffix}
      </div>
      <div className="w-12 h-[1px] bg-gold-500 mx-auto mb-3" />
      <h3 className="text-sm uppercase tracking-widest font-medium text-white/80 mb-1">{label}</h3>
      <p className="text-xs text-white/50 max-w-[200px] mx-auto">{description}</p>
    </div>
  );
}
