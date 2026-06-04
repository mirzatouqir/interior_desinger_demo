import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import { NAV_LINKS, SERVICES } from '@/data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Main Footer */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-white">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold tracking-wide text-white">Desert Luxe</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">Interiors</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Transforming spaces into timeless luxury. Premium interior design and fit-out solutions across the UAE since 2015.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/60 hover:text-gold-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.id}`} className="text-white/60 hover:text-gold-400 transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                <span className="text-white/60 text-sm">Unit 402, Building 7, Dubai Design District (d3), Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="tel:+97145558900" className="text-white/60 hover:text-gold-400 transition-colors text-sm">+971 4 555 8900</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="mailto:hello@desertluxe.ae" className="text-white/60 hover:text-gold-400 transition-colors text-sm">hello@desertluxe.ae</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-white/60 text-sm">Sun - Thu: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Desert Luxe Interiors. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-white/40 hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-white/40 hover:text-white/60 text-xs transition-colors">Terms of Service</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
