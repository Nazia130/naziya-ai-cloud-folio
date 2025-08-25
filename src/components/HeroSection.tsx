import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-midnight/80 via-midnight/60 to-sky-dark/40"></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-sky/20 rounded-lg animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-sky/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-sky/25 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Naziya <span className="text-sky">Parveen</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-sky-light mb-8 h-12">
            <TypingAnimation 
              text="AI/ML Enthusiast | Future Cloud Engineer | Problem Solver"
              speed={80}
            />
          </div>

          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about leveraging artificial intelligence and machine learning to solve real-world problems. 
            Building the future with cloud technologies and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-sky hover:bg-sky-dark text-white font-semibold px-8 py-6 text-lg shadow-hover"
              onClick={() => window.open('https://drive.google.com/file/d/1IBLsxb6hKA82kwCAzWXDTRErNbqvCKu0/view?usp=sharing', '_blank')}
            >
              <Download className="w-5 h-5 mr-3" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-sky text-sky hover:bg-sky hover:text-white font-semibold px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://linkedin.com/in/naziya-parveen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-sky transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/naziyaparveen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-sky transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:naziyaparveen@example.com"
              className="text-white/70 hover:text-sky transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:+919876543210"
              className="text-white/70 hover:text-sky transition-colors duration-200"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-white/60 hover:text-sky transition-colors duration-200"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;