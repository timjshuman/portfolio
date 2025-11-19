export default function Experience() {
  const experiences = [
    {
      title: 'Launch Engineer',
      company: 'Shopify',
      period: '2021 - 2025',
      description: 'Working with E-Commerce B2B merchants to help monetize and move to new platforms. Helping to develop their data migration, integrations and custom solutions. Both face to face as well as internal solutions that help our merchants succeed, launch, and scaleing development of enterprise-level web applications using React, Node.js, and Cloud technologies. Mentoring junior developers and implementing best practices.',
      highlights: [
        'Provided advice and helped deploy services infrastructure',
        'Helped merchants migrate to new platforms and migrate data',
        'Launched flash sales successfully earning over 1 million dollars in GMV in one day',
      ],
    },
    {
      title: 'Project Manager',
      company: 'Capsher Technology',
      period: '2020 - 2021',
      description: 'Helping clients succeed through managing complex software projects and delivering business friendly solutions. Coordinates and plans internal day to day efforts of small and medium sized teams of Developers, Architects, Designers and Account Managers. Oversees all aspects of Project Management and communications between client and the software company, from Kickoff to Closeout with full-stack web applications using modern JavaScript frameworks and managed database design and API development.',
      highlights: [
        'Managed projects of varying sizes, from hotfixes for existing clients, to multi-million dollar contracts.',
        'Coordinates with Product Consultants, Account Managers and Architecture to develop clear and actionable project plans.',
        'Produced project artifacts including high level design, phase design, milestone design, and project estimates.',
      ],
    },
    {
      title: 'Senior Manager, Catalog Transer Services',
      company: 'BigCommerce',
      period: '2013 - 2019',
      description: 'Founding member of the data migrations team. Climbed the ranks from engineer, delivering data migrations and developing the core code, to senior manager responsible for product and project management, business functions and oversight of day to day as well as roadmap and deliverables.',
      highlights: [
        'Developed responsive web applications using React and TypeScript',
        'Implemented automated testing increasing code coverage to 85%',
        'Participated in agile development and sprint planning',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 font-medium">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

