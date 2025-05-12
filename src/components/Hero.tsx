
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, PhoneCall } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "https://taxiquangnam.io.vn/wp-content/uploads/2023/08/slide1.jpg",
      title: "Taxi Tiền Giang",
      subtitle: "Dịch vụ taxi uy tín, chất lượng cao tại Tiền Giang"
    },
    {
      id: 2,
      image: "https://taxiquangnam.io.vn/wp-content/uploads/2023/08/slide2.jpg",
      title: "Đa dạng phương tiện",
      subtitle: "Nhiều loại xe từ 4 đến 16 chỗ đáp ứng mọi nhu cầu"
    },
    {
      id: 3,
      image: "https://taxiquangnam.io.vn/wp-content/uploads/2023/08/slide3.jpg",
      title: "Giá cả hợp lý",
      subtitle: "Bảng giá minh bạch, không phát sinh chi phí"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.image}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-white mb-8 max-w-3xl mx-auto text-shadow">
                  {slide.subtitle}
                </p>
                <Button className="bg-brand-yellow hover:bg-yellow-400 text-brand-darkBlue font-semibold text-lg px-8 py-6 rounded shadow-lg">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Gọi Ngay: 0909 123 456
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-all ${
              index === currentSlide ? 'bg-brand-yellow' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
