const About = () => {
  // Added more specific skills to showcase versatility
  const skills = ["React.js", "TypeScript", "Java", "MongoDB"];

  return (
    <section className="py-20 px-10 bg-[#111] rounded-3xl mx-4">
      <h2 className="text-3xl font-bold text-grey mb-8">About Me</h2>
      
      <div className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
        <p className="mb-4">
          I am a <strong>BSIT Student at the University of Baguio</strong> with a deep 
          interest in building scalable web applications and efficient backend systems. 
          My journey in tech is fueled by a curiosity for how complex systems work 
          and a desire to create software that solves real-world problems.
        </p>
        <p>
          Currently, I am specializing in <strong>Full-Stack Development</strong>, 
          where I enjoy bridging the gap between clean user interfaces and robust 
          server-side logic. When I'm not coding, I'm often exploring new frameworks 
          or contributing to environmental research projects.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-white mb-4">Technical Toolbox</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span 
            key={skill} 
            className="bg-blue-900/20 text-blue-400 px-4 py-2 rounded-full border border-blue-800/50 hover:bg-blue-800/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;