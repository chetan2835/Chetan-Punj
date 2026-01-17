import React from "react";
import {
  Code2,
  Activity,
  Cpu,
  Layers,
  Network,
  Binary,
  Bot,
  GraduationCap,
  Rocket,
  Shield,
  Globe,
  Database,
  Zap
} from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>

        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>

        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Code2,
      title: "MERN Stack Developer",
      company: "Self Learning & Projects",
      period: "2024 - Present",
      description:
        "Building full-stack applications using React, Node.js, Express, and MongoDB with focus on clean UI, performance, and scalability."
    },

    {
      icon: Cpu,
      title: "IoT & Arduino Developer",
      company: "Personal Projects",
      period: "2023 - Present",
      description:
        "Worked on automation and robotics projects including Arduino, ESP32, and sensor-based systems with real-time data handling."
    },

    {
      icon: Bot,
      title: "AI & Computer Vision Enthusiast",
      company: "Innovative Projects",
      period: "2024 - Present",
      description:
        "Developing smart systems like face-recognition attendance and gate-pass solutions integrating AI, databases, and automation."
    },

    {
      icon: Layers,
      title: "UI/UX Enthusiast",
      company: "Portfolio & Freelance Work",
      period: "2023 - Present",
      description:
        "Designing modern, intuitive, and user-focused interfaces with emphasis on accessibility, responsiveness, and experience."
    },

    {
      icon: GraduationCap,
      title: "B.Tech CSE Student",
      company: "Anand International College of Engineering",
      period: "2023 - Present",
      description:
        "Actively learning core computer science fundamentals while building real-world projects, exploring development & innovation."
    },

    {
      icon: Rocket,
      title: "Hackathon Participant & Finalist",
      company: "Multiple National Events",
      period: "2024 - Present",
      description:
        "Participated in major hackathons and innovation events, presenting solutions focused on AI, automation, and digital transformation."
    },

    {
      icon: Shield,
      title: "IEDC Core Team Member",
      company: "Innovation & Entrepreneurship Development Cell",
      period: "2024 - Present",
      description:
        "Contributing to innovation activities, project execution, mentorship support, and tech-driven initiatives within the institution."
    },

    {
      icon: Globe,
      title: "LetsUpgrade Student Ambassador",
      company: "LetsUpgrade",
      period: "2024 - Present",
      description:
        "Promoted tech learning initiatives, engaged with developer communities, and supported peers in technical growth."
    },

    {
      icon: Database,
      title: "Backend & Database Learner",
      company: "Self Learning",
      period: "2024 - Present",
      description:
        "Working with MySQL and MongoDB to design structured and efficient databases for scalable applications."
    },

    {
      icon: Zap,
      title: "JavaScript Developer",
      company: "Personal & Open Source Projects",
      period: "2023 - Present",
      description:
        "Building interactive, optimized web experiences and exploring modern JavaScript ecosystems & frameworks."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-[#04081A]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative container mx-auto px-6 mt-10">
        <div className="flex flex-col items-center space-y-8 mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
            Professional Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
            "Transforming ideas into digital reality, one project at a time"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
