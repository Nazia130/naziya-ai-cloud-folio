import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
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

  const projects = [
    {
      title: 'College Chatbot',
      role: 'Lead Developer',
      description: 'Developed an intelligent chatbot system for college inquiries using natural language processing. The bot provides instant responses to student queries about courses, admissions, facilities, and campus information.',
      achievements: [
        'Implemented NLP algorithms for query understanding',
        'Achieved 90% accuracy in response relevance',
        'Integrated with college database for real-time information',
        'Deployed web-based interface for easy access'
      ],
      technologies: ['Python', 'NLTK', 'Flask', 'SQLite', 'HTML/CSS', 'JavaScript'],
      githubUrl: 'https://github.com/naziyaparveen/college-chatbot',
      gradient: 'from-sky/20 to-sky-light/10'
    },
    {
      title: 'Face2Info – Face Recognition System',
      role: 'AI/ML Engineer',
      description: 'Built a comprehensive face recognition system that can identify individuals and retrieve their information from a database. Includes real-time detection, recognition accuracy optimization, and secure data handling.',
      achievements: [
        'Developed using OpenCV and deep learning models',
        'Achieved 95% recognition accuracy',
        'Implemented real-time face detection and tracking',
        'Built secure database integration for information retrieval'
      ],
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Face Recognition', 'SQLite', 'Tkinter'],
      githubUrl: 'https://github.com/naziyaparveen/face2info-recognition',
      gradient: 'from-midnight/20 to-midnight-light/10'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-midnight mb-4">
            Featured <span className="text-sky">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-12"></div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`overflow-hidden group hover:shadow-hover transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-r ${project.gradient} p-8`}>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-midnight">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-sky/20 text-sky-dark text-sm rounded-full">
                          {project.role}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-midnight mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-sky rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-6 mb-6">
                        <Button 
                          className="bg-sky hover:bg-sky-dark text-white"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </div>
                    </div>

                    <div className="lg:border-l lg:border-border lg:pl-8">
                      <h4 className="font-semibold text-midnight mb-4">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-2 bg-white/50 border border-border text-midnight text-sm rounded-lg hover:bg-sky/10 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;