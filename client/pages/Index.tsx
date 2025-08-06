import { Button } from "@/components/ui/button";
import { Brain, BookOpen, BarChart3 } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-pinterin-cream">
      {/* Header */}
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
              <a href="#" className="text-pinterin-dark-blue hover:text-pinterin-blue transition-colors underline">Home</a>
              <a href="#" className="text-pinterin-dark-blue hover:text-pinterin-blue transition-colors">Exam</a>
              <a href="#" className="text-pinterin-dark-blue hover:text-pinterin-blue transition-colors">Pricing</a>
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

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-pinterin-blue font-medium">get your</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pinterin-blue leading-tight">
                  BOOST YOUR SAT SCORES
                </h1>
                <p className="text-lg lg:text-xl text-pinterin-dark-blue leading-relaxed max-w-xl">
                  We provides tailored learning materials, in-depth practice sessions, and mock exams for SAT and UTBK, all based on real questions from previous tests. Our platform supports your preparation journey with insightful analytics to help you achieve top scores.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-pinterin-purple hover:bg-pinterin-purple/90 text-white rounded-full px-6 py-3">
                  Get Started
                </Button>
                <Button variant="outline" className="border-pinterin-text-muted text-pinterin-text-muted hover:bg-pinterin-text-muted hover:text-white rounded-full px-6 py-3">
                  Explore
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F3dde018d63f04d0bb5097c08a75419df%2F35be60630e7445e18450e85cd1128450?format=webp&width=800"
                  alt="SAT preparation illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Feature Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
                <div className="aspect-[3/2] bg-slate-300 rounded-2xl flex items-center justify-center">
                  <span className="text-slate-500 text-lg">Feature Illustration</span>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-pinterin-text-muted font-medium">Label goes here</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pinterin-dark-blue">
                  Features
                </h2>
                <p className="text-lg lg:text-xl text-pinterin-dark-blue leading-relaxed">
                  Our platform delivers AI-powered adaptive learning designed specifically for exams like SAT and UTBK. We offer realistic mock exams, detailed performance analytics, an intuitive user interface, comprehensive reports for deeper insights, and customizable dashboards to personalize your preparation journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Driven Learning Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="w-18 h-17 bg-pinterin-purple rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">AI-Driven Personalized Learning</h3>
              <p className="text-pinterin-dark-blue leading-relaxed">
                AI-powered learning that tailors SAT and UTBK questions to your skill level—target your weak spots and sharpen your strengths.
              </p>
            </div>

            {/* Exam Practice Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="w-18 h-17 bg-pinterin-purple rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Exam-Like Practice Sessions</h3>
              <p className="text-pinterin-dark-blue leading-relaxed">
                Experience the real SAT and UTBK with full-length mock exams designed to reflect the exact format and pressure of the actual test day.
              </p>
            </div>

            {/* Analytics Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 md:col-span-2 lg:col-span-1">
              <div className="w-18 h-17 bg-pinterin-purple rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Analysis and Statistic Report</h3>
              <p className="text-pinterin-dark-blue leading-relaxed">
                Enjoy an intuitive interface that makes it easy to navigate and track your SAT and UTBK progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-pinterin-dark-blue mb-8">
            ready to take your next step?
          </h2>
          <Button className="bg-pinterin-dark-blue hover:bg-pinterin-blue text-white rounded-full px-8 py-4 text-xl lg:text-2xl">
            Ready
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pinterin-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-4xl lg:text-5xl font-bold mb-4">Pinterin</h3>
              <p className="text-xl mb-6">Where Smart Meets Strategic</p>
              <p className="text-lg mb-4">Our Social Media</p>
            </div>

            {/* Support Links */}
            <div className="text-right">
              <div className="space-y-4">
                <p className="text-xl font-bold">Support & Help</p>
                <p className="text-xl font-bold">Terms & Privacy</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xl font-bold">© 2025 Pinterin</p>
              <div className="flex gap-8">
                <a href="#" className="text-xl font-bold hover:underline">Support & Help</a>
                <a href="#" className="text-xl font-bold hover:underline">Terms & Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
