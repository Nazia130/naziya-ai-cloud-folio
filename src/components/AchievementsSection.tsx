import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle, Award, Users, Code, Brain, Trophy } from 'lucide-react';

const AchievementsSection = () => {
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

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Academic Excellence',
      description: 'Maintained consistent CGPA of 7.75 throughout the AI/ML program',
      category: 'Academic'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Successful Project Deployments', 
      description: 'Developed and deployed multiple AI/ML projects including chatbot and face recognition systems',
      category: 'Technical'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI/ML Specialization',
      description: 'Specialized in machine learning algorithms, computer vision, and natural language processing',
      category: 'Expertise'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Cloud Certifications',
      description: 'Earned Google Cloud Engineer and AWS Cloud Practitioner certifications',
      category: 'Certification'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Industry Internship',
      description: 'Completed successful internship at EZ Trainings and Technologies in AI/ML development',
      category: 'Experience'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Problem Solving Skills',
      description: 'Demonstrated strong analytical and problem-solving abilities in complex technical challenges',
      category: 'Skill'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Academic': 'bg-sky/10 text-sky-dark',
      'Technical': 'bg-midnight/10 text-midnight',
      'Expertise': 'bg-sky/10 text-sky-dark',
      'Certification': 'bg-midnight/10 text-midnight',
      'Experience': 'bg-sky/10 text-sky-dark',
      'Skill': 'bg-midnight/10 text-midnight'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-midnight mb-4">
            Key <span className="text-sky">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className={`p-6 group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${getCategoryColor(achievement.category)} group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-midnight">
                        {achievement.title}
                      </h3>
                      <span className="px-2 py-1 bg-sky/10 text-sky text-xs rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-sky mb-2">7.75</div>
              <div className="text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky mb-2">5+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky mb-2">2+</div>
              <div className="text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky mb-2">1</div>
              <div className="text-muted-foreground">Internship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;