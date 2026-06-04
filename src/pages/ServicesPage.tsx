import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/SectionHeader';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { SERVICES } from '@/data/content';

const iconMap: Record<string, string> = {
  Home: '🏡',
  Building2: '🏢',
  Briefcase: '💼',
  Hammer: '🔨',
  RefreshCw: '🔄',
  Sofa: '🛋️',
};

export default function ServicesPage() {
  const location = useLocation();
  const [activeService, setActiveService] = useState(SERVICES[0].id);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && SERVICES.find(s => s.id === hash)) {
      setActiveService(hash);
      setTimeout(() => {
        const element = document.getElementById('service-detail');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  const currentService = SERVICES.find(s => s.id === activeService) || SERVICES[0];
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Luxury interior design"
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] font-medium mb-4">Our Services</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-6">
              Comprehensive Design<br />& Fit-Out Solutions
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              From luxury villas to corporate headquarters, we deliver end-to-end interior design and fit-out services 
              tailored to your unique requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="sticky top-20 z-30 bg-white border-b border-charcoal-100 shadow-sm">
        <div className="container-luxury">
          <div className="flex overflow-x-auto scrollbar-hide gap-1 py-4">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  setActiveService(service.id);
                  setTimeout(() => {
                    document.getElementById('service-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 50);
                }}
                className={`flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-charcoal-900 text-white'
                    : 'bg-cream-50 text-charcoal-600 hover:bg-charcoal-100'
                }`}
              >
                <span>{iconMap[service.icon] || '✦'}</span>
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section id="service-detail" ref={ref} className="section-padding bg-cream-50">
        <div className="container-luxury">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Image */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden mb-12">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <p className="text-gold-400 text-xs uppercase tracking-widest font-medium mb-2">{currentService.title}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-white">{currentService.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 md:p-10 mb-8">
                  <h3 className="font-serif text-2xl text-charcoal-900 mb-4">Overview</h3>
                  <p className="text-charcoal-500 text-sm md:text-base leading-relaxed">{currentService.fullDescription}</p>
                </div>

                {/* Features */}
                <div className="bg-white p-8 md:p-10 mb-8">
                  <h3 className="font-serif text-2xl text-charcoal-900 mb-6">What We Offer</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentService.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-gold-600" />
                        </div>
                        <span className="text-charcoal-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-charcoal-900 p-8 md:p-10">
                  <h3 className="font-serif text-2xl text-white mb-6">Key Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-gold-400" />
                        </div>
                        <span className="text-white/70 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Process */}
                <div className="bg-white p-6 md:p-8">
                  <h4 className="font-serif text-lg text-charcoal-900 mb-6">Our Process</h4>
                  <div className="space-y-6">
                    {currentService.process.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 bg-cream-100 flex items-center justify-center shrink-0">
                          <span className="font-serif text-sm text-gold-600">{step.step}</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-charcoal-900 text-sm mb-1">{step.title}</h5>
                          <p className="text-charcoal-400 text-xs leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Locations */}
                <div className="bg-white p-6 md:p-8">
                  <h4 className="font-serif text-lg text-charcoal-900 mb-4">Service Areas</h4>
                  <div className="space-y-2">
                    {currentService.locations.map((loc) => (
                      <div key={loc} className="flex items-center gap-2 text-sm text-charcoal-500">
                        <MapPin className="w-3 h-3 text-gold-500" />
                        {loc}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gold-500 p-6 md:p-8 text-center">
                  <h4 className="font-serif text-xl text-white mb-2">Start Your Project</h4>
                  <p className="text-white/80 text-sm mb-4">Get a free consultation for your {currentService.title.toLowerCase()}.</p>
                  <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white text-charcoal-900 text-xs uppercase tracking-widest font-medium hover:bg-charcoal-900 hover:text-white transition-colors">
                    Contact Us
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeader
            subtitle="Explore More"
            title="All Our Services"
            description="Discover our complete range of interior design and fit-out solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => {
                  setActiveService(service.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group cursor-pointer p-6 border transition-all duration-300 ${
                  activeService === service.id
                    ? 'border-gold-500 bg-gold-50'
                    : 'border-charcoal-100 hover:border-gold-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{iconMap[service.icon] || '✦'}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                    activeService === service.id ? 'text-gold-600 translate-x-1' : 'text-charcoal-300 group-hover:text-gold-600 group-hover:translate-x-1'
                  }`} />
                </div>
                <h3 className={`font-serif text-lg mb-2 ${activeService === service.id ? 'text-gold-700' : 'text-charcoal-900'}`}>
                  {service.title}
                </h3>
                <p className="text-charcoal-400 text-xs leading-relaxed">{service.shortDescription}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Request a Service Consultation
              </h2>
              <p className="text-white/60 text-sm mb-8">
                Tell us about your project and we will match you with the right expertise.
              </p>
              <div className="bg-white p-8 md:p-10">
                <LeadCaptureForm variant="card" buttonText="Request Service Info" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
