
import React from 'react';
import { Button } from "@/components/ui/button";

const ServiceBenefits = () => {
  const services = [
    {
      id: 1,
      title: "Taxi sân bay",
      description: "Dịch vụ đưa đón sân bay nhanh chóng, thuận tiện với giá cố định",
      image: "https://taxiquangnam.io.vn/wp-content/uploads/2023/08/san-bay.jpg"
    },
    {
      id: 2,
      title: "Taxi nội thành",
      description: "Di chuyển trong thành phố Mỹ Tho và các khu vực lân cận",
      image: "https://taxiquangnam.io.vn/wp-content/uploads/2023/08/noi-thanh.jpg"
    },
    {
      id: 3,
      title: "Taxi đường dài",
      description: "Dịch vụ taxi đi các tỉnh lân cận và toàn quốc",
      image: "https://taxiquangnam.io.vn/wp-content/uploads/2023/08/duong-dai.jpg"
    },
    {
      id: 4,
      title: "Taxi theo hợp đồng",
      description: "Dịch vụ taxi theo hợp đồng cho cá nhân và doanh nghiệp",
      image: "https://taxiquangnam.io.vn/wp-content/uploads/2023/08/hop-dong.jpg"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">DỊCH VỤ CỦA CHÚNG TÔI</h2>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-brand-yellow"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Taxi Tiền Giang cung cấp nhiều dịch vụ đa dạng, đáp ứng mọi nhu cầu di chuyển của khách hàng
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button className="w-full bg-brand-yellow hover:bg-yellow-500 text-brand-darkBlue font-semibold">
                  Chi tiết
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
