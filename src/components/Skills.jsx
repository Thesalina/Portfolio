import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";

import Card from "./ui/Card";

const skillsData = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500", level: 90 },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", level: 85 },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400", level: 80 },
  { name: "React", icon: FaReact, color: "text-pink-400", level: 75 },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", level: 70 },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600", level: 65 },
  { name: "Java", icon: FaJava, color: "text-red-500", level: 75 },
  { name: "C", icon: SiC, color: "text-blue-400", level: 75 },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            My technical proficiency and tools I use to build digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <Card key={index} className="flex flex-col items-center text-center group hover:bg-white/10 transition-colors">
              <div className={`text-5xl mb-6 ${skill.color} transform group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>

              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full rounded-full ${skill.color.replace('text-', 'bg-')}`}
                />
              </div>
              <span className="text-slate-500 text-sm mt-2">{skill.level}% Proficiency</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
