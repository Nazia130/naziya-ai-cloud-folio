import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Calendar, Shield } from 'lucide-react';

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'Google Cloud Engineer',
      provider: 'Google Cloud',
      issueDate: 'July 2025',
      description: 'Comprehensive certification covering Google Cloud Platform services, architecture, and best practices for cloud engineering.',
      skills: ['Google Cloud Platform', 'Cloud Architecture', 'Compute Engine', 'Cloud Storage', 'Kubernetes'],
      certificateUrl: 'https://www.cloudskillsboost.google/public_profiles/4c1b3ff4-4c58-4f5b-9f1a-d8c5a9f7e2b1',
      logo: '☁️',
      color: 'from-blue-500/20 to-blue-600/10'
    },
    {
      title: 'AWS Cloud Practitioner',
      provider: 'Amazon Web Services',
      issueDate: 'March 2025',
      description: 'Foundational certification demonstrating understanding of AWS Cloud concepts, services, security, and pricing.',
      skills: ['AWS Services', 'Cloud Computing', 'Security', 'Billing & Pricing', 'Support'],
      certificateUrl: 'https://www.credly.com/badges/aws-cloud-practitioner-sample',
      logo: '🔶',
      color: 'from-orange-500/20 to-orange-600/10'
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-midnight mb-4">
            My <span className="text-sky">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className={`overflow-hidden group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-br ${cert.color} p-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-4xl mr-4">
                        {cert.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-midnight mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-sky font-semibold">
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {cert.issueDate}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-midnight mb-3 flex items-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Skills Validated:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-white/60 border border-border text-midnight text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      className="bg-sky hover:bg-sky-dark text-white flex-1"
                      onClick={() => window.open(cert.certificateUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {cert.provider === 'Google Cloud' ? 'View Certificate' : 'View Badge'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <Card className="p-6 bg-gradient-card">
              <Award className="w-12 h-12 text-sky mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-midnight mb-3">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                These certifications represent my commitment to staying current with cloud technologies 
                and industry best practices. I continue to expand my knowledge through hands-on projects 
                and advanced certification programs.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;