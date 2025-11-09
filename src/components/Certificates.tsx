import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
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

  const certificates = [
    {
      title: 'Data Analytics',
      issuer: 'ITC Academy',
      date: 'November 2024',
      image: '/src/assets/images/logos/itc.png',
      link: 'https://drive.google.com/drive/folders/1_YawKjqCxvvcojwyiBIPayHSoxuiOIYR',
    },
    {
      title: 'AWS - Machine Learning Terminology and Process',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      image: '/src/assets/images/logos/aws.png',
      link: 'https://drive.google.com/drive/folders/1_YawKjqCxvvcojwyiBIPayHSoxuiOIYR',
    },
    {
      title: 'AWS - Foundation of Prompt Engineering',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      image: '/src/assets/images/logos/aws.png',
      link: 'https://drive.google.com/drive/folders/1_YawKjqCxvvcojwyiBIPayHSoxuiOIYR',
    },
    {
      title: 'Cisco - Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'June 2024',
      image: './src/assets/images/logos/cisco.png',
      link: 'https://drive.google.com/drive/folders/1_YawKjqCxvvcojwyiBIPayHSoxuiOIYR',
    },
    {
      title: 'Cisco - Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      date: 'July 2024',
      image: './src/assets/images/logos/cisco.png',
      link: 'https://drive.google.com/drive/folders/1_YawKjqCxvvcojwyiBIPayHSoxuiOIYR',
    },
    {
      title: 'IBM - Artificial Intelligence Fundamentals',
      issuer: 'IBM Skills Build',
      date: 'December 2023',
      image: './src/assets/images/logos/ibm.png',
      link: 'https://drive.google.com/drive/folders/1_YawKjqCxvvcojwyiBIPayHSoxuiOIYR',
    },
  ];

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements showcasing continuous learning
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const isLogo = cert.image.includes('/src/assets/images/logos/');

            return (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCert(index)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-full border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300">
                  
                  {/* Image Section */}
                  {isLogo ? (
                    <div className="relative h-48 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className={`max-h-full max-w-full object-contain transition-transform duration-500 ${
                          hoveredCert === index ? 'scale-105' : 'scale-100'
                        }`}
                      />
                      <div className="absolute top-4 right-4">
                        <Award className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          hoveredCert === index ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      <div className="absolute top-4 right-4">
                        <Award className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
                      </div>
                    </div>
                  )}

                  {/* Certificate Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-orange-600 dark:text-blue-400 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{cert.date}</p>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        hoveredCert === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-orange-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                        >
                          <span>View Certificate</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div
                    className={`absolute inset-0 border-4 border-orange-500 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                      hoveredCert === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
