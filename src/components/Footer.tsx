export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Portfolio</h3>
            <p className="text-sm">Full-stack developer creating modern web applications with cutting-edge technologies.</p>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
            <div className="space-y-2 text-sm">
              <p><a href="mailto:buiquangduy@ymail.com" className="hover:text-white transition">buiquangduy@ymail.com</a></p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.linkedin.com/in/buiquangduy/" className="hover:text-white transition">LinkedIn</a>
                <a href="https://github.com/jojobear88/" className="hover:text-white transition">GitHub</a>
                <a href="https://x.com/jojobear8888" className="hover:text-white transition">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} All rights reserved. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
