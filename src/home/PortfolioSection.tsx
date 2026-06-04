import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Maximize2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/SectionHeader';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from '@/data/content';

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS.slice(0, 6)
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory).slice(0, 6);

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-luxury">
        <SectionHeader
          subtitle="Our Portfolio"
          title="Featured Projects"
          description="Explore our curated collection of luxury interiors across Dubai and Abu Dhabi. Each project is a testament to our commitment to excellence."
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-charcoal-900 text-white'
                  : 'bg-cream-50 text-charcoal-600 hover:bg-charcoal-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold-400 text-xs uppercase tracking-widest font-medium mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span className="text-white/50 text-xs">{project.area}</span>
                      <span className="text-white/50 text-xs">{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className={`absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}>
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/portfolio" className="btn-primary">
            View Full Portfolio
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
