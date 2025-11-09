import { useEffect, useRef, useState } from 'react';
import { FileText } from 'lucide-react';

export default function Research() {
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

  // research stats removed — detailed paper card shown below

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            Research & Innovation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about leveraging machine learning for real-world solutions, I actively contribute to research at the intersection of cybersecurity and intelligent systems. My work focuses on applying advanced algorithms to enhance digital safety and proactive threat detection.
          </p>
        </div>

        <div className={`flex flex-col items-center gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Paper details card */}
          <div className="w-full md:w-3/4 lg:w-2/3 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-orange-100 dark:border-orange-900/10 hover:border-orange-200 dark:hover:border-orange-800/20 transition-colors">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Smart Cyber Defense System</h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                <strong className="text-orange-600 dark:text-orange-400">Publication:</strong> GRENZE International Journal of Engineering and Technology — Vol. 11, Issue 2
              </p>
              <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
                <strong className="text-orange-600 dark:text-orange-400">Authors:</strong> Shruthi S K, Jakkati Nikitha, Mahmood Unnisa Begum, Abdul Gaffar Osman
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 border border-orange-100/50 dark:border-orange-700/10">
              <p className="text-gray-700 dark:text-gray-300">
                This work integrates XGBoost and CATBoost models to accurately detect password attacks, malware, and MITM threats. The system demonstrates detection rates up to 100% for certain threat categories, includes automated alerting, and provides a user-friendly interface with robust security measures for practical deployment.
              </p>
            </div>

            <div className="flex items-center justify-center mt-6">
              <a
                href="https://thegrenze.com/index.php?display=page&view=journalabstract&absid=5333&id=8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                <span>Read Paper</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}