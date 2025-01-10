export function Navigation() {
  const links = [
    { href: "#", label: "Overview", active: true },
    { href: "#", label: "Fundamentals", active: false },
    { href: "#", label: "News Insights", active: false },
    { href: "#", label: "Sentiments", active: false },
    { href: "#", label: "Team", active: false },
    { href: "#", label: "Technicals", active: false },
    { href: "#", label: "Tokenomics", active: false },
  ];

  return (
    <nav className="border-b border-gray-200">
      <div className="flex space-x-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`px-1 py-4 text-sm font-medium border-b-2 ${
              link.active
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
