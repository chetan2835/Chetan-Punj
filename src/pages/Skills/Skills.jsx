import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { 
  Code2, 
  Paintbrush, 
  Database, 
  Layout, 
  Cpu, 
  Cloud,
  Wrench,
  Users,
  Lightbulb,
  Search,
  Activity,
  Server,
  Zap
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaFigma,
  FaAws,
  FaJs
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiArduino,
  SiCplusplus,
  SiMysql,
  SiSupabase,
  SiPostman,
  SiExpress,
  SiC
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2, BsDatabase } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      color: "text-blue-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "C/C++", icon: <SiCplusplus className="w-4 h-4 text-[#00599C]" /> },
        { name: "JavaScript", icon: <FaJs className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "SQL", icon: <BsDatabase className="w-4 h-4 text-[#003B57]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Frontend",
      color: "text-purple-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
      ],
    },
    {
      icon: Server,
      title: "Backend & Web",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-white" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-yellow-400",
      skills: [
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "Supabase", icon: <SiSupabase className="w-4 h-4 text-[#3ECF8E]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
      ],
    },
    {
      icon: Wrench,
      title: "Tools",
      color: "text-orange-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="w-4 h-4 text-white" /> },
        { name: "Postman", icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
      ],
    },
    {
      icon: Zap,
      title: "Hardware/IoT",
      color: "text-pink-400",
      skills: [
        { name: "Arduino", icon: <SiArduino className="w-4 h-4 text-[#00979C]" /> },
        { name: "ESP32", icon: <Cpu className="w-4 h-4 text-gray-400" /> },
        { name: "ESP8266", icon: <Cpu className="w-4 h-4 text-gray-400" /> },
        { name: "IoT", icon: <Cpu className="w-4 h-4 text-gray-400" /> },
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "text-teal-400",
      skills: [
        { name: "Problem Solving", icon: <Lightbulb className="w-4 h-4 text-yellow-500" /> },
        { name: "Research Mindset", icon: <Search className="w-4 h-4 text-blue-400" /> },
        { name: "Teamwork", icon: <Users className="w-4 h-4 text-purple-400" /> },
        { name: "Adaptability", icon: <Activity className="w-4 h-4 text-green-400" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
