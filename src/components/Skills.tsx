export default function Skills() {
  const skillCategories = [
    {
      category: 'Web Development',
      skills: ['HTML', 'CSS', 'React', 'Angular', 'Next.js', 'PHP', 'WordPress', 'Shopify', 'Blogger', 'Wix']
    },
    {
      category: 'Frontend Styling & Animation',
      skills: ['Bootstrap', 'Tailwind CSS', 'Material-UI', 'PrimeNG', 'SVG.js', 'Three.js', 'D3.js']
    },
    {
      category: 'Backend & Databases',
      skills: ['Node.js', 'Python', 'Java Spring', '.NET', 'C#', 'PostgreSQL', 'MySQL', 'Oracle', 'MongoDB']
    },
    {
      category: 'Cloud, APIs & DevOps',
      skills: ['AWS', 'Docker', 'Azure', 'GitHub', 'GitLab', 'Netlify', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Design, Prototyping & Creative',
      skills: ['Figma', 'Photoshop', 'Illustrator', 'After Effects', 'Animate', 'XDesign', 'Blender', 'Unity', 'Ren\'Py']
    },
    {
      category: 'Data Science & AI',
      skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'LLMs', 'Prompt Engineering', 'Diffusion Models', 'ETL']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
