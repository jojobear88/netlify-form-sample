'use client';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">Hi, I'm a Full-Stack Developer</h1>
        <p className="text-xl sm:text-2xl mb-8 text-blue-50">
          I create beautiful, responsive web applications using modern technologies like React, Next.js, and Tailwind CSS.
        </p>
        <p className="text-lg sm:text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          With expertise in both frontend and backend development, I help businesses build scalable, user-friendly solutions that drive growth and engagement.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
