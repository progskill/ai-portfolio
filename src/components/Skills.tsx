
import React, { useEffect, useRef } from 'react';
import { Code, Database, LineChart, Layers, Server, PenTool } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  {
    category: 'Frontend Development',
    description: 'Creating responsive and accessible user interfaces with modern frameworks',
    icon: <Layers className="h-8 w-8" />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML/CSS']
  },
  {
    category: 'Backend Development',
    description: 'Building robust and scalable server-side applications',
    icon: <Server className="h-8 w-8" />,
    items: ['Node.js', 'Express', 'Python', 'Django', 'Flask', 'RESTful APIs']
  },
  {
    category: 'Data Science',
    description: 'Analyzing and visualizing data to extract meaningful insights',
    icon: <LineChart className="h-8 w-8" />,
    items: ['Machine Learning', 'Pandas', 'NumPy', 'Tensorflow', 'Data Visualization', 'Jupyter']
  },
  {
    category: 'Database Management',
    description: 'Designing and maintaining efficient database systems',
    icon: <Database className="h-8 w-8" />,
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'ORM Tools']
  },
  {
    category: 'Development Tools',
    description: 'Utilizing industry-standard tools for efficient development',
    icon: <Code className="h-8 w-8" />,
    items: ['Git', 'Docker', 'CI/CD', 'Jest', 'Webpack', 'VS Code']
  },
  {
    category: 'Content Creation',
    description: 'Crafting educational content for developers',
    icon: <PenTool className="h-8 w-8" />,
    items: ['Technical Writing', 'Course Development', 'Code Reviews', 'Mentorship', 'Documentation']
  }
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 md:py-32">
      <div 
        ref={sectionRef} 
        className="section-container opacity-0"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit and areas of expertise across development, data science, and education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className="opacity-0 transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full hover:shadow-md transition-all duration-300 overflow-hidden group">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-primary">{skill.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{skill.category}</CardTitle>
                  <CardDescription>{skill.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex} 
                        className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
