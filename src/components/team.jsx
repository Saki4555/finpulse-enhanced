


'use client';

import { useState, useEffect, useRef } from 'react';
import { motion as m } from 'motion/react';

export default function Team() {
  // Team member data
  const teamMembers = [
    {
      id: 2,
      name: "Sam Chen",
      role: "Head of Affective Computing",
      quote: "Creating AI that understands human emotions requires more than algorithms—it requires empathy, context, and genuine care for meaningful connection.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Jordan Williams",
      role: "Lead Conversational AI Engineer",
      quote: "The most advanced AI is meaningless without the ability to communicate naturally—understanding not just words, but intentions and emotions.",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Taylor Kim",
      role: "Behavioral Psychology Director",
      quote: "True AI companionship requires understanding human psychology at a fundamental level—how we think, feel, and form connections.",
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
    <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-primary/3 dark:bg-primary/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-primary/4 dark:bg-primary/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary))_1px,transparent_0)] bg-[length:30px_30px] sm:bg-[length:40px_40px] lg:bg-[length:60px_60px]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-primary/10 dark:bg-primary/20 rounded-md border border-primary/20 dark:border-primary/30 backdrop-blur-sm"
          >
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">Our Leadership Team</span>
          </m.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent">
              Meet the dedicated and diverse experts
            </span>{' '}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              building the future of AI in finance.
            </span>
          </h2>
        </m.div>

        {/* Enhanced Carousel Container */}
        <div
          className="max-w-7xl mx-auto"
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
          {/* Enhanced Carousel Content */}
          <m.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-card/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-border shadow-2xl overflow-hidden group"
            style={{
              boxShadow: '0 25px 50px -12px hsl(var(--foreground) / 0.1), 0 0 0 1px hsl(var(--border)), inset 0 1px 0 hsl(var(--background) / 0.1)'
            }}
          >
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            
            {/* Team Member Display */}
            <div className="relative flex flex-col lg:flex-row">
              {/* Enhanced Image Container */}
              <div className="w-full lg:w-1/2 relative group/image p-4 sm:p-6 lg:p-8">
                <div className="relative">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto">
                    {/* Enhanced image container with multiple borders */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/10 to-primary/15 rounded-full blur-sm animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-border shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary/12 rounded-full"></div>
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover/image:scale-110 group-hover/image:rotate-2"
                        style={{ backgroundImage: `url('${currentMember.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Overlay with subtle pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/5 to-transparent opacity-50"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Text Content */}
              <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center relative">
                {/* Quote icon */}
                <div className="absolute top-2 sm:top-4 lg:top-6 left-2 sm:left-4 lg:left-6 w-6 h-6 sm:w-8 sm:h-8 text-primary/25">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                <m.blockquote
                  key={`quote-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg lg:text-xl xl:text-2xl italic text-foreground/85 mb-6 sm:mb-8 leading-relaxed font-light relative z-10 pr-2"
                >
                  "{currentMember.quote}"
                </m.blockquote>
                
                <m.div
                  key={`info-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative z-10"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent mb-2 sm:mb-3">
                    {currentMember.name}
                  </h3>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 sm:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-primary to-primary/80 rounded-full"></div>
                    <p className="text-primary/70 text-sm sm:text-base lg:text-lg font-medium tracking-wide">{currentMember.role}</p>
                  </div>
                </m.div>
              </div>
            </div>
            
            {/* Enhanced Navigation Controls */}
            <div className="absolute top-1/2 left-2 right-2 sm:left-4 sm:right-4 lg:left-6 lg:right-6 flex justify-between transform -translate-y-1/2 z-20">
              <m.button
                onClick={goToPrev}
                whileHover={{ scale: 1.05, x: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background/60 backdrop-blur-md border border-border rounded-full p-2 sm:p-3 lg:p-4 shadow-lg hover:shadow-xl hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                aria-label="Previous team member"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </m.button>
              <m.button
                onClick={goToNext}
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background/60 backdrop-blur-md border border-border rounded-full p-2 sm:p-3 lg:p-4 shadow-lg hover:shadow-xl hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                aria-label="Next team member"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </m.button>
            </div>
          </m.div>
          
          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12 space-x-2 sm:space-x-3">
            {teamMembers.map((_, index) => (
              <m.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`relative transition-all duration-500 ${
                  index === currentIndex
                    ? 'w-8 sm:w-10 lg:w-12 h-3 sm:h-4'
                    : 'w-3 sm:w-4 h-3 sm:h-4'
                }`}
                aria-label={`Go to team member ${index + 1}`}
              >
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/25'
                    : 'bg-muted-foreground/25 hover:bg-primary/40'
                }`}></div>
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/40 rounded-full blur-sm opacity-50"></div>
                )}
              </m.button>
            ))}
          </div>
          
          {/* Progress bar */}
          <div className="mt-6 sm:mt-8 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
            <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
              <m.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / teamMembers.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
              ></m.div>
            </div>
            <div className="flex justify-between mt-1 sm:mt-2 text-xs text-muted-foreground">
              <span>1</span>
              <span>{teamMembers.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}