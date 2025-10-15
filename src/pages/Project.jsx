import React from 'react';
import { motion } from "framer-motion";
import bgImage from "../assets/bg1.webp";

function Project() {
   const projects = [
    {
      title: "Java-Based Expense and Account Management System",
      description: [
        "Developed a console-based banking application featuring comprehensive account management, transaction processing, and database integration.",
        "Implemented Java OOP principles, JDBC, and MySQL to ensure secure, maintainable, and structured account data handling."
      ],
      iconColor: "bg-yellow-500",
    },
    {
      title: "Design and Simulation of Carbon Fiber Dipole Antenna for Passive Radar",
      description: [
        "Engineered and simulated a carbon fiber dipole antenna optimized for passive radar applications.",
        "Addressed corrosion and conductivity challenges by introducing a nickel coating, enhancing electrical performance while retaining the mechanical advantages of carbon fiber.",
        "Validated antenna performance including return loss, radiation patterns, and efficiency through HFSS simulations, achieving improved stealth, environmental resilience, and suitability for defense applications."
      ],
      iconColor: "bg-blue-500",
    },
    {
      title: "Smart Automation and Security System Using ESP32",
      description: [
        "Developed an advanced home automation and security system leveraging the ESP32 microcontroller and Wi-Fi technology with RTOS.",
        "Integrated motion detection sensors for real-time monitoring and automated responses.",
        "Implemented cloud communication and real-time notifications to the homeowner’s smartphone, enabling remote management and alerts."
      ],
      iconColor: "bg-green-500",
    },
  ];
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-12"
      style={{ backgroundImage: `url(${bgImage})`, fontFamily: "Cambria, serif" }}
    >
      <h2 className="bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40 p-6 rounded-xl shadow-lg font-bold mb-12 text-3xl text-center max-w-7xl mx-auto">
        Projects
      </h2>

      <div className="flex flex-col gap-8 max-w-7xl mx-auto px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-xl shadow-lg bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40 border border-gray-300 dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span className={`absolute flex items-center justify-center w-10 h-10 ${project.iconColor} rounded-full -left-5 ring-4 ring-gray-300 dark:ring-gray-900`}></span>

            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">
              {project.title}
            </h3>

            <ul className="list-disc text-justify list-inside space-y-2 text-gray-900 dark:text-gray-200">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project
