import { Button } from "@/components/ui/button";

interface HeaderProps {
  activeLink?: string;
}

export default function Header({ activeLink }: HeaderProps) {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-pinterin-blue rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-pinterin-dark-blue">Pinterin</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a 
              href="/" 
              className={`text-pinterin-dark-blue hover:text-pinterin-blue transition-colors ${
                activeLink === 'home' ? 'underline' : ''
              }`}
            >
              Home
            </a>
            <a
              href="/exam"
              className={`text-pinterin-dark-blue hover:text-pinterin-blue transition-colors ${
                activeLink === 'exam' ? 'underline' : ''
              }`}
            >
              Exam
            </a>
            <a
              href="/pricing"
              className={`text-pinterin-dark-blue hover:text-pinterin-blue transition-colors ${
                activeLink === 'pricing' ? 'underline' : ''
              }`}
            >
              Pricing
            </a>
            <a href="#" className="text-pinterin-dark-blue hover:text-pinterin-blue transition-colors">Partnership</a>
            <a href="#" className="text-pinterin-dark-blue hover:text-pinterin-blue transition-colors">Contact</a>
            <a href="#" className="text-pinterin-dark-blue hover:text-pinterin-blue transition-colors">Login</a>
            <Button className="bg-pinterin-dark-blue hover:bg-pinterin-blue text-white rounded-full px-6">
              Sign Up
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
