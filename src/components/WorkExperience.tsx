import { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar, Award, Code } from 'lucide-react';

// ✅ Import company logos from src/assets/images/logos
import aicteLogo from '../assets/images/logos/aicte.png';
import iitLogo from '../assets/images/logos/iit.png';
import pwcLogo from '../assets/images/logos/pwc1.png';

export default function WorkExperience() {
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

  const experiences = [
    {
      role: 'Android Development Virtual Internship',
      company: 'AICTE-EduSkills',
      duration: 'April - June 2024',
      location: 'Virtual',
      type: 'Virtual Internship',
      icon: '📱',
      badge: 'Certified',
      image: aicteLogo, // ✅ imported image
      overview:
        'Developed scalable mobile applications using Kotlin, Jetpack Compose, and Android Studio. Focused on seamless UX and efficient functionality ("Wolf Books" app).',
      certificate:
        'https://drive.google.com/drive/folders/1_YawKjqCxvvcojwyiBIPayHSoxuiOIYR',
      keyAchievements: [
        'Developed scalable mobile applications using Kotlin and Jetpack Compose',
        'Built "Wolf Books" app with online reading, bookmarking, recommendations, and categorized search',
        'Focused on seamless UX and efficient functionality',
      ],
      technologiesUsed: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Mobile Development', 'UI/UX'],
      skillsDeveloped: ['Kotlin', 'Android Development', 'UX Design'],
    },
    {
      role: 'Machine Learning Intern',
      company: 'IIT Guwahati',
      duration: 'January - June 2024',
      location: 'Online',
      type: 'Virtual Internship',
      icon: '🤖',
      badge: 'Completed',
      image: iitLogo, // ✅ imported image
      overview:
        'Developed ML models for Diabetes Prediction, Human Action Detection, and Bike-Sharing Demand Prediction.',
      certificate:
        'https://drive.google.com/drive/folders/12d62P8GOO8iTY4-6ykJGwPK50sRraOcr',
      keyAchievements: [
        'Applied exploratory data analysis (histograms, heatmaps) and feature engineering',
        'Built end-to-end pipelines for data preprocessing, training, and evaluation',
        'Improved model accuracy through preprocessing and monitoring; documented workflows for mentor review',
      ],
      technologiesUsed: ['Python', 'XGBoost', 'CatBoost', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
      skillsDeveloped: ['Machine Learning', 'Data Analysis', 'Model Deployment'],
    },
    {
      role: 'Power BI Job Simulation',
      company: 'PwC-Forage',
      duration: 'March - August 2024',
      location: 'Virtual',
      type: 'Job Simulation',
      icon: '📊',
      badge: 'Certified',
      image: pwcLogo, // ✅ imported image
      overview:
        'Created 10+ interactive Power BI dashboards including Call Centre Solution, Churn Analysis, and Diversity & Inclusion dashboards to visualize complex data and improve decision-making.',
      certificate:
        'https://drive.google.com/drive/folders/15fUfAVko9N_ApeFDqvCkvefwo8lEskch',
      keyAchievements: [
        'Created 10+ interactive Power BI dashboards (Call Centre, Churn Analysis, Diversity & Inclusion)',
        'Visualized complex data to improve decision-making and streamline reporting',
        'Applied data modeling and DAX functions to track key metrics and enhance workflows',
      ],
      technologiesUsed: ['Power BI', 'DAX', 'SQL', 'Excel', 'Data Modeling'],
      skillsDeveloped: ['Data Visualization', 'Dashboard Design', 'Business Analytics'],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-white dark:bg-gray-900 transition-colors relative z-10"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional experience and internships
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 divide-y divide-gray-200 dark:divide-gray-800">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-orange-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-2xl overflow-hidden relative">
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>{exp.badge}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        {/* Logo */}
                        <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                          <img
                            src={exp.image}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div>
                          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                          <div className="flex items-center space-x-2 mt-1 text-orange-600 dark:text-orange-400 font-semibold text-lg">
                            <span>{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Overview */}
                  <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.overview}</p>
                  </div>

                  {/* Achievements & Skills */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-3">
                        {exp.keyAchievements.map((achievement, aIndex) => (
                          <li key={aIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                        <Code className="w-5 h-5" />
                        <span>Technologies Used</span>
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologiesUsed.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                        <Briefcase className="w-5 h-5" />
                        <span>Skills Developed</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skillsDeveloped.map((skill, sIndex) => (
                          <span
                            key={sIndex}
                            className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium border border-orange-300 dark:border-orange-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Certificate Button */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Award className="w-5 h-5" />
                      <span>View Certificate</span>
                    </a>
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
