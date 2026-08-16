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
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "Python", icon: "fab fa-python" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white text-stone-900 py-24 border-t border-stone-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
            Skills & Tools.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-stone-50 border border-stone-200 hover:bg-stone-900 hover:text-white transition-colors duration-300 group"
            >
              <i className={`${skill.icon} text-lg text-stone-500 group-hover:text-white transition-colors duration-300`}></i>
              <span className="text-sm font-medium tracking-wide">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
