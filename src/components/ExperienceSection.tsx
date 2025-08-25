import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Calendar, Building2 } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-midnight mb-4">
            My <span className="text-sky">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sky/30"></div>
              
              <Card className="relative ml-20 p-8 shadow-card hover:shadow-hover transition-shadow duration-300">
                {/* Timeline dot */}
                <div className="absolute -left-12 top-8 w-6 h-6 bg-sky rounded-full border-4 border-background shadow-lg"></div>
                
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-midnight mb-2">
                        Intern - AI/ML Development
                      </h3>
                      <div className="flex items-center text-sky font-semibold mb-4">
                        <Building2 className="w-5 h-5 mr-2" />
                        EZ Trainings and Technologies
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end">
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>June 2024 - August 2024</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <h4 className="text-lg font-semibold text-midnight mb-3">Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span>Developed machine learning models for data analysis and prediction tasks using Python and scikit-learn</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span>Implemented data preprocessing pipelines and feature engineering techniques to improve model accuracy</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span>Collaborated with senior developers on AI project development and deployment strategies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span>Gained hands-on experience with cloud platforms and model deployment in production environments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span>Participated in code reviews and agile development methodologies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="text-lg font-semibold text-midnight mb-3">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Machine Learning', 
                        'Python Programming', 
                        'Data Analysis', 
                        'Model Deployment', 
                        'Team Collaboration', 
                        'Agile Development'
                      ].map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-sky/10 text-sky-dark text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;