import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-midnight mb-4">
            About <span className="text-sky">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-card hover:shadow-hover transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-midnight mb-4">
                    Hello! I'm Naziya Parveen
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I'm a passionate B.E. student in Artificial Intelligence and Machine Learning at 
                    Ballari Institute of Technology and Management, with a strong foundation in both 
                    theoretical concepts and practical applications.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    My journey in technology is driven by curiosity and the desire to create 
                    intelligent solutions that make a real-world impact. From developing chatbots 
                    to implementing face recognition systems, I love turning ideas into reality.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently preparing to transition into cloud engineering, I'm expanding my 
                    expertise in AWS and Google Cloud Platform while maintaining my passion 
                    for AI/ML innovation.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-card rounded-lg">
                      <div className="text-3xl font-bold text-sky">7.75</div>
                      <div className="text-sm text-muted-foreground">CGPA</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-card rounded-lg">
                      <div className="text-3xl font-bold text-sky">2026</div>
                      <div className="text-sm text-muted-foreground">Graduation</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-card rounded-lg">
                      <div className="text-3xl font-bold text-sky">5+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-card rounded-lg">
                      <div className="text-3xl font-bold text-sky">2+</div>
                      <div className="text-sm text-muted-foreground">Certifications</div>
                    </div>
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

export default AboutSection;