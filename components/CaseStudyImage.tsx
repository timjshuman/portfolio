import Image from 'next/image';

export default function CaseStudyImage() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="w-full max-w-5xl">
          <Image
            src="/hero_image.png"
            alt="From Challenge to Impact: A Proven Track Record of Success"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-xl shadow-lg"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
