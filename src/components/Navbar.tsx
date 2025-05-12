
import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-blue">TIỀN GIANG</span>
              <span className="text-2xl font-bold text-brand-yellow ml-1">TAXI</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text-brand-blue font-medium">Trang chủ</a>
            <a href="#about" className="text-gray-800 hover:text-brand-blue font-medium">Giới thiệu</a>
            <a href="#services" className="text-gray-800 hover:text-brand-blue font-medium">Dịch vụ</a>
            <a href="#cars" className="text-gray-800 hover:text-brand-blue font-medium">Xe</a>
            <a href="#contact" className="text-gray-800 hover:text-brand-blue font-medium">Liên hệ</a>
          </div>

          {/* Call Button */}
          <Button className="hidden md:flex bg-brand-blue hover:bg-brand-darkBlue text-white rounded-full">
            <PhoneCall className="mr-2 h-4 w-4" />
            <span>0909 123 456</span>
          </Button>

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
            <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white rounded-full w-full">
              <PhoneCall className="mr-2 h-4 w-4" />
              <span>0909 123 456</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
