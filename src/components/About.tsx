import Image from "next/image";

export default function About() {

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              width={584} height={800}
              src="/images/avatar.jpg"
              alt="Avatar"
              className="w-64 h-80 rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello, I&apos;m Bui Quang Duy, a seasoned Full-Stack Developer with 17+ years of experience (since 2008), translating ideas into robust web apps and software products.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;ve contributed to projects ranging from e-commerce platforms to education tech and enterprise applications. Proficient across frontend, backend, APIs, and cloud/CD deployments for SaaS, e-commerce, and CMS-driven projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I&apos;m not coding, I enjoy learning new technologies and exploring innovative approaches to software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
