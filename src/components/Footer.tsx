
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/20 border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold tracking-tight mb-2">Developer.</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Building exceptional digital experiences and sharing knowledge through education and open source.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
                <li><a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
                <li><a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</a></li>
                <li><a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">Connect</h4>
              <div className="flex items-center space-x-4 justify-center sm:justify-start">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © {currentYear} Developer. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
