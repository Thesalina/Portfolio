const skills = [
  { name: "React", icon: "fab fa-react" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "Java", icon: "fab fa-java" },
  { name: "Spring Boot", icon: "fas fa-leaf" },
  { name: "Node.js", icon: "fab fa-node" },
  { name: "Express.js", icon: "fas fa-server" },
  { name: "MySQL", icon: "fas fa-database" },
  { name: "MongoDB", icon: "fas fa-database" },
  { name: "Tailwind CSS", icon: "fab fa-css3" },
  { name: "HTML & CSS", icon: "fab fa-html5" },
  { name: "Git & GitHub", icon: "fab fa-git-alt" },
  { name: "Python", icon: "fab fa-python" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white text-gray-900 relative h-auto py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-400">Skills & Tools</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-md text-center transform hover:scale-105 transition-all duration-300 border border-gray-100"
            >
              <div className="text-3xl text-pink-400 mb-3">
                <i className={skill.icon}></i>
              </div>
              <h3 className="text-sm font-semibold text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
