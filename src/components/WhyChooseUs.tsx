
import React from 'react';
import { Check, Clock, Shield, MapPin, BadgeDollarSign, Car } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="h-10 w-10 text-brand-yellow" />,
      title: "An toàn tuyệt đối",
      description: "Xe đời mới, bảo dưỡng định kỳ, tài xế lành nghề"
    },
    {
      icon: <Clock className="h-10 w-10 text-brand-yellow" />,
      title: "Đúng giờ",
      description: "Phục vụ 24/7, đến đúng giờ, không để khách chờ đợi"
    },
    {
      icon: <BadgeDollarSign className="h-10 w-10 text-brand-yellow" />,
      title: "Giá cả hợp lý",
      description: "Bảng giá minh bạch, không phụ thu, không phát sinh"
    },
    {
      icon: <Car className="h-10 w-10 text-brand-yellow" />,
      title: "Xe đời mới",
      description: "Đội xe hiện đại, đầy đủ tiện nghi, sạch sẽ, thoải mái"
    },
    {
      icon: <MapPin className="h-10 w-10 text-brand-yellow" />,
      title: "Nhiều điểm đón",
      description: "Dễ dàng đón khách tại nhiều điểm trong và ngoài tỉnh"
    },
    {
      icon: <Check className="h-10 w-10 text-brand-yellow" />,
      title: "Tài xế chuyên nghiệp",
      description: "Tài xế thân thiện, am hiểu địa phương, nhiều kinh nghiệm"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">TẠI SAO CHỌN TAXI TIỀN GIANG?</h2>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-brand-yellow"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Với nhiều năm kinh nghiệm, chúng tôi tự hào là đơn vị cung cấp dịch vụ taxi uy tín hàng đầu tại Tiền Giang
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
