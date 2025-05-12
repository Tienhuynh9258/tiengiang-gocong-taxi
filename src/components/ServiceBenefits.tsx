
import React from 'react';
import { Calendar, Clock, MapPin, Shield } from 'lucide-react';

const ServiceBenefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-12 w-12 text-brand-blue" />,
      title: 'An Toàn & Đáng Tin Cậy',
      description: 'Đội ngũ tài xế chuyên nghiệp, kinh nghiệm lâu năm, đảm bảo an toàn cho khách hàng'
    },
    {
      icon: <Clock className="h-12 w-12 text-brand-blue" />,
      title: 'Đúng Giờ',
      description: 'Cam kết đón khách đúng giờ, không để khách hàng phải chờ đợi'
    },
    {
      icon: <Calendar className="h-12 w-12 text-brand-blue" />,
      title: 'Đặt Xe 24/7',
      description: 'Dịch vụ hỗ trợ đặt xe 24/7, sẵn sàng phục vụ mọi lúc bạn cần'
    },
    {
      icon: <MapPin className="h-12 w-12 text-brand-blue" />,
      title: 'Đi Mọi Nơi',
      description: 'Phục vụ di chuyển tất cả các tuyến trong và ngoài tỉnh Tiền Giang'
    }
  ];

  return (
    <section id="services" className="py-16 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dịch Vụ Của Chúng Tôi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp dịch vụ taxi chất lượng cao, đảm bảo sự hài lòng và an toàn cho khách hàng
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mx-auto mb-4 rounded-full w-20 h-20 flex items-center justify-center bg-blue-50">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
