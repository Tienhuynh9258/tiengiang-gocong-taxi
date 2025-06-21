import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, MapPin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-darkBlue text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <PhoneCall className="h-4 w-4 mr-2" />
                <a href="tel:0387560769" className="hover:text-brand-yellow"><strong>Hotline:</strong> 0387 560 769</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@taxitiengianggocong.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-brand-yellow">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-brand-yellow">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <div className="font-bold text-2xl">
                  <span className="text-brand-blue">Taxi </span>
                  <span className="text-brand-yellow">Tiền Giang - Gò Công</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-800 hover:text-brand-blue font-medium">Trang chủ</a>
              <a href="#about" className="text-gray-800 hover:text-brand-blue font-medium">Giới thiệu</a>
              <a href="#services" className="text-gray-800 hover:text-brand-blue font-medium">Dịch vụ</a>
              <a href="#cars" className="text-gray-800 hover:text-brand-blue font-medium">Xe</a>
              <a href="#contact" className="text-gray-800 hover:text-brand-blue font-medium">Liên hệ</a>
              <Button asChild className="bg-brand-yellow hover:bg-yellow-500 text-brand-darkBlue font-bold">
                <a href="tel:0387560769">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  <strong>Hotline:</strong> 0387 560 769
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white w-full mt-2 py-4 px-4 shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-800 hover:text-brand-blue font-medium px-4 py-2 rounded-md hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
                Trang chủ
              </a>
              <a href="#about" className="text-gray-800 hover:text-brand-blue font-medium px-4 py-2 rounded-md hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
                Giới thiệu
              </a>
              <a href="#services" className="text-gray-800 hover:text-brand-blue font-medium px-4 py-2 rounded-md hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
                Dịch vụ
              </a>
              <a href="#cars" className="text-gray-800 hover:text-brand-blue font-medium px-4 py-2 rounded-md hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
                Xe
              </a>
              <a href="#contact" className="text-gray-800 hover:text-brand-blue font-medium px-4 py-2 rounded-md hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
                Liên hệ
              </a>
              <Button asChild className="bg-brand-yellow hover:bg-yellow-500 text-brand-darkBlue font-bold w-full">
                <a href="tel:0387560769">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  <strong>Hotline:</strong> 0387 560 769
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
