import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Database, 
  Brain, 
  Cloud, 
  Users, 
  MessageSquare,
  Globe,
  GitBranch,
  Cpu,
  BarChart3
} from 'lucide-react';

const SkillsSection = () => {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-8 h-8" />,
      skills: ['Python', 'JavaScript', 'Java', 'SQL', 'HTML/CSS'],
      color: 'bg-sky/10 text-sky-dark'
    },
    {
      title: 'Frameworks & Tools', 
      icon: <Database className="w-8 h-8" />,
      skills: ['React', 'Node.js', 'Django', 'Flask', 'Git'],
      color: 'bg-midnight/10 text-midnight'
    },
    {
      title: 'AI/ML Libraries',
      icon: <Brain className="w-8 h-8" />,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas'],
      color: 'bg-sky/10 text-sky-dark'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Linux'],
      color: 'bg-midnight/10 text-midnight'
    },
    {
      title: 'Domains',
      icon: <Cpu className="w-8 h-8" />,
      skills: ['Machine Learning', 'Computer Vision', 'NLP', 'Data Analysis', 'Web Development'],
      color: 'bg-sky/10 text-sky-dark'
    },
    {
      title: 'Professional Skills',
      icon: <Users className="w-8 h-8" />,
      skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Project Management', 'Research'],
      color: 'bg-midnight/10 text-midnight'
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-midnight mb-4">
            My <span className="text-sky">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className={`p-6 group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-midnight mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-sky/10 text-sky-dark text-sm rounded-full hover:bg-sky hover:text-white transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;