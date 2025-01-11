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
    <nav className="border-b border-gray-300 overflow-x-auto  scrollbar-none">
      <div className="flex space-x-6 md:space-x-8 min-w-max px-4 md:px-0 ">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`px-1 py-3 md:py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
              link.active
                ? "border-b-[3px] border-[#0052FE] text-[#0141CF]"
                : "border-transparent text-black  hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
