export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Car Auction Multi-Platform',
      description: '9Car is a comprehensive e-commerce platform for car auctions, offering a secure environment for users to browse car listings and process payments seamlessly.',
      technologies: ['React', 'ReactNative', 'NextJS', 'NodeJS', 'Tailwind CSS', 'Paypal', 'PostgreSQL'],
      link: 'http://9car.vn/'
    },
    {
      id: 2,
      title: 'Sporting Platform',
      description: 'The Sporting Platform enhances fan engagement, enabling sports organizations to strengthen relationships, streamline transactions, and create immersive brand experiences.',
      technologies: ['Angular', '.NET', 'SQL Server', 'RESTful APIs', 'Azure', 'Bootstrap'],
      link: 'https://www.fortressgb.com/the-platform/'
    },
    {
      id: 3,
      title: 'Online Education Apps',
      description: 'This scalable online education platform offers interactive lessons and assessments, featuring engaging animations to enhance the learning experience for students in Japan.',
      technologies: ['SVG', 'Three.js', 'D3.js', 'Animate', 'Premiere', 'After Effects'],
      link: 'https://www.chart.co.jp/'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects, skills, and experience with smooth scrolling and responsive design.',
      technologies: ['CreateJS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      link: 'https://jojobear88-portfolio-2021.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
