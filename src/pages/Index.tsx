import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceBenefits from '@/components/ServiceBenefits';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import BookingFormSection from '@/components/BookingFormSection';

const Index = () => {
  // Sample car data for the car listing section
  const cars = [
    {
      id: 1,
      name: 'Xe 4 Chỗ',
      image: '/images/car1.jpeg',
      seats: 4,
      features: ['Máy lạnh', 'Wifi miễn phí', 'Nước uống', 'Tài xế chuyên nghiệp'],
      isPopular: true
    },
    {
      id: 2,
      name: 'Xe 7 Chỗ',
      image: '/images/car2.jpg',
      seats: 7,
      features: ['Máy lạnh', 'Wifi miễn phí', 'Nước uống', 'Rộng rãi']
    }
  ];

  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <BookingFormSection />
      
      {/* About Section First */}
      <AboutSection />
      
      {/* Services Section */}
      <ServiceBenefits />
      
      {/* Car Listing Section */}
      <section id="cars" className="py-16 bg-gray-100 flex justify-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">CÁC LOẠI XE CỦA CHÚNG TÔI</h2>
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-brand-yellow"></div>
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Đa dạng các loại xe 4 chỗ và 7 chỗ, đáp ứng mọi nhu cầu di chuyển của bạn
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch">
            {cars.map((car) => (
              <CarCard 
                key={car.id}
                name={car.name}
                image={car.image}
                seats={car.seats}
                features={car.features}
                isPopular={car.isPopular}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Contact Section */}
      <ContactSection />
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 bg-brand-yellow text-brand-darkBlue p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
