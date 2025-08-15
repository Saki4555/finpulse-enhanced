'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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

      <footer className="relative mt-20 overflow-hidden">
        {/* Wave separator */}
        <div className="absolute top-0 left-0 right-0">
          <svg 
            viewBox="0 0 1200 120" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-auto text-background"
          >
            <path 
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" 
              className="fill-muted"
            ></path>
          </svg>
        </div>

        {/* Footer content */}
        <div className="bg-gradient-to-br from-foreground to-foreground/90 pt-24 pb-10 text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-1"
              >
                <h3 className="text-2xl font-bold mb-4 text-background">FinPulse</h3>
                <p className="mb-4 text-background/80 leading-relaxed">
                  We are a leading financial technology company dedicated to providing innovative solutions for modern businesses. Our <span className="text-primary font-medium">cutting-edge</span> platforms help streamline financial operations and drive growth.
                </p>
                <p className="text-background/80 leading-relaxed">
                  With over a decade of experience, we've helped <span className="text-primary font-medium">thousands</span> of clients achieve their financial goals through our comprehensive suite of services.
                </p>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-1"
              >
                <h3 className="text-2xl font-bold mb-4 text-background">Newsletter</h3>
                <p className="mb-4 text-background/80">
                  Subscribe to our newsletter for the latest updates and insights.
                </p>
                <form className="space-y-3">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-full bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <h3 className="text-2xl font-bold mb-4 text-background">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-background/80">
                      123 Financial District, Suite 1000<br />
                      New York, NY 10001
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <a
                      href="tel:+11234567890"
                      className="text-background/80 hover:text-primary transition-colors duration-300"
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <a
                      href="mailto:info@finpulse.com"
                      className="text-background/80 hover:text-primary transition-colors duration-300"
                    >
                      info@finpulse.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-1"
              >
                <h3 className="text-2xl font-bold mb-4 text-background">Follow Us</h3>
                <p className="mb-4 text-background/80">
                  Stay connected with our latest news and updates.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-background/10 text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-background/10 text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-background/10 text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-background/10 text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Copyright bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 pt-6 border-t border-background/20 text-center"
            >
              <p className="text-background/70 text-sm">
                &copy; {new Date().getFullYear()} FinPulse. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
}