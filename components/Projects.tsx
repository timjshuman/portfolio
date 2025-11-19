export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Self Service Data Migration',
      description: 'A data migration suite of Apps that allows allows merchants to move customers, orders and products from one platform to another. Via SQL, API, or CSV import and built on years of experience.',
      technologies: ['PHP', 'REDIS', 'AWS', 'MYSQL', 'REST APIs'],
      link: 'https://www.bigcommerce.com/apps/data-migration-services-shopify/',
      linkText: 'Shopify data migration',
    },
    {
      title: 'High GMV Merchant Flash Sale',
      description: 'Collaborated with many teams and launched a flash sale on Shopify that earned over 1 million dollars in GMV in one day.',
      technologies: ['Shopify', 'REST APIs', 'Integrations'],
      link: 'https://halfmagicbeauty.com/',
      linkText: 'Half Magic Beauty',
    },
    {
      title: 'Obaji Medical',
      description: 'Worked with a team to build a custom Shopify theme and integrated with their ERP, CMS and Distributions systems to allow for custom product data and pricing.',
      technologies: ['Shopify', 'REST APIs', 'Integrations', 'CMS'],
      link: 'https://www.obagi.com/',
      linkText: 'Obagi Medical',
    },
    {
      title: 'Building B2B on E-Commerce',
      description: 'Working with product and development teams to build B2B solutions on Shopify that meets the merchant needs and goals.',
      technologies: ['B2B', 'Shopify', 'Ecommerce', 'ERP', 'CMS'],
      link: 'https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods/ach',
      linkText: 'ACH on B2B',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-all overflow-hidden transform hover:-translate-y-2 duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {project.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

