import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
          <Button
            asChild
            className="rounded-lg bg-[#0052FE] px-6 hover:bg-[#0052FE]/90"
          >
            <a href="/get-started">Get Started</a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <a
                href="/crypto-taxes"
                className="text-lg font-medium text-gray-800 hover:text-gray-600"
              >
                Crypto Taxes
              </a>
              <a
                href="/free-tools"
                className="text-lg font-medium text-gray-800 hover:text-gray-600"
              >
                Free Tools
              </a>
              <a
                href="/resource-center"
                className="text-lg font-medium text-gray-800 hover:text-gray-600"
              >
                Resource Center
              </a>
              <Button
                asChild
                className="mt-4 rounded-lg bg-[#0052FE] px-6 hover:bg-[#0052FE]/90"
              >
                <a href="/get-started">Get Started</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
