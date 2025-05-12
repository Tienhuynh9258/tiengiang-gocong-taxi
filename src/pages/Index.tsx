
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceBenefits from '@/components/ServiceBenefits';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';

const Index = () => {
  // Sample car data for the car listing section
  const cars = [
    {
      id: 1,
      name: 'Sedan 4 Chỗ',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop',
      price: '200.000 VNĐ/chuyến',
      seats: 4,
      features: ['Máy lạnh', 'Wifi miễn phí', 'Nước uống', 'Tài xế chuyên nghiệp'],
      isPopular: true
    },
    {
      id: 2,
      name: 'SUV 7 Chỗ',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop',
      price: '350.000 VNĐ/chuyến',
      seats: 7,
      features: ['Máy lạnh', 'Wifi miễn phí', 'Nước uống', 'Rộng rãi']
    },
    {
      id: 3,
      name: 'Xe VIP',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop',
      price: '500.000 VNĐ/chuyến',
      seats: 4,
      features: ['Ghế da cao cấp', 'Wifi tốc độ cao', 'Nước uống & snack', 'Tài xế VIP']
    },
    {
      id: 4,
      name: 'Xe 16 Chỗ',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop',
      price: '700.000 VNĐ/chuyến',
      seats: 16,
      features: ['Máy lạnh', 'Wifi miễn phí', 'Phù hợp nhóm lớn', 'Hành lý rộng rãi']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiceBenefits />
      <WhyChooseUs />
      
      {/* Car Listing Section */}
      <section id="cars" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Các Loại Xe Của Chúng Tôi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Đa dạng các loại xe từ 4 đến 16 chỗ, đáp ứng mọi nhu cầu di chuyển của bạn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cars.map((car) => (
              <CarCard 
                key={car.id}
                name={car.name}
                image={car.image}
                price={car.price}
                seats={car.seats}
                features={car.features}
                isPopular={car.isPopular}
              />
            ))}
          </div>
        </div>
      </section>
      
      <AboutSection />
      <ContactSection />
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 bg-brand-blue text-white p-3 rounded-full shadow-lg hover:bg-brand-darkBlue transition-colors z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
