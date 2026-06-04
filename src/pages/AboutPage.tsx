import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/SectionHeader';
import { TEAM, DESIGN_PROCESS } from '@/data/content';

const processIconMap: Record<string, React.ReactNode> = {
  MessageCircle: <span className="font-serif text-2xl text-gold-500">01</span>,
  Lightbulb: <span className="font-serif text-2xl text-gold-500">02</span>,
  PenTool: <span className="font-serif text-2xl text-gold-500">03</span>,
  Wrench: <span className="font-serif text-2xl text-gold-500">04</span>,
  Key: <span className="font-serif text-2xl text-gold-500">05</span>,
};

export default function AboutPage() {
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Luxury interior"
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] font-medium mb-4">About Us</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-6">
              Crafting Luxury Interiors<br />Since 2015
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Desert Luxe Interiors is a premium interior design and fit-out company based in Dubai, 
              serving discerning clients across the UAE with bespoke design solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} className="section-padding bg-cream-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] font-medium text-gold-600 mb-4">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-medium leading-tight mb-6">
                A Legacy of Design Excellence
              </h2>
              <div className="space-y-4 text-charcoal-500 text-sm md:text-base leading-relaxed">
                <p>
                  Founded in 2015 by Omar Khalid, Desert Luxe Interiors began with a simple yet ambitious vision: 
                  to create interior spaces that transcend mere aesthetics and become living expressions of their owners' identities.
                </p>
                <p>
                  What started as a boutique design studio in Dubai Design District has grown into one of the UAE's most 
                  respected interior design firms, completing over 250 projects across residential, commercial, and hospitality sectors.
                </p>
                <p>
                  Our team of 50+ design experts brings together diverse talents from across the globe — architects from Italy, 
                  interior designers from France, project managers from the UK, and craftsmen from Turkey and the UAE. This 
                  multicultural expertise allows us to create designs that are both globally sophisticated and locally resonant.
                </p>
                <p>
                  Today, Desert Luxe Interiors is synonymous with luxury, precision, and innovation. From Palm Jumeirah villas 
                  to DIFC corporate headquarters, our portfolio represents the pinnacle of interior design in the Middle East.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Desert Luxe Interiors showroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-charcoal-900 p-6 md:p-8">
                <p className="font-serif text-3xl md:text-4xl text-gold-400 mb-1">10+</p>
                <p className="text-white/60 text-xs uppercase tracking-widest">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-charcoal-900 p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-[80px]" />
              <Target className="w-10 h-10 text-gold-400 mb-6" />
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Our Mission</h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                To transform every space we touch into an environment that inspires, comforts, and reflects the unique 
                identity of its inhabitants. We commit to excellence in design, integrity in execution, and innovation 
                in every solution we deliver.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-cream-100 p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-[80px]" />
              <Globe className="w-10 h-10 text-gold-600 mb-6" />
              <h3 className="font-serif text-2xl md:text-3xl text-charcoal-900 mb-4">Our Vision</h3>
              <p className="text-charcoal-500 text-sm md:text-base leading-relaxed">
                To be the most sought-after interior design partner in the Middle East, recognized for creating spaces 
                that define luxury living. We envision a future where every home and workplace in the UAE reflects the 
                perfect harmony of beauty, function, and personal expression.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { icon: <Award className="w-6 h-6" />, title: 'Excellence', desc: 'Uncompromising quality in every detail' },
              { icon: <Users className="w-6 h-6" />, title: 'Collaboration', desc: 'Working closely with our clients' },
              { icon: <Target className="w-6 h-6" />, title: 'Integrity', desc: 'Transparent processes and honest communication' },
              { icon: <Globe className="w-6 h-6" />, title: 'Innovation', desc: 'Pushing boundaries in design and technology' },
            ].map((value, i) => (
              <div key={i} className="text-center p-6 border border-charcoal-100 hover:border-gold-300 transition-colors">
                <div className="w-12 h-12 bg-cream-100 flex items-center justify-center text-gold-600 mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="font-medium text-charcoal-900 mb-1">{value.title}</h4>
                <p className="text-charcoal-400 text-xs">{value.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="section-padding bg-cream-50">
        <div className="container-luxury">
          <SectionHeader
            subtitle="Our Team"
            title="Meet the Experts"
            description="Our diverse team of designers, architects, and project managers brings together decades of experience from the world's most prestigious design capitals."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={teamVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-charcoal-900 mb-1">{member.name}</h3>
                  <p className="text-gold-600 text-xs uppercase tracking-widest font-medium mb-3">{member.role}</p>
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span key={specialty} className="text-[10px] uppercase tracking-wider px-3 py-1 bg-cream-100 text-charcoal-600">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section ref={processRef} className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeader
            subtitle="Our Process"
            title="How We Work"
            description="Our proven five-phase process ensures every project is delivered with precision, creativity, and complete client satisfaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-charcoal-200" />

            {DESIGN_PROCESS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={processVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-24 h-24 bg-cream-100 border-2 border-charcoal-100 flex items-center justify-center mx-auto mb-6 relative z-10">
                  {processIconMap[step.icon]}
                </div>
                <h3 className="font-serif text-lg text-charcoal-900 mb-2">{step.title}</h3>
                <p className="text-charcoal-500 text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-900">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto mb-8">
              Let our team of experts bring your vision to life. Schedule a complimentary consultation today.
            </p>
            <Link to="/contact" className="btn-gold inline-flex">
              Get Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
