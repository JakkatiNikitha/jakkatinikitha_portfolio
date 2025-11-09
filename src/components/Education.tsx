import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
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

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Methodist College of Engineering and Technology',
      duration: 'Completed May 2025',
      location: 'Hyderabad',
      cgpa: '9.05/10',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Narayana Junior College',
      duration: 'Completed April 2021',
      location: 'Hyderabad',
      cgpa: '9.32/10',
    },
    {
      degree: 'SSC (Secondary School Certificate)',
      institution: 'St. Alphonsus High School',
      duration: 'Completed April 2019',
      location: 'Hyderabad',
      cgpa: '8.8/10',
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-white dark:bg-gray-900 transition-colors relative z-10"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-800 p-6 rounded-2xl border border-orange-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                        <p className="text-orange-600 dark:text-orange-400 font-medium mt-1">{edu.institution}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{edu.duration}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                      <Award className="w-5 h-5 text-orange-500" />
                      <p className="text-gray-700 dark:text-gray-300 font-semibold">CGPA: {edu.cgpa}</p>
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
