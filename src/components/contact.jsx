'use client';

import { motion as m } from 'motion/react';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  // Location data with office information
  const locations = [
  {
    id: 1,
    city: "New York",
    name: "Headquarters",
    address: "123 Financial District, Suite 1000",
    email: "info@finpulse.com",
    image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    city: "London",
    name: "European Office",
    address: "456 Tech Street, London EC2A",
    email: "europe@finpulse.com",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    city: "Singapore",
    name: "Asia Pacific Office",
    address: "789 Financial Center, Singapore 018902",
    email: "apac@finpulse.com",
    image: "https://images.unsplash.com/photo-1557401470-14112a1750c7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    city: "Sydney",
    name: "Australia Office",
    address: "101 Collins Street, Sydney NSW 2000",
    email: "australia@finpulse.com",
    image: "https://images.unsplash.com/photo-1517495306999-d5e01277f9d7?auto=format&fit=crop&w=800&q=80"
  }
];


  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            We would love to hear from you
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get in Touch!
            </span>
          </h2>
        </m.div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <m.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                {/* Location Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${location.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <h3 className="text-2xl font-bold text-foreground uppercase tracking-wider">
                      {location.city}
                    </h3>
                  </div>
                </div>
                
                {/* Location Details */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {location.name}
                  </h4>
                  
                  <div className="space-y-3 mt-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        {location.address}
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <a 
                        href={`mailto:${location.email}`} 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href={`mailto:${location.email}`}
                      className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 font-medium"
                    >
                      Contact this office
                      <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}