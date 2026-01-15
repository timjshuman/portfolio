export default function AudioSection() {
  return (
    <section id="audio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Case Studies & Project Highlights
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 text-center">
          An Audio Journey Through My Career & Experience
        </p>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <audio
            controls
            preload="metadata"
            className="w-full"
          >
            <source
              src="/Scaling_E-commerce_Platforms_and_Leadership_Strategy.m4a"
              type="audio/mp4"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  );
}
