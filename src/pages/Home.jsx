import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaJava,
  FaPython,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaTools,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiSpring,
  SiHibernate,
  SiMysql,
  SiArduino,
  SiTailwindcss,
  SiGmail,
} from "react-icons/si";

import { motion } from "framer-motion";
import backgroundImage from "../assets/bg2.webp";

export default function Home() {
  return (
    <div
      className="max-h-full max-w-full m-0 flex flex-col items-center justify-start min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Cambria, serif",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gray-200 bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mt-24 pb-24 px-4">
        {/* Hero Section */}
        <motion.div
          className="p-12 sm:p-16 rounded-xl w-full flex flex-col items-center justify-center 
          bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40 shadow-xl"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center text-gray-900 dark:text-white transition-colors duration-500"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          >
            Hi, I'm Manoj K R 👋
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl max-w-full sm:max-w-3xl mb-8 text-center text-gray-800 dark:text-gray-200 transition-colors duration-500"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          >
            Enthusiastic B.E. 2025 graduate, certified in Java Full Stack and
            React.js, skilled in building responsive and scalable web
            applications using{" "}
            <span className="font-semibold text-gray-900 dark:text-yellow-400 transition-colors duration-500">
              Java, Spring Boot, MySQL, and React.js
            </span>
            . Passionate about modern software development, debugging, and agile
            collaboration.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 sm:gap-8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          >
            <a
              href="/projects"
              className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition duration-300 text-lg sm:text-xl"
            >
              View Projects
            </a>
            <a
              href="/resume"
              className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition duration-300 text-lg sm:text-xl"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Internship Section */}
        <section className="mt-16 w-full px-2 sm:px-0">
          <h2 className="bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40 p-6 sm:p-8 rounded-xl shadow-xl font-bold mb-8 text-3xl sm:text-4xl text-center text-gray-900 dark:text-white transition-colors duration-500">
            Internship Journey
          </h2>

          <div className="relative border-l-4 sm:border-l-8 border-fuchsia-300 ml-0 sm:ml-6">
            {/* Roborosx */}
            <motion.div
              className="mb-10 sm:mb-12 ml-0 sm:ml-6 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="absolute flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-green-500 rounded-full -left-5 sm:-left-6 ring-4 ring-gray-300 dark:ring-gray-900">
                <FaTools className="text-white text-base sm:text-lg" />
              </span>
              <div className="p-6 sm:p-8 rounded-lg shadow-lg bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40 border border-gray-300 dark:border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
                  Embedded Systems Intern
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">
                  Roborosx Omni Tech Solutions LLP –{" "}
                  <span className="text-xs sm:text-sm">
                    Dec 2024 – Mar 2025
                  </span>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                  <li>
                    Hands-on experience in{" "}
                    <span className="font-semibold text-gray-900 dark:text-yellow-400 transition-colors duration-500">
                      embedded systems, Linux basics, Bash scripting, and C++
                    </span>
                    .
                  </li>
                  <li>
                    Worked with microcontrollers like{" "}
                    <span className="font-semibold text-gray-900 dark:text-yellow-400 transition-colors duration-500">
                      Arduino, ESP8266, ESP32
                    </span>{" "}
                    using Arduino IDE & ESP-IDF.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* JSpiders */}
            <motion.div
              className="mb-10 sm:mb-12 ml-0 sm:ml-6 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-blue-500 rounded-full -left-5 sm:-left-6 ring-4 ring-gray-300 dark:ring-gray-900">
                <FaJava className="text-white text-base sm:text-lg" />
              </span>
              <div className="p-6 sm:p-8 rounded-lg shadow-lg bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40 border border-gray-300 dark:border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
                  Java Full Stack Developer Trainee
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">
                  JSpiders Rajajinagar –{" "}
                  <span className="text-xs sm:text-sm">Mar 2025 – Present</span>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                  <li>
                    Hands-on knowledge in{" "}
                    <span className="font-semibold text-gray-900 dark:text-yellow-400 transition-colors duration-500">
                      Core Java, Advanced Java, frameworks, frontend (HTML, CSS,
                      JS, React)
                    </span>
                    .
                  </li>
                  <li>
                    Worked with{" "}
                    <span className="font-semibold text-gray-900 dark:text-yellow-400 transition-colors duration-500">
                      MySQL
                    </span>{" "}
                    databases.
                  </li>
                  <li>
                    Currently developing a{" "}
                    <span className="font-semibold text-gray-900 dark:text-yellow-400 transition-colors duration-500">
                      backend project
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mt-16 w-full px-2 sm:px-0">
  <h2 className="bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40 p-6 sm:p-8 rounded-xl shadow-xl font-bold mb-8 text-3xl sm:text-4xl text-center text-gray-900 dark:text-white transition-colors duration-500">
    Skills
  </h2>

  <div className="overflow-x-auto w-full snap-x snap-mandatory scrollbar-hide">
    <div className="p-8 sm:p-12 rounded-xl shadow-lg bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40 max-w-max mx-auto flex flex-row justify-start items-start gap-8">

      {/* Programming Languages */}
      <div className="flex flex-col items-center gap-4 relative pr-6 min-w-[220px] snap-start">
        <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-2">
          Programming Languages
        </h3>
        <div className="flex gap-6 flex-wrap justify-center">
          <div className="flex flex-col items-center gap-1">
            <FaJava className="text-3xl sm:text-4xl text-orange-500" />
            <span className="text-xs sm:text-sm">Core Java</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaPython className="text-3xl sm:text-4xl text-blue-400" />
            <span className="text-xs sm:text-sm">Python</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaTools className="text-3xl sm:text-4xl text-gray-500" />
            <span className="text-xs sm:text-sm">C++</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gray-400 dark:bg-gray-200"></div>
      </div>

      {/* Web Technologies & Databases */}
      <div className="flex flex-col items-center gap-4 relative px-6 min-w-[250px] snap-start">
        <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-2">
          Web Technologies & Databases
        </h3>
        <div className="flex gap-6 flex-wrap justify-center">
          <div className="flex flex-col items-center gap-1">
            <FaHtml5 className="text-3xl sm:text-4xl text-orange-600" />
            <span className="text-xs sm:text-sm">HTML</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaCss3Alt className="text-3xl sm:text-4xl text-blue-500" />
            <span className="text-xs sm:text-sm">CSS</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaJsSquare className="text-3xl sm:text-4xl text-yellow-400" />
            <span className="text-xs sm:text-sm">JavaScript</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <SiMysql className="text-3xl sm:text-4xl text-blue-700" />
            <span className="text-xs sm:text-sm">MySQL</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <SiMysql className="text-3xl sm:text-4xl text-indigo-600" />
            <span className="text-xs sm:text-sm">SQL Plus</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gray-400 dark:bg-gray-200"></div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="flex flex-col items-center gap-4 relative px-6 min-w-[250px] snap-start">
        <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-2">
          Frameworks & Libraries
        </h3>
        <div className="flex gap-6 flex-wrap justify-center">
          <div className="flex flex-col items-center gap-1">
            <FaReact className="text-3xl sm:text-4xl text-cyan-400" />
            <span className="text-xs sm:text-sm">React.js</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <SiTailwindcss className="text-3xl sm:text-4xl text-teal-400" />
            <span className="text-xs sm:text-sm">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <SiSpring className="text-3xl sm:text-4xl text-green-600" />
            <span className="text-xs sm:text-sm">Spring</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <SiHibernate className="text-3xl sm:text-4xl text-red-500" />
            <span className="text-xs sm:text-sm">Hibernate</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaDatabase className="text-3xl sm:text-4xl text-gray-500" />
            <span className="text-xs sm:text-sm">JDBC</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gray-400 dark:bg-gray-200"></div>
      </div>

      {/* Tools & IDEs */}
      <div className="flex flex-col items-center gap-4 relative pl-6 min-w-[220px] snap-start">
        <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-2">
          Tools & IDEs
        </h3>
        <div className="flex gap-6 flex-wrap justify-center">
          <div className="flex flex-col items-center gap-1">
            <FaTools className="text-3xl sm:text-4xl text-gray-400" />
            <span className="text-xs sm:text-sm">VS Code</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaJava className="text-3xl sm:text-4xl text-indigo-500" />
            <span className="text-xs sm:text-sm">Eclipse IDE</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <SiArduino className="text-3xl sm:text-4xl text-green-600" />
            <span className="text-xs sm:text-sm">Arduino IDE</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


        {/* Projects Section */}
        <section className="mt-16 w-full px-2 sm:px-0">
          <div className="p-6 sm:p-8 rounded-xl shadow-lg bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2 text-gray-900 dark:text-white transition-colors duration-500">
              Featured Projects
            </h2>
            <ul className="space-y-2 text-gray-900 dark:text-white text-base sm:text-lg md:text-xl transition-colors duration-500">
              <li>
                ⚡ Java-Based Expense and Account Management System (JDBC +
                MySQL)
              </li>
              <li>🏠 Smart Automation & Security System Using ESP32</li>
              <li>📡 Carbon Fiber Dipole Antenna Design (HFSS Simulation)</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 w-full px-2 sm:px-0 mb-24">
          <div className="p-6 sm:p-8 rounded-xl shadow-lg bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2 text-gray-900 dark:text-white transition-colors duration-500">
              Get in Touch
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mt-4 text-3xl sm:text-4xl">
              <a
                href="mailto:manojkr0724@gmail.com"
                className="group transition transform hover:scale-110"
                aria-label="Gmail"
              >
                <SiGmail className="text-red-500 group-hover:text-red-700 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/manojkr07"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
              </a>
              <a
                href="https://github.com/manojkr07"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-gray-900 dark:text-white group-hover:text-yellow-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
