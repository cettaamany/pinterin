import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Partnership() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-pinterin-cream">
      <Header activeLink="partnership" />
      
      {/* Main Content */}
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pinterin-blue mb-6">
              For Partnership
            </h1>
            <p className="text-lg lg:text-xl text-pinterin-blue max-w-3xl mx-auto leading-relaxed">
              To receive information about collaboration discussions and our corporate packages, you can use the contact details below or fill out the form to reach us.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-[35px] shadow-lg p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Full Name Field */}
                <div>
                  <label htmlFor="fullName" className="block text-xl font-normal text-black mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-lg placeholder-gray-500 focus:border-pinterin-blue focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xl font-normal text-black mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-lg placeholder-gray-500 focus:border-pinterin-blue focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xl font-normal text-black mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-lg placeholder-gray-500 focus:border-pinterin-blue focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xl font-normal text-black mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-lg placeholder-gray-500 focus:border-pinterin-blue focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <Button 
                    type="submit"
                    className="bg-pinterin-dark-blue hover:bg-pinterin-blue text-white rounded-full px-8 py-4 text-xl lg:text-2xl min-w-[152px]"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-pinterin-dark-blue mb-6">
              Partnership Opportunities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="font-semibold text-pinterin-dark-blue mb-2">Educational Institutions</h4>
                <p className="text-pinterin-text-muted">Partner with us to provide comprehensive SAT and UTBK preparation for your students</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="font-semibold text-pinterin-dark-blue mb-2">Corporate Training</h4>
                <p className="text-pinterin-text-muted">Bulk packages and custom solutions for organizations and training centers</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="font-semibold text-pinterin-dark-blue mb-2">Technology Integration</h4>
                <p className="text-pinterin-text-muted">API access and white-label solutions for educational technology platforms</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
