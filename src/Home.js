import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-sans" style={{ backgroundColor: "#800000", minHeight: "100vh", color: "white" }}>
      {/* Header Section */}
      <header className="p-6 text-center animate-fadeIn">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold animate-bounce">Hello, I am Swapnasri</h1>
          <p className="text-2xl mt-4 animate-slideInUp">Frontend Developer</p>
          <nav className="mt-6 flex justify-center space-x-6">
            <a href="#about" className="text-lg hover:text-gray-300 transition-colors animate-pulse">About Me</a>
            <a href="#skills" className="text-lg hover:text-gray-300 transition-colors animate-pulse">My Skills</a>
            <a href="#projects" className="text-lg hover:text-gray-300 transition-colors animate-pulse">My Projects</a>
            <a href="#contact" className="text-lg hover:text-gray-300 transition-colors animate-pulse">Contact Me</a>
          </nav>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="p-10 text-center animate-fadeIn">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            I am a passionate Frontend Developer with a knack for building beautiful and functional web applications.
            I thrive on solving complex problems and collaborating with teams to create impactful solutions. I love
            learning new technologies and applying them creatively to my work.
          </p>
        </div>
      </section>

      {/* My Skills Section */}
      <section id="skills" className="p-10 animate-fadeIn">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "C",
              "Java",
              "HTML",
              "CSS",
              "SQL",
              "ReactJS",
              "NodeJS (Basics)",
              "Redux",
              "Bootstrap",
              "Git",
              "GitHub",
              "Data Structures"
            ].map((skill, index) => (
              <div
                key={index}
                className="p-6 shadow-md rounded-lg text-center hover:shadow-lg transform hover:scale-110 transition duration-500"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", border: "2px solid rgba(255, 255, 255, 0.7)", color: "#800000" }}
              >
                <p className="text-xl font-bold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Projects Section */}
      <section id="projects" className="p-10 text-center animate-fadeIn">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Budget Management System",
                description:
                  "A comprehensive web application to track income and expenses, generate financial reports, and manage budgets efficiently. Built with ReactJS for a dynamic user experience.",
              },
              {
                name: "E-commerce Website",
                description:
                  "A fully functional e-commerce platform with user authentication, product search, and an interactive shopping cart. Integrated with payment gateways. Built using ReactJS and NodeJS.",
              },
              {
                name: "Food Recipe Recommendation System",
                description:
                  "An intelligent system recommending recipes based on user preferences and ingredients available. Integrated APIs to fetch recipes and nutrition data. Built with ReactJS.",
              },
              {
                name: "ATM Voice-Over System",
                description:
                  "A Java-based project that enhances accessibility for visually impaired users by providing a voice-over interface for ATM interactions. Utilizes SQL for database management.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-110 transition duration-500"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", border: "2px solid rgba(255, 255, 255, 0.7)", color: "#800000" }}
              >
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="p-10 animate-fadeIn">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Contact Me</h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://linkedin.com/in/swapnasri-potnuru-535546255"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-gray-300 transition duration-500 animate-bounce"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:swapnasripotnuru@gmail.com"
              className="text-4xl hover:text-gray-300 transition duration-500 animate-bounce"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/Swapnasklm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-gray-300 transition duration-500 animate-bounce"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 animate-fadeIn">
        &copy; 2024 Swapnasri Potnuru. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
