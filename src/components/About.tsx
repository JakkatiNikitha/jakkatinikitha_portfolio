import { useEffect, useRef, useState } from 'react';
import { Code, Brain, Wrench, Heart } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices',
    },
    {
      icon: Brain,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and methodologies',
    },
    {
      icon: Wrench,
      title: 'Problem Solving',
      description: 'Analytical thinking with creative, innovative solutions',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Building experiences that delight and empower users',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-20">

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Computer Science Engineering Student
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Computer Science Engineering student with strong skills in Python, Machine Learning, and Data Analytics.
              Experienced in data preprocessing, EDA (histograms, heatmaps, correlation analysis), model training, and evaluation.
              Skilled with Scikit-learn, TensorFlow, Keras, XGBoost, CatBoost, and familiar with PyTorch.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I specialize in building scalable web applications using modern frameworks and implementing intelligent
              solutions powered by machine learning algorithms. I believe in writing clean, maintainable code and
              creating experiences that make a difference.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate about developing, deploying, and monitoring ML models for real-world applications. Always eager
              to learn new technologies and contribute to innovative projects that solve real-world problems.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="group h-full bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl border border-orange-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <value.icon className="w-12 h-12 text-orange-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
