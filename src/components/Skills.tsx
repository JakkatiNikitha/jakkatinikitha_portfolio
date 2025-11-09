import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Cloud, Cpu, Palette, GitBranch, BarChart, FileCode } from 'lucide-react';

export default function Skills() {
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

  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code2,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Python', proficiency: 90, years: 2 },
        { name: 'C Programming', proficiency: 75, years: 2 },
        { name: 'Java', proficiency: 70, years: 2 },
        { name: 'JavaScript', proficiency: 80, years: 2 },
        { name: 'HTML', proficiency: 85, years: 2 },
        { name: 'CSS', proficiency: 85, years: 2 },
      ],
    },
    {
      category: 'ML & Deep Learning',
      icon: Cpu,
      color: 'from-red-500 to-orange-600',
      skills: [
        { name: 'Supervised Learning', proficiency: 85, years: 2 },
        { name: 'Unsupervised Learning', proficiency: 80, years: 2 },
        { name: 'Ensemble Techniques', proficiency: 88, years: 2 },
        { name: 'RNN, CNN, LSTM', proficiency: 82, years: 1.5 },
        { name: 'BI-LSTM', proficiency: 78, years: 1.5 },
        { name: 'LLMs', proficiency: 75, years: 1.5 },
      ],
    },
    {
      category: 'ML Tools & Frameworks',
      icon: FileCode,
      color: 'from-orange-600 to-amber-600',
      skills: [
        { name: 'Scikit-learn', proficiency: 90, years: 2 },
        { name: 'XGBoost', proficiency: 85, years: 2 },
        { name: 'CatBoost', proficiency: 85, years: 2 },
        { name: 'TensorFlow', proficiency: 80, years: 1.5 },
        { name: 'Keras', proficiency: 82, years: 1.5 },
        { name: 'PyTorch', proficiency: 75, years: 1 },
      ],
    },
    {
      category: 'Data Analysis',
      icon: BarChart,
      color: 'from-amber-500 to-orange-500',
      skills: [
        { name: 'Statistical Analysis', proficiency: 85, years: 2 },
        { name: 'Data Cleaning', proficiency: 90, years: 2.5 },
        { name: 'EDA', proficiency: 90, years: 2.5 },
        { name: 'Matplotlib', proficiency: 85, years: 2 },
        { name: 'Seaborn', proficiency: 85, years: 2 },
        { name: 'Pandas', proficiency: 90, years: 2.5 },
        { name: 'Excel', proficiency: 85, years: 3 },
      ],
    },
    {
      category: 'Databases & Tools',
      icon: Database,
      color: 'from-orange-500 to-red-400',
      skills: [
        { name: 'MySQL', proficiency: 80, years: 2 },
        { name: 'Power BI', proficiency: 85, years: 1.5 },
        { name: 'Git', proficiency: 88, years: 2.5 },
        { name: 'Jupyter Notebook', proficiency: 90, years: 2.5 },
        { name: 'VS Code', proficiency: 95, years: 3 },
        { name: 'Android Studio', proficiency: 70, years: 1 },
      ],
    },
    {
      category: 'Backend & APIs',
      icon: Cloud,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Flask', proficiency: 80, years: 1.5 },
        { name: 'REST API', proficiency: 82, years: 1.5 },
        { name: 'Flask API', proficiency: 80, years: 1.5 },
        { name: 'Model Deployment', proficiency: 75, years: 1 },
        { name: 'Monitoring', proficiency: 70, years: 1 },
      ],
    },
    {
      category: 'Design Tools',
      icon: Palette,
      color: 'from-orange-400 to-red-400',
      skills: [
        { name: 'Figma', proficiency: 75, years: 1.5 },
        { name: 'Canva', proficiency: 80, years: 2 },
      ],
    },
    {
      category: 'Soft Skills',
      icon: GitBranch,
      color: 'from-red-400 to-orange-600',
      skills: [
        { name: 'Decision Making', proficiency: 85, years: 3 },
        { name: 'Problem-Solving', proficiency: 90, years: 3 },
        { name: 'Communication', proficiency: 88, years: 3 },
        { name: 'Quick Learner', proficiency: 95, years: 4 },
        { name: 'Team Player', proficiency: 90, years: 3 },
        { name: 'IEEE Paper Writing', proficiency: 80, years: 1 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors relative z-10"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technical expertise spanning machine learning, data analytics, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 h-full border border-orange-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.category}</h3>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group relative"
                    >
                      <div className="px-4 py-2.5 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-transparent hover:border-orange-200 dark:hover:border-orange-500">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-800 dark:text-white text-sm">{skill.name}</span>
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                        </div>
                      </div>
                      
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                        <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-3 rounded-lg shadow-2xl whitespace-nowrap">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-400 dark:text-orange-600">{skill.proficiency}%</div>
                            <div className="text-xs mt-1">{skill.years} {skill.years === 1 ? 'year' : 'years'} experience</div>
                          </div>
                          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
