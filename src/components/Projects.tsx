import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Smart Cyber Defence',
      image: './src/assets/images/logos/cyber2.jpg',
      shortDesc: 'ML Based Firewall',
      fullDesc:
        'An ML-Based Firewall for Malware, Password Attack, and MITM Attack Detection. Built using CatBoost and XGBoost achieving 98% malware detection, 95% password attack detection, and 93% MITM attack detection.',
      tags: ['Malware attack', 'MITM Attack', 'Password Attack', 'Catboost', 'Pipeline'],
      liveLink: 'https://github.com/JakkatiNikitha/smart-cyber-defense',
      githubLink: 'https://github.com/JakkatiNikitha/smart-cyber-defense',
    },
    {
      title: 'Emotion-Based Music Recommendation System',
      image: './src/assets/images/logos/emotions.webp',
      shortDesc: 'AI-powered recommendation engine',
      fullDesc:
        'A cutting-edge project that bridges Artificial Intelligence, Computer Vision, and Music to provide a personalized, emotion-based music recommendation experience.',
      tags: ['Python', 'TensorFlow', 'Flask', 'Pandas', 'ML', 'Keras', 'OpenCV', 'Matplotlib', 'Librosa', 'Pydub', 'NumPy'],
      liveLink: 'https://github.com/JakkatiNikitha/Mini-Project-Music-Recommendation-Based-On-Facial-Expression',
      githubLink: 'https://github.com/JakkatiNikitha/Mini-Project-Music-Recommendation-Based-On-Facial-Expression',
    },
    {
      title: 'AI Healthcare Chatbot',
      image: 'https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg?auto=compress&cs=tinysrgb&w=800',
      shortDesc: 'WebSocket-based messaging platform',
      fullDesc:
        'This project implements a Smart AI healthcare chatbot that generates summary sheets based on user symptoms in both English and Telugu languages.',
      tags: ['React', 'Python', 'HTML'],
      liveLink: 'https://github.com/JakkatiNikitha/HealthCare_Chatbot',
      githubLink: 'https://github.com/JakkatiNikitha/HealthCare_Chatbot',
    },
    {
      title: 'Malicious URL Detection for Phishing Prevention',
      image: './src/assets/images/logos/phishing.png',
      shortDesc: 'Collaborative project management tool',
      fullDesc:
        'Comparative analysis of ML approaches to detect malicious URLs. Achieved 97% accuracy with Random Forest and CatBoost, and 83% with Naive Bayes.',
      tags: ['Random Forest', 'CatBoost', 'Naive Bayes', 'RFE'],
      liveLink: 'https://colab.research.google.com/drive/1eSBA078AFIUS0LrTUBdN1IW13F93H0QR#scrollTo=3HKA7IbRq5R8',
      githubLink: 'https://colab.research.google.com/drive/1eSBA078AFIUS0LrTUBdN1IW13F93H0QR#scrollTo=3HKA7IbRq5R8',
    },
    {
      title: 'Weather Forecast',
      image: './src/assets/images/logos/weather.png',
      shortDesc: 'Basic Weather App project using Python',
      fullDesc:
        'Developed a weather application using machine learning models to improve forecast accuracy with beautiful visualizations.',
      tags: ['Python', 'APIs'],
      liveLink: 'https://github.com/JakkatiNikitha/InfoByte_WeatherApp',
      githubLink: 'https://github.com/JakkatiNikitha/InfoByte_WeatherApp',
    },
    {
      title: 'Network Infrastructure with Cisco Packet Tracer',
      image: './src/assets/images/logos/network.jpeg',
      shortDesc: 'Network',
      fullDesc:
        'Designed and implemented a complete network infrastructure ensuring efficient interconnectivity and scalability.',
      tags: ['Cisco Packet Tracer', 'Networking', 'Firewall', 'ACLs'],
      liveLink: 'https://drive.google.com/drive/home',
      githubLink: 'https://drive.google.com/drive/home',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto max-w-7xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hover or tap on cards to see more details about each project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="relative h-[28rem] group perspective-1000"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    flippedCard === index ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-200 text-base">{project.shortDesc}</p>
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="h-full bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-2xl p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                        <p className="text-white/90 mb-4">{project.fullDesc}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <a
                          href={project.liveLink}
                          className="flex-1 flex items-center justify-center space-x-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubLink}
                          className="flex items-center justify-center bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
