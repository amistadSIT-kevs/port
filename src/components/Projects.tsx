
interface IProject {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  repoLink: string;
  liveLink?: string;
  category: string;
}

const hardcodedProjects: IProject[] = [
  {
    _id: 'local-1',
    title: 'MG Lab 5',
    description: 'A lab activity completed as part of my coursework.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/amistadsit-kevs/MG_LAB5_Amistad',
    liveLink: 'https://amistadsit-kevs.github.io/MG_LAB5_Amistad/',
    category: 'Lab Activity',
  },
  {
    _id: 'local-2',
    title: 'Midterm Lab Exam',
    description: 'A comprehensive layout and design project for my midterm examination.',
    techStack: ['React', 'Bootstrap', 'CSS'],
    repoLink: 'https://github.com/amistadsit-kevs/Midterm_Lab_Exam',
    liveLink: 'https://amistadsit-kevs.github.io/Midterm_Lab_Exam/',
    category: 'Examination',
  },
  {
    _id: 'local-3',
    title: 'FG Lab 4',
    description: 'Final Gallery Lab activity focusing on advanced web features.',
    techStack: ['React', 'TypeScript', 'CSS'],
    repoLink: 'https://github.com/amistadsit-kevs/FG_LAB4_Amistad',
    liveLink: 'https://amistadsit-kevs.github.io/FG_LAB4_Amistad/',
    category: 'Lab Activity',
  },
];

const Project = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="mb-5">
        <p className="text-uppercase text-secondary mb-1" style={{ fontSize: 11, letterSpacing: '0.12em' }}>
          Portfolio
        </p>
        <h2 className="fw-normal mb-2" style={{ fontFamily: 'Georgia, serif', fontSize: 32 }}>
          Academic Projects
        </h2>
        <p className="text-secondary" style={{ fontSize: 14, lineHeight: 1.7 }}>
          A collection of projects and activities built throughout my studies at the University of Baguio.
        </p>
      </div>

      {/* Grid */}
      <div className="row g-4">
        {hardcodedProjects.map((p) => (
          <div key={p._id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border shadow-none rounded-3">
              <div className="card-body d-flex flex-column p-4">
                
                {/* Title + Category */}
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="card-title fw-medium mb-0" style={{ fontSize: 16 }}>
                    {p.title}
                  </h5>
                  <span className="badge bg-light text-secondary border ms-2 flex-shrink-0" style={{ fontSize: 11 }}>
                    {p.category}
                  </span>
                </div>

                {/* Description */}
                <p className="card-text text-secondary small mb-3" style={{ lineHeight: 1.7, flexGrow: 1 }}>
                  {p.description}
                </p>

                {/* Tech Stack */}
                <div className="d-flex flex-wrap gap-1 mb-4">
                  {p.techStack.map((tech: string) => (
                    <span key={tech} className="badge bg-light text-secondary border" style={{ fontSize: 11 }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2 mt-auto">
                  <a 
                    href={p.repoLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-outline-secondary btn-sm flex-fill"
                  >
                    Source Code
                  </a>
                  {p.liveLink && (
                    <a 
                      href={p.liveLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-dark btn-sm flex-fill"
                    >
                      View Live →
                    </a>
                  )}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;