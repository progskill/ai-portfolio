
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div 
        ref={heroRef} 
        className="section-container flex flex-col items-center text-center opacity-0"
      >
        <div className="mb-4 inline-flex items-center rounded-full border border-border/40 bg-muted/20 px-3 py-1 text-sm backdrop-blur-md">
          <span className="text-muted-foreground">Available for new opportunities</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          <span className="block">Full-Stack Developer</span>
          <span className="text-gradient block mt-2">
            <AnimatedText 
              text={["React Expert", "Python Developer", "Data Scientist", "Educator"]} 
              speed={80}
              delay={2000}
            />
          </span>
        </h1>
        
        <p className="max-w-2xl text-muted-foreground text-lg md:text-xl mb-8">
          Building exceptional digital experiences, creating educational content, and contributing to open source projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button className="px-6 py-6 text-base">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="px-6 py-6 text-base">
            Get in Touch
          </Button>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
            <span className="sr-only">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
