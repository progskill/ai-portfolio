
import React, { useEffect, useRef } from 'react';
import { Award, BookOpen, Briefcase, GraduationCap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Timeline data
const timelineItems = [
  {
    year: '2023',
    title: 'Founder, Education Platform',
    description: 'Launched a comprehensive platform for software development courses focusing on practical skills.',
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    year: '2021',
    title: 'Lead Developer, Tech Company',
    description: 'Led the development of scalable web applications and mentored junior developers.',
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    year: '2020',
    title: 'Founder, Blog Platform',
    description: 'Created a modern blog platform focused on developer content and community engagement.',
    icon: <Users className="h-5 w-5" />
  },
  {
    year: '2018',
    title: 'Data Scientist, AI Startup',
    description: 'Developed machine learning models for predictive analytics and data visualization.',
    icon: <Award className="h-5 w-5" />
  },
  {
    year: '2016',
    title: 'Master\'s Degree, Computer Science',
    description: 'Specialized in machine learning and artificial intelligence applications.',
    icon: <GraduationCap className="h-5 w-5" />
  }
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (bioRef.current) observer.observe(bioRef.current);
    if (timelineRef.current) observer.observe(timelineRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (bioRef.current) observer.unobserve(bioRef.current);
      if (timelineRef.current) observer.unobserve(timelineRef.current);
    };
  }, []);
  
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/10">
      <div 
        ref={sectionRef}
        className="section-container opacity-0"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey, experience, and passion for technology and education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={bioRef}
            className="opacity-0 order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a full-stack developer, data scientist, and educator with a passion for building digital products and teaching others about technology.
              </p>
              <p>
                With over 7 years of experience in the software industry, I've worked on projects ranging from small startups to large enterprise applications, always focusing on creating exceptional user experiences and writing clean, maintainable code.
              </p>
              <p>
                My interest in data science has led me to develop machine learning models that solve real-world problems, while my love for teaching has inspired me to create educational content and mentor aspiring developers.
              </p>
              <p>
                As a founder of multiple platforms, I understand the challenges of building products from the ground up and enjoy the process of bringing ideas to life through technology.
              </p>
            </div>
            
            <div className="mt-8">
              <Button className="mr-4">
                Download Resume
              </Button>
              <Button variant="outline">
                View Credentials
              </Button>
            </div>
          </div>
          
          <div 
            ref={timelineRef}
            className="opacity-0 order-1 lg:order-2"
          >
            <h3 className="text-2xl font-bold mb-6">Professional Journey</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow-sm text-primary z-10 md:group-odd:ml-8 md:group-even:mr-8">
                    {item.icon}
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded-lg shadow-sm border border-border/50">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <h4 className="font-bold">{item.title}</h4>
                      <time className="text-sm font-semibold text-muted-foreground">{item.year}</time>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
