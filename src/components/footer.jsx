'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <>
      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      <footer className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
        </div>
        
        {/* Modern top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-primary to-primary/80 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-lg">LP</span>
                </div>
                
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                Pioneering the next generation of emotionally intelligent AI companions that truly understand and connect with people.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Our <span className="text-primary font-medium">cutting-edge</span> AI combines natural language processing, affective computing, and behavioral psychology.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <nav className="space-y-4">
                <a href="#about" className="block text-gray-300 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1">
                  About Us
                </a>
                <a href="#team" className="block text-gray-300 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1">
                  Our Team
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1">
                  Contact
                </a>
                <a href="#privacy" className="block text-gray-300 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1">
                  Privacy Policy
                </a>
                <a href="#terms" className="block text-gray-300 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1">
                  Terms of Service
                </a>
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-300 text-sm">
                    New York, NY<br />
                    Seoul, South Korea
                  </p>
                </div>
                
                <div className="flex items-center group">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a 
                    href="tel:+11234567890" 
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
                
                <div className="flex items-center group">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="mailto:info@likely-parents.com"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    info@likely-parents.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Subscribe for updates and insights.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 group-hover:bg-slate-800/70"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubscribe}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium hover:from-primary/90 hover:to-primary/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg"
                >
                  Subscribe
                </motion.button>
              </div>

              {/* Social Media */}
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-800 text-gray-300 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-800 text-gray-300 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-800 text-gray-300 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-800 text-gray-300 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 pt-8 border-t border-slate-800/50 text-center"
          >
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} likely-parents. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}