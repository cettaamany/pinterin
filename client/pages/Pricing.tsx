import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"SAT" | "UTBK">("SAT");

  return (
    <div className="min-h-screen bg-pinterin-cream">
      <Header activeLink="pricing" />

      {/* Main Content */}
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab("SAT")}
                className={`px-8 py-3 rounded-2xl text-2xl lg:text-3xl font-medium transition-all duration-300 shadow-lg min-w-[175px] ${
                  activeTab === "SAT"
                    ? "bg-pinterin-purple text-white"
                    : "bg-pinterin-cream text-pinterin-purple border border-gray-200"
                }`}
              >
                SAT
              </button>
              <button
                onClick={() => setActiveTab("UTBK")}
                className={`px-8 py-3 rounded-2xl text-2xl lg:text-3xl font-medium transition-all duration-300 shadow-lg min-w-[175px] ${
                  activeTab === "UTBK"
                    ? "bg-pinterin-purple text-white"
                    : "bg-pinterin-cream text-pinterin-purple border border-gray-200"
                }`}
              >
                UTBK
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Daily Price Card */}
            <div className="bg-white rounded-[35px] shadow-lg p-8 lg:p-12 min-h-[500px] flex flex-col">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-pinterin-text-muted mb-4">
                  {activeTab} STARTER
                </h2>
                <p className="text-lg lg:text-xl text-pinterin-blue mb-6">
                  Daily Price
                </p>
                <div className="text-4xl lg:text-6xl font-medium text-pinterin-purple mb-8">
                  Rp 1.000
                </div>
                <Button className="bg-pinterin-purple hover:bg-pinterin-purple/90 text-white rounded-full px-8 py-4 text-xl lg:text-2xl mb-8">
                  Start now
                </Button>
                <div className="text-lg text-pinterin-text-muted leading-relaxed text-justify">
                  <p>
                    Perfect for daily practice sessions. Get access to curated
                    questions, instant feedback, and basic performance tracking.
                    Ideal for students who want to maintain consistent study
                    habits with flexible daily access to our {activeTab}{" "}
                    preparation materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Monthly Price Card */}
            <div className="bg-white rounded-[35px] shadow-lg p-8 lg:p-12 min-h-[500px] flex flex-col">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-pinterin-text-muted mb-4">
                  {activeTab} STARTER
                </h2>
                <p className="text-lg lg:text-xl text-pinterin-blue mb-6">
                  1 Month Price
                </p>
                <div className="text-4xl lg:text-6xl font-medium text-pinterin-purple mb-8">
                  Rp 25.000
                </div>
                <Button className="bg-pinterin-purple hover:bg-pinterin-purple/90 text-white rounded-full px-8 py-4 text-xl lg:text-2xl mb-8">
                  Start now
                </Button>
                <div className="text-lg text-pinterin-text-muted leading-relaxed text-justify">
                  <p>
                    Comprehensive monthly access with full features. Includes
                    unlimited practice tests, detailed analytics, personalized
                    study plans, and progress tracking. Best value for serious{" "}
                    {activeTab} preparation with complete access to all learning
                    materials and features.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Information */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-pinterin-dark-blue mb-6">
              What's Included in {activeTab} STARTER
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="font-semibold text-pinterin-dark-blue mb-2">
                  Practice Tests
                </h4>
                <p className="text-pinterin-text-muted">
                  Full-length practice exams with real question formats
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="font-semibold text-pinterin-dark-blue mb-2">
                  Performance Analytics
                </h4>
                <p className="text-pinterin-text-muted">
                  Detailed insights into your strengths and weaknesses
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="font-semibold text-pinterin-dark-blue mb-2">
                  Study Materials
                </h4>
                <p className="text-pinterin-text-muted">
                  Comprehensive review guides and practice questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
