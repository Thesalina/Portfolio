const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white relative h-auto py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-400">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Skill 1: HTML */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl text-pink-400 mb-4">
              <i className="fab fa-html5"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">HTML</h3>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-pink-400 h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          {/* Skill 2: CSS */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl text-pink-400 mb-4">
              <i className="fab fa-css3-alt"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">CSS</h3>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-pink-400 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          {/* Skill 3: JavaScript */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl text-pink-400 mb-4">
              <i className="fab fa-js"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">JavaScript</h3>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-pink-400 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>

          {/* Skill 4: React */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl text-pink-400 mb-4">
              <i className="fab fa-react"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">React</h3>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-pink-400 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Skill 5: Node.js */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl text-pink-400 mb-4">
              <i className="fab fa-node"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Node.js</h3>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-pink-400 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>

          {/* Skill 6: Git */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl text-pink-400 mb-4">
              <i className="fab fa-git-alt"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Git</h3>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-pink-400 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>

          {/* Skill 7: Java */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl text-pink-400 mb-4">
              <i className="fab fa-java"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Java</h3>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-pink-400 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Skill 8: C */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl text-pink-400 mb-4">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">C</h3>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-pink-400 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Skill 9: C++ */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl text-pink-400 mb-4">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">C++</h3>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-pink-400 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
