export default function Footer() {
  return (
    <footer className="bg-pinterin-purple text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">Pinterin</h3>
            <p className="text-xl mb-6">Where Smart Meets Strategic</p>
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
              <a href="#" className="text-xl font-bold hover:underline">
                Support & Help
              </a>
              <a href="#" className="text-xl font-bold hover:underline">
                Terms & Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
