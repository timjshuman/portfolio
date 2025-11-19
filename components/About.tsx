export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="space-y-8 text-lg text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Sets Me Apart</h3>
            <ul className="space-y-3">
              <li className="leading-relaxed">🔹 Managed projects from start to finish in ecommerce, small business tech, and enterprise software.</li>
              <li className="leading-relaxed">🔹 Created data systems that brought clarity to business numbers and helped triple revenue.</li>
              <li className="leading-relaxed">🔹 Championed internal culture by starting global newsletters to share wins and keep everyone connected.</li>
              <li className="leading-relaxed">🔹 Applied AI/ML pragmatically as an early adopter of prompt engineering with GPT/OpenAI to solve real merchant problems.</li>
              <li className="leading-relaxed">🔹 Bring a versatile technical background and take on roles like engineer, product manager, project leader, and team builder.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Maintenance Approach</h3>
            <p className="leading-relaxed mb-4">
              I always start by understanding the "why" behind a problem. Listening closely helps me build systems that grow with the business and stay focused on the people using them. I create lasting value through improving workflows, mentoring teams, and writing code: things that matter long after the project is done.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Current Focus</h3>
            <p className="leading-relaxed mb-4">
              I am now seeking a full-time remote role with a stronger focus on internal operations and leadership. I'm especially interested in joining a startup or small organization within the broader tech or software space. Areas that excite me include ERP, CMS, and third-party solution providers.
            </p>
            <p className="leading-relaxed mb-3">I also explore opportunities in areas I'm passionate about:</p>
            <ul className="space-y-3">
              <li className="leading-relaxed">🔹 Game development studios, where I can contribute to the magic behind the scenes.</li>
              <li className="leading-relaxed">🔹 Developer tooling companies focused on creating better tools for builders like me.</li>
              <li className="leading-relaxed">🔹 Platform teams dedicated to building strong foundations for excellent user experiences.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
            <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
            <div className="text-gray-700 dark:text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">20+</div>
            <div className="text-gray-700 dark:text-gray-300">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
}

