import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, Trophy, BookOpen } from 'lucide-react';

const EducationSection = () => {
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
    <section id="education" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-midnight mb-4">
            My <span className="text-sky">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-card hover:shadow-hover transition-shadow duration-300 bg-gradient-card">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-sky/10 text-sky rounded-lg flex items-center justify-center mr-4">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-midnight">
                        Bachelor of Engineering
                      </h3>
                      <p className="text-sky font-semibold">
                        Artificial Intelligence and Machine Learning
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <BookOpen className="w-5 h-5 mr-3" />
                      <span>Ballari Institute of Technology and Management</span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-5 h-5 mr-3" />
                      <span>Expected Graduation: 2026</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Trophy className="w-5 h-5 mr-3 text-sky" />
                      <span className="font-semibold text-midnight">
                        CGPA: <span className="text-sky text-xl">7.75</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-midnight mb-4">Core Subjects:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Machine Learning',
                        'Deep Learning', 
                        'Data Structures',
                        'Algorithms',
                        'Computer Vision',
                        'Natural Language Processing',
                        'Database Systems',
                        'Cloud Computing'
                      ].map((subject) => (
                        <div key={subject} className="flex items-center">
                          <div className="w-2 h-2 bg-sky rounded-full mr-3"></div>
                          <span className="text-muted-foreground text-sm">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/60 p-6 rounded-lg border border-sky/20">
                    <h4 className="font-semibold text-midnight mb-4">Academic Highlights</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Consistent academic performance with 7.75 CGPA</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Specialized in AI/ML with focus on practical applications</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Active participation in technical workshops and seminars</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Completed multiple industry-relevant projects</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 p-6 rounded-lg border border-sky/20">
                    <h4 className="font-semibold text-midnight mb-4">Future Goals</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Preparing to transition into cloud engineering while maintaining expertise 
                      in AI/ML. Focused on becoming a well-rounded technology professional who 
                      can bridge the gap between artificial intelligence and scalable cloud solutions.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;