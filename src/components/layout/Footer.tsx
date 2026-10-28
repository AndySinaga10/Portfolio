export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a2e] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            AS
          </div>
          <div>
            <p className="font-semibold text-sm">Andi Sinaga</p>
            <p className="text-gray-400 text-xs">UI/UX Product Designer</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm text-center">
          © {year} Andi Sinaga. Crafted with care &amp; caffeine ☕
        </p>

        <div className="flex items-center gap-4">
          {[
            { label: "Dribbble", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Behance", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
