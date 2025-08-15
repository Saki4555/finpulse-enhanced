'use client';

import { useState, useEffect, useRef } from 'react';
import { motion as m } from 'motion/react';

export default function Team() {
  // Team member data
  const teamMembers = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Chief AI Officer",
    quote: "AI is not just about algorithms; it's about creating intelligent systems that understand and predict human financial behavior.",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328b5dfb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Sam Chen",
    role: "Head of Data Science",
    quote: "The future of finance lies in the ability to transform complex data into actionable insights that empower individuals.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Jordan Williams",
    role: "Lead ML Engineer",
    quote: "Machine learning models in finance must be both accurate and interpretable to build trust with users.",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Taylor Kim",
    role: "Product Strategy Director",
    quote: "Innovative financial products require a deep understanding of both technology and human psychology.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=800&q=80"
  }
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, teamMembers.length]);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    
    touchStartX.current = 0;
  };

  // Current team member
  const currentMember = teamMembers[currentIndex];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Meet the dedicated and diverse experts
            </span>{' '}
            building the future of AI in finance.
          </h2>
        </m.div>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          ref={carouselRef}
          role="region"
          aria-label="Team member carousel"
        >
          {/* Carousel Content */}
          <div className="relative bg-background/80 backdrop-blur-lg rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
            {/* Team Member Display */}
            <div className="flex flex-col md:flex-row">
              {/* Image Container */}
              <div className="md:w-1/2 relative group">
                <div className="aspect-square md:aspect-auto md:h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${currentMember.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <m.blockquote
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl italic text-foreground mb-6"
                >
                  "{currentMember.quote}"
                </m.blockquote>
                
                <m.div
                  key={`${currentIndex}-info`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-foreground">{currentMember.name}</h3>
                  <p className="text-muted-foreground mt-1">{currentMember.role}</p>
                </m.div>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="absolute top-1/2 left-4 right-4 flex justify-between transform -translate-y-1/2 z-10">
              <button
                onClick={goToPrev}
                className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-primary/10 hover:shadow-primary/20 transition-all duration-300 group"
                aria-label="Previous team member"
              >
                <svg className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-primary/10 hover:shadow-primary/20 transition-all duration-300 group"
                aria-label="Next team member"
              >
                <svg className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-6 shadow-lg shadow-primary/30'
                    : 'bg-muted hover:bg-primary/50'
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}