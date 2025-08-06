import { Button } from "@/components/ui/button";
import { Brain, BookOpen, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-pinterin-cream">
      <Header activeLink="home" />

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-pinterin-blue font-medium">
                  get your
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pinterin-blue leading-tight">
                  BOOST YOUR SAT SCORES
                </h1>
                <p className="text-lg lg:text-xl text-pinterin-dark-blue leading-relaxed max-w-xl">
                  We provides tailored learning materials, in-depth practice
                  sessions, and mock exams for SAT and UTBK, all based on real
                  questions from previous tests. Our platform supports your
                  preparation journey with insightful analytics to help you
                  achieve top scores.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-pinterin-purple hover:bg-pinterin-purple/90 text-white rounded-full px-6 py-3">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-pinterin-text-muted text-pinterin-text-muted hover:bg-pinterin-text-muted hover:text-white rounded-full px-6 py-3"
                >
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
                  <span className="text-slate-500 text-lg">
                    Feature Illustration
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-pinterin-text-muted font-medium">
                  Label goes here
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pinterin-dark-blue">
                  Features
                </h2>
                <p className="text-lg lg:text-xl text-pinterin-dark-blue leading-relaxed">
                  Our platform delivers AI-powered adaptive learning designed
                  specifically for exams like SAT and UTBK. We offer realistic
                  mock exams, detailed performance analytics, an intuitive user
                  interface, comprehensive reports for deeper insights, and
                  customizable dashboards to personalize your preparation
                  journey.
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
              <h3 className="text-xl font-bold text-black mb-4">
                AI-Driven Personalized Learning
              </h3>
              <p className="text-pinterin-dark-blue leading-relaxed">
                AI-powered learning that tailors SAT and UTBK questions to your
                skill level—target your weak spots and sharpen your strengths.
              </p>
            </div>

            {/* Exam Practice Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="w-18 h-17 bg-pinterin-purple rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Exam-Like Practice Sessions
              </h3>
              <p className="text-pinterin-dark-blue leading-relaxed">
                Experience the real SAT and UTBK with full-length mock exams
                designed to reflect the exact format and pressure of the actual
                test day.
              </p>
            </div>

            {/* Analytics Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 md:col-span-2 lg:col-span-1">
              <div className="w-18 h-17 bg-pinterin-purple rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Analysis and Statistic Report
              </h3>
              <p className="text-pinterin-dark-blue leading-relaxed">
                Enjoy an intuitive interface that makes it easy to navigate and
                track your SAT and UTBK progress.
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

      <Footer />
    </div>
  );
}
