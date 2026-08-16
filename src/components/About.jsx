import salinaPhoto from "../assets/photo/me.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-chic-alt py-16 transition-colors duration-500 dark:bg-chic-darkAlt sm:py-20"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 xl:px-0">
        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-chic-text dark:text-chic-darkText sm:text-4xl md:text-5xl">
            <span className="text-chic-accent">About Me</span>
          </h2>

          <p className="max-w-2xl text-base leading-7 text-chic-muted dark:text-chic-darkMuted sm:text-lg">
            I like understanding how things work — and then building them
            better.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
          {/* Photo */}
          <div className="w-52 flex-shrink-0 sm:w-60 md:w-64">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl border border-chic-accent/40" />

              <img
                src={salinaPhoto}
                alt="Salina Bishwokarma"
                className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 text-base leading-7 text-chic-muted dark:text-chic-darkMuted sm:text-lg">
            <p>
              I'm Salina, a Computer Engineering graduate from Nepal who enjoys
              turning ideas into useful software. My journey into development
              started with a curiosity about how websites and applications
              actually work — and that curiosity gradually became a passion
              for building them myself.
            </p>

            <p>
              I enjoy working across the stack, from designing interfaces and
              building frontend experiences to developing APIs, application
              logic, and database systems. Through my projects and hands-on
              experience, I've worked on digital wellness, payroll management,
              healthcare, and other practical applications.
            </p>

            <p>
              What I enjoy most is taking an idea from an early concept and
              turning it into something clear, functional, and genuinely
              useful. I'm always interested in learning better ways to design,
              engineer, and ship software.
            </p>

            <p>
              I'm currently looking for opportunities where I can contribute to
              meaningful products, learn from experienced engineers, and
              continue growing as a software developer.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 gap-5 border-t border-chic-accent/20 pt-6 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-chic-accent">
                  Background
                </p>
                <p className="mt-1 text-sm font-medium text-chic-text dark:text-chic-darkText">
                  Computer Engineering
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-chic-accent">
                  Focus
                </p>
                <p className="mt-1 text-sm font-medium text-chic-text dark:text-chic-darkText">
                  Full-Stack Development
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-chic-accent">
                  Based in
                </p>
                <p className="mt-1 text-sm font-medium text-chic-text dark:text-chic-darkText">
                  Nepal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;