import React, { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Linkedin, Github, Phone} from "lucide-react";

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I’m a Computer Science Engineering graduate with a strong foundation in Python, Machine Learning, and Data Analytics. I’m passionate about turning data into actionable insights and building intelligent systems that make an impact.
          </p><br />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I’m currently seeking entry-level roles or internships in Machine Learning, Data Analytics, or AI-driven development, where I can apply my technical knowledge, analytical thinking, and creativity to real-world challenges.
          </p>
        </div>

        {/* Currently Seeking Opportunities */}
        <div
          className={`p-8 md:p-10 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-orange-100 dark:border-orange-900/10 hover:border-orange-200 dark:hover:border-orange-800/20 transition-all duration-1000 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            Currently Seeking Opportunities
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Fresh graduate ready to bring enthusiasm, technical skills, and a strong work ethic to your organization.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="px-6 py-4 min-w-[220px] bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 border border-orange-100/50 dark:border-orange-700/20 rounded-xl text-gray-800 dark:text-gray-200 font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 text-center">
              Available for immediate start
            </div>
            <div className="px-6 py-4 min-w-[220px] bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 border border-orange-100/50 dark:border-orange-700/20 rounded-xl text-gray-800 dark:text-gray-200 font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 text-center">
              Open to full-time & internship opportunities
            </div>
            <div className="px-6 py-4 min-w-[220px] bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 border border-orange-100/50 dark:border-orange-700/20 rounded-xl text-gray-800 dark:text-gray-200 font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 text-center">
              Seeking entry-level positions
            </div>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div
          className={`mt-20 p-10 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-orange-100 dark:border-orange-900/10 hover:border-orange-200 dark:hover:border-orange-800/20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            Get in Touch
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            I’d be happy to discuss how I can contribute to your team’s success. Feel free to reach out.
            I usually respond within 24 hours.
          </p>

          {/* Email and Location */}
          <div className="flex flex-col md:flex-row justify-around items-center gap-12 text-gray-800 dark:text-gray-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2 text-orange-600 dark:text-orange-400">
                <Mail className="w-6 h-6" />
                <span className="font-medium">Email</span>
              </div>
              <p className="font-semibold text-lg text-gray-700 dark:text-gray-300">
                nikithajakkati@gmail.com
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2 text-orange-600 dark:text-orange-400">
                <Phone className="w-6 h-6" /> {/* ✅ changed from Mail to Phone */}
                <span className="font-medium">Phone</span>
              </div>
              <p className="font-semibold text-lg text-gray-700 dark:text-gray-300">
                +91 6303254645
              </p>
            </div>


            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2 text-orange-600 dark:text-orange-400">
                <MapPin className="w-6 h-6" />
                <span className="font-medium">Location</span>
              </div>
              <p className="font-semibold text-lg text-gray-700 dark:text-gray-300">
                Hyderabad, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16 text-center">
            <p className="font-semibold mb-5 text-gray-700 dark:text-gray-300">
              Connect with Me
            </p>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Let’s stay connected for future collaborations, research, or career opportunities.
            </p>
            <div className="flex justify-center gap-100 text-orange-600 dark:text-orange-400 text-4xl">
              <a
                href="https://linkedin.com/in/jakkati-nikitha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin className="w-10 h-10" />
              </a>
              <a
                href="https://github.com/jakkatinikitha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:scale-110 transition-transform"
              >
                <Github className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔶 Footer Section - Light Orange Theme */}
      <footer className="mt-20 py-6 text-center bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 border-t border-orange-100 dark:border-orange-800">
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
        © {new Date().getFullYear()} <span className="font-semibold text-orange-600 dark:text-orange-400">Nikitha Jakkati</span> — All Rights Reserved
        </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        Designed & Built with ❤️ using React + TailwindCSS
      </p>
      </footer>

    </section>
  );
};

export default Contact;
