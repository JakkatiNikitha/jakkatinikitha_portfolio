import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Jakkati Nikitha";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-300/30 dark:bg-orange-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-300/30 dark:bg-red-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200/20 dark:bg-orange-400/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 bg-clip-text text-transparent">
            {displayText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4 animate-slide-up animation-delay-500">
            Machine Learning Enthusiast | Data Analytics | Python Developer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 animate-slide-up animation-delay-700">
            Computer Science Engineering student passionate about developing, deploying, and monitoring ML models for real-world applications
          </p>
        </div>

        <button
          onClick={scrollToAbout}
          className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 animate-slide-up animation-delay-1000"
        >
          Explore My Work
          <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>

        {/* Keep the bouncing scroll indicator on small screens, hide on md+ to avoid duplicate chevrons */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce md:hidden">
          <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
        </div>
      </div>
    </section>
  );
}
