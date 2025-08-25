import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  MapPin, 
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '02ac9d3f-974b-448c-af70-ec3e4c0ca4b6',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Naziya Parveen Portfolio',
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'syedanaziya506@gmail.com',
      href: 'mailto:syedanaziya506@gmail.com',
      color: 'text-sky hover:text-sky-dark'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 88841 78492',
      href: 'tel:+918884178492',
      color: 'text-sky hover:text-sky-dark'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/naziya-parveen2004',
      href: 'https://linkedin.com/in/naziya-parveen2004',
      color: 'text-sky hover:text-sky-dark'
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      value: 'github.com/Nazia130',
      href: 'https://github.com/Nazia130',
      color: 'text-sky hover:text-sky-dark'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-midnight mb-4">
            Let's <span className="text-sky">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or simply have a conversation about AI, ML, and cloud technologies. Let's connect!
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 shadow-card hover:shadow-hover transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-8 h-8 text-sky mr-3" />
                <h3 className="text-2xl font-semibold text-midnight">Send me a message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-midnight mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-midnight mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-midnight mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how I can help..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-sky hover:bg-sky-dark text-white font-semibold py-3 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 shadow-card">
                <h3 className="text-2xl font-semibold text-midnight mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`flex items-center space-x-4 p-4 rounded-lg hover:bg-sky/5 transition-colors duration-200 group ${info.color}`}
                    >
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-medium text-midnight">{info.title}</div>
                        <div className="text-muted-foreground group-hover:text-sky transition-colors duration-200">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-8 shadow-card bg-gradient-card">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-sky mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-midnight mb-3">
                    Quick Response Guaranteed
                  </h4>
                  <p className="text-muted-foreground">
                    I typically respond to messages within 24 hours. 
                    For urgent matters, feel free to reach out directly via phone or LinkedIn.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;