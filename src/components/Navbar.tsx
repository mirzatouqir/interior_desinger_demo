import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-charcoal-100'
            : 'bg-transparent'
        }`}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'bg-charcoal-900' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <span className={`font-serif text-xl font-bold ${isScrolled ? 'text-gold-400' : 'text-white'}`}>D</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-lg md:text-xl font-semibold tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-charcoal-900' : 'text-white'
                }`}>
                  Desert Luxe
                </span>
                <span className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-charcoal-400' : 'text-white/70'
                }`}>
                  Interiors
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative text-sm tracking-wider uppercase font-medium transition-colors duration-300 group ${
                    isActive(link.href)
                      ? isScrolled ? 'text-gold-600' : 'text-gold-300'
                      : isScrolled ? 'text-charcoal-600 hover:text-charcoal-900' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-300 ${
                    isActive(link.href) ? 'w-full bg-gold-500' : 'w-0 bg-gold-400 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+97145558900"
                className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-charcoal-600 hover:text-gold-600' : 'text-white/80 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+971 4 555 8900</span>
              </a>
              <Link
                to="/contact"
                className={`px-6 py-2.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-charcoal-900 text-white hover:bg-gold-600'
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-charcoal-900'
                }`}
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-charcoal-900' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal-900 pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`block text-2xl font-serif ${
                      isActive(link.href) ? 'text-gold-400' : 'text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <Link
                  to="/contact"
                  className="block w-full text-center py-4 bg-gold-500 text-white text-sm tracking-widest uppercase font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Consultation
                </Link>
                <a href="tel:+97145558900" className="flex items-center justify-center gap-2 mt-4 text-white/60 text-sm">
                  <Phone className="w-4 h-4" />
                  +971 4 555 8900
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
