export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Shopify Liquid', 'PHP', 'Shopify', 'Wordpress', 'Storefronts'],
    },
    {
      category: 'Backend',
      skills: ['REST API', 'GraphQL', 'PostgreSQL', 'MySQL', 'REDIS', 'PHP', 'ETL', 'Debugging'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Vercel', 'Servers', 'Github', 'Networking'],
    },
    {
      category: 'Tools & Others',
      skills: ['Agile/Scrum', 'Jira', 'Linux', 'Salesforce', 'AI', 'Migration', 'Strategy', 'Documentation'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
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

