import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Maximize2, Calendar, Ruler, User, Tag } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/SectionHeader';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES, PORTFOLIO_LOCATIONS } from '@/data/content';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLocation, setActiveLocation] = useState('All Locations');
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_PROJECTS[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
    const locationMatch = activeLocation === 'All Locations' || project.location.includes(activeLocation.replace('All Locations', ''));
    return categoryMatch && locationMatch;
  });

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Portfolio"
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] font-medium mb-4">Our Work</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-6">
              Luxury Project<br />Portfolio
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Explore our curated collection of luxury interiors across Dubai and Abu Dhabi's most prestigious addresses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-white border-b border-charcoal-100 shadow-sm">
        <div className="container-luxury">
          <div className="py-4 space-y-3">
            {/* Category Filter */}
            <div className="flex overflow-x-auto scrollbar-hide gap-2">
              <span className="text-xs uppercase tracking-wider text-charcoal-400 self-center mr-2 shrink-0">Type:</span>
              {PORTFOLIO_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-charcoal-900 text-white'
                      : 'bg-cream-50 text-charcoal-600 hover:bg-charcoal-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {/* Location Filter */}
            <div className="flex overflow-x-auto scrollbar-hide gap-2">
              <span className="text-xs uppercase tracking-wider text-charcoal-400 self-center mr-2 shrink-0">Location:</span>
              {PORTFOLIO_LOCATIONS.map((location) => (
                <button
                  key={location}
                  onClick={() => setActiveLocation(location)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-300 ${
                    activeLocation === location
                      ? 'bg-gold-500 text-white'
                      : 'bg-cream-50 text-charcoal-600 hover:bg-charcoal-100'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={ref} className="section-padding bg-cream-50">
        <div className="container-luxury">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-white"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

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
                      <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-charcoal-400 text-lg">No projects found for the selected filters.</p>
              <button
                onClick={() => { setActiveCategory('All'); setActiveLocation('All Locations'); }}
                className="mt-4 text-gold-600 text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-charcoal-900 text-white flex items-center justify-center hover:bg-gold-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Image */}
              <div className="relative h-64 md:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <span className="text-gold-400 text-xs uppercase tracking-widest font-medium">{selectedProject.category}</span>
                  <h2 className="font-serif text-2xl md:text-3xl text-white mt-1">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 md:p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-500" />
                    <span className="text-sm text-charcoal-600">{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-gold-500" />
                    <span className="text-sm text-charcoal-600">{selectedProject.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold-500" />
                    <span className="text-sm text-charcoal-600">{selectedProject.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gold-500" />
                    <span className="text-sm text-charcoal-600">{selectedProject.client}</span>
                  </div>
                </div>

                <p className="text-charcoal-500 text-sm md:text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-cream-100 text-charcoal-600 text-xs">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Gallery */}
                <h3 className="font-serif text-xl text-charcoal-900 mb-4">Project Gallery</h3>
                <div className="grid grid-cols-3 gap-3">
                  {selectedProject.gallery.map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden">
                      <img src={img} alt={`${selectedProject.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
