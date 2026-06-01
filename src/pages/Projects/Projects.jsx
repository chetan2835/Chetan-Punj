import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Face Recognition Attendance System",
    description: "An AI-powered attendance and gate pass management platform that automates student identification through real-time facial recognition, secure attendance tracking, and intelligent verification workflows, reducing manual effort and improving operational accuracy.",
    src: "face-rec.jpg",
    link: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
    githubLink: "#",
    liveLink: "#",
    badges: ["AI & Computer Vision"],
    techStack: ["Python", "OpenCV", "Flask", "MySQL"],
    metrics: ["99% Accuracy", "Real-time Processing", "Automated Reports"]
  },
  {
    title: "FleetFlow – Fleet Management Platform",
    description: "A full-stack fleet operations platform that centralizes vehicle, driver, and trip management through analytics dashboards, role-based access control, and real-time tracking to improve visibility and operational efficiency.",
    src: "fleetflow.jpg",
    link: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop",
    githubLink: "#",
    liveLink: "#",
    badges: ["Full Stack Development"],
    techStack: ["React", "Supabase", "PostgreSQL", "Leaflet Maps"],
    metrics: ["Real-time Tracking", "Role-based Access", "Analytics Dashboard"]
  },
  {
    title: "Rentify | Electronic Rental Platform",
    description: "A modern rental marketplace for electronics and books featuring authentication, product discovery, cart management, and secure checkout workflows designed for a seamless user experience.",
    src: "rentify.jpg",
    link: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop",
    githubLink: "#",
    liveLink: "#",
    badges: ["Web Application"],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    metrics: ["Secure Checkout", "Smart Search", "Scalable Architecture"]
  },
  {
    title: "Smart Surveillance Rover",
    description: "An intelligent surveillance rover equipped with live video streaming, obstacle detection, and wireless navigation capabilities for real-time monitoring, security, and environmental awareness applications.",
    src: "rover.jpg",
    link: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    githubLink: "#",
    liveLink: "#",
    badges: ["IoT & Robotics"],
    techStack: ["ESP32-CAM", "Arduino", "Ultrasonic Sensors"],
    metrics: ["Live Streaming", "Wireless Navigation", "Obstacle Detection"]
  },
  {
    title: "Smart Home Automation System",
    description: "A voice-controlled home automation platform enabling cloud-connected device management, remote monitoring, and seamless integration with Google Assistant and Alexa for enhanced convenience and energy efficiency.",
    src: "home-auto.jpg",
    link: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
    githubLink: "#",
    liveLink: "#",
    badges: ["IoT & Automation"],
    techStack: ["ESP8266", "Sinric Pro", "Google Assistant", "Alexa"],
    metrics: ["Voice Control", "Cloud Sync", "Remote Monitoring"]
  },
  {
    title: "ICINSA 2026 Conference Website",
    description: "Designed and deployed the official international conference website featuring speaker profiles, research paper submissions, event schedules, and participant engagement tools for a global academic audience.",
    src: "icinsa.jpg",
    link: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    githubLink: "#",
    liveLink: "#",
    badges: ["Full Stack Development"],
    techStack: ["HTML", "CSS", "JavaScript", "Node.js"],
    metrics: ["Responsive Design", "Submission Portal", "Schedule Management"]
  },
  {
    title: "ECHONA College Festival Website",
    description: "Developed and deployed the official college festival website featuring event schedules, announcements, registrations, and responsive user interfaces to improve participant engagement and event visibility.",
    src: "echona.jpg",
    link: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop",
    githubLink: "#",
    liveLink: "#",
    badges: ["Web Development"],
    techStack: ["HTML", "CSS", "JavaScript"],
    metrics: ["Event Scheduling", "Online Registration", "High Engagement"]
  },
  {
    title: "CareQueue – Smart Queue Management System",
    description: "A smart healthcare queue management solution featuring real-time queue tracking and appointment scheduling designed to reduce waiting times and improve service efficiency.",
    src: "carequeue.jpg",
    link: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    githubLink: "#",
    liveLink: "#",
    badges: ["Healthcare Technology"],
    techStack: ["React", "Node.js", "MySQL"],
    metrics: ["Real-time Tracking", "Appointment Scheduling", "Service Efficiency"]
  }
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950 pt-20 pb-32">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.03;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.1, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                badges={project.badges}
                techStack={project.techStack}
                metrics={project.metrics}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color = "transparent",
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  badges = [],
  techStack = [],
  metrics = [],
}) {
  const container = useRef(null);
  const cardRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container pointer-events-none"
    >
      <motion.div
        style={{
          scale,
          top: `calc(4vh + ${i * 15}px)`,
        }}
        className="relative h-auto w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] origin-top project-card pointer-events-auto"
      >
        <div style={{ transform: 'scale(var(--project-scale, 1))', marginTop: 'var(--project-margin, 0)' }}>
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="w-full relative rounded-[2rem] p-[1px] group perspective-1000"
          >
            {/* Animated gradient border on hover */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
            <div 
              className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
              style={{
                background: `linear-gradient(120deg, transparent, ${color}60, transparent)`
              }}
            />

            {/* Glassmorphism Card */}
            <div className="relative w-full flex flex-col xl:flex-row bg-zinc-950/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              {/* Image section */}
              <div className="w-full xl:w-[45%] h-[220px] sm:h-[300px] xl:h-[500px] relative overflow-hidden bg-black/50">
                <motion.div 
                  className="w-full h-full"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <img
                    src={url}
                    alt={title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  {/* Colored overlay on hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-30"
                    style={{ backgroundColor: color, mixBlendMode: "overlay" }}
                  />
                </motion.div>

                {/* Project number */}
                <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider shadow-lg">
                  PROJECT 0{i + 1}
                </div>
              </div>

              {/* Content section */}
              <div className="w-full xl:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: color, boxShadow: `0 0 15px ${color}` }}
                    />
                    {badges.map((badge, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-gray-300 transition-colors duration-300">
                    {title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed xl:leading-loose mb-6 line-clamp-3 xl:line-clamp-none">
                    {description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 font-medium hover:bg-white/15 border border-white/5 hover:border-white/20 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-6 border-t border-white/10">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Impact {idx + 1}</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-200">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    {/* GitHub Link */}
                    <motion.a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="p-2.5 rounded-full bg-white/5 group-hover/link:bg-white/15 border border-white/10 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-semibold hidden sm:block tracking-wide">
                        Source Code
                      </span>
                    </motion.a>

                    {/* Live Link */}
                    <motion.a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="p-2.5 rounded-full bg-white/5 group-hover/link:bg-white/15 border border-white/10 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-semibold hidden sm:block tracking-wide">
                        Live Demo
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  badges: PropTypes.arrayOf(PropTypes.string),
  techStack: PropTypes.arrayOf(PropTypes.string),
  metrics: PropTypes.arrayOf(PropTypes.string),
};
