import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Exam() {
  return (
    <div className="min-h-screen bg-pinterin-cream">
      <Header activeLink="exam" />
      
      {/* Main Content */}
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pinterin-dark-blue mb-6">
              What Course You'll Take?
            </h1>
            <p className="text-lg lg:text-xl text-pinterin-blue max-w-3xl mx-auto leading-relaxed">
              Choose your path to academic excellence. Our comprehensive exam preparation courses are designed to help you achieve your highest potential in standardized testing.
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* SAT Card */}
            <div className="bg-white rounded-[35px] shadow-lg p-8 lg:p-12 min-h-[500px] flex flex-col">
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-medium text-pinterin-text-muted mb-6">
                  SAT
                </h2>
                <div className="text-lg text-pinterin-text-muted leading-relaxed text-justify">
                  <p className="mb-4">
                    Master the SAT with our comprehensive preparation program. Our adaptive learning platform provides personalized study plans, practice tests, and detailed analytics to help you achieve your target score.
                  </p>
                  <p className="mb-4">
                    Features include full-length practice exams, section-specific drills, comprehensive review materials, and expert strategies for Reading, Writing and Language, and Math sections.
                  </p>
                  <p>
                    Track your progress with detailed performance analytics and receive personalized recommendations to focus your study time where it matters most.
                  </p>
                </div>
              </div>
            </div>

            {/* UTBK Card */}
            <div className="bg-white rounded-[35px] shadow-lg p-8 lg:p-12 min-h-[500px] flex flex-col">
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-medium text-pinterin-text-muted mb-6">
                  UTBK
                </h2>
                <div className="text-lg text-pinterin-text-muted leading-relaxed text-justify">
                  <p className="mb-4">
                    Excel in the UTBK (Ujian Tulis Berbasis Komputer) with our specialized Indonesian university entrance exam preparation. Our platform is tailored for Indonesian students aiming for top universities.
                  </p>
                  <p className="mb-4">
                    Comprehensive coverage of Tes Potensi Skolastik (TPS), Tes Literasi dalam Bahasa Indonesia dan Bahasa Inggris, Tes Penalaran Matematika, and subject-specific tests.
                  </p>
                  <p>
                    Practice with authentic question types, time management strategies, and receive insights based on previous UTBK trends and patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
