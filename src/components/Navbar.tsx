import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center space-x-2">
          <img
            src="logo.svg"
            alt="KoinX Logo"
            width={92}
            height={24}
            className="h-6 w-auto"
          />
        </a>

        <nav className="hidden gap-6 md:flex">
          <a
            href="/crypto-taxes"
            className="text-sm font-medium text-gray-800 hover:text-gray-600"
          >
            Crypto Taxes
          </a>
          <a
            href="/free-tools"
            className="text-sm font-medium text-gray-800 hover:text-gray-600"
          >
            Free Tools
          </a>
          <a
            href="/resource-center"
            className="text-sm font-medium text-gray-800 hover:text-gray-600"
          >
            Resource Center
          </a>
        </nav>

        <Button
          asChild
          className="rounded-lg bg-[#0052FE] px-6 hover:bg-[#0052FE]/90"
        >
          <a href="/get-started">Get Started</a>
        </Button>
      </div>
    </header>
  );
}
