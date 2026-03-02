export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Digital Ventures Corp.',
      position: 'Lead Developer / Project Manager',
      duration: '2020 - Present',
      period: 'SaaS/eCommerce Product Leadership',
      achievements: [
        'Architected scalable systems with automated CI/CD pipelines, deploying on AWS/Azure and platforms like Netlify.',
        'Managed project workflows, collaborating with design, QA, and clients to meet KPIs and launch timelines effectively.'
      ]
    },
    {
      id: 2,
      company: 'Creative Solutions Ltd.',
      position: 'Full-Stack Developer',
      duration: '2013 - 2019',
      period: 'Full-Stack Development',
      achievements: [
        'Executed projects covering both frontend and backend development, integrating CMS solutions and optimizing UX/UI design.',
        'Implemented REST and GraphQL APIs while optimizing relational and NoSQL databases for improved data management.'
      ]
    },
    {
      id: 3,
      company: 'BuCA JSC.',
      position: 'Web Developer',
      duration: '2008 - 2012',
      period: 'Early Career',
      achievements: [
        'Developed and maintained static and dynamic websites, focusing on SEO optimization and page load performance to enhance user experience.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="flex gap-4 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                {index !== experiences.length - 1 && (
                  <div className="w-1 h-24 bg-blue-200 my-2"></div>
                )}
              </div>
              
              <div className="pb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-blue-500 mb-1">{exp.period}</p>
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  {/* <p className="text-blue-600 font-semibold mb-2">{exp.company}</p> */}
                  <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-700 flex gap-3">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
