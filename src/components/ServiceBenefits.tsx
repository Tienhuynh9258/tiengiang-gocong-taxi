import React from 'react';
import { Button } from "@/components/ui/button";

const ServiceBenefits = () => {
  const services = [
    {
      id: 1,
      title: "Taxi giá rẻ",
      description: "Dịch vụ chạy xe taxi giá rẻ, phục vụ khách hàng 24/7",
      image: "/images/taxi_gia_re.png"
    },
    {
      id: 2,
      title: "Taxi nội thành",
      description: "Di chuyển trong TP Gò Công, Chợ Gạo và các khu vực lân cận",
      image: "/images/taxi_noi_thanh.jpg"
    },
    {
      id: 3,
      title: "Taxi đường dài - du lịch",
      description: "Dịch vụ taxi di chuyển - du lịch các tỉnh lân cận lân cận Tiền Giang và miền Nam",
      image: "/images/taxi_du_lich.png"
    },
    {
      id: 4,
      title: "Taxi theo hợp đồng",
      description: "Dịch vụ taxi theo hợp đồng cho cá nhân và doanh nghiệp",
      image: "/images/taxi_hop_dong.png"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">DỊCH VỤ CỦA CHÚNG TÔI</h2>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-brand-yellow rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Taxi Gò Công - Tiền Giang cung cấp nhiều dịch vụ đa dạng, đáp ứng mọi nhu cầu di chuyển của khách hàng
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-brand-blue hover:border-brand-yellow cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-95"
                />
              </div>
              <div className="p-6 flex flex-col items-start">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 leading-snug group-hover:text-brand-yellow transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
