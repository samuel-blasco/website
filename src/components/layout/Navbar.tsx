export default function Navbar() {
  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Journal", href: "#journal" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <nav className="flex w-full items-center justify-between rounded-full border border-gray-200/80 bg-white/75 px-8 py-4 backdrop-blur-md shadow-sm">
          {/* Logo */}
          <a
            href="/"
            className="text-lg font-semibold tracking-tight text-[#111827]"
          >
            Samuel Blasco
          </a>

          {/* Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-[#0F7EA8]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="mailto:samuel.blasco@universite-paris-saclay.fr"
            className="rounded-full bg-[#0F7EA8] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#096785]"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}