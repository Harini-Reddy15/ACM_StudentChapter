import acmLogoPath from "@assets/acm logo_1753950471424.jpg";

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <img 
              src={acmLogoPath}
              alt="ACM Logo" 
              className="h-8 w-8 mr-3 object-contain"
            />
            <span className="text-xl font-bold text-white">St. Martin's ACM Student Chapter</span>
          </div>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            Advancing computing as a science and profession through education, research, and professional development.
          </p>
          <div className="border-t border-white/10 pt-6">
            <p className="text-white/40 text-sm">
              © 2024 St. Martin's ACM Student Chapter. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}