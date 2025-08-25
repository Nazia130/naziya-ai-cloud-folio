import { MessageCircle } from 'lucide-react';

const FloatingContactButton = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 bg-sky hover:bg-sky-dark text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse-glow"
      aria-label="Let's Connect"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default FloatingContactButton;