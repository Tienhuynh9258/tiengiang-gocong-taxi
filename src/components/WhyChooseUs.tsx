import React from 'react';
import { Check, Clock, Shield, MapPin, BadgeDollarSign, Car } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="h-12 w-12 md:h-10 md:w-10 text-brand-yellow transition-transform duration-300" />,
    title: <>An toàn <span className="text-brand-yellow">tuyệt đối</span></>,
    description: "Xe đời mới, bảo dưỡng định kỳ, tài xế lành nghề"
  },
  {
    icon: <Clock className="h-12 w-12 md:h-10 md:w-10 text-brand-yellow transition-transform duration-300" />,
    title: <>Đúng <span className="text-brand-yellow">giờ</span></>,
    description: "Phục vụ 24/7, đến đúng giờ, không để khách chờ đợi"
  },
  {
    icon: <BadgeDollarSign className="h-12 w-12 md:h-10 md:w-10 text-brand-yellow transition-transform duration-300" />,
    title: <>Giá cả <span className="text-brand-yellow">hợp lý</span></>,
    description: "Bảng giá minh bạch, không phụ thu, không phát sinh"
  },
  {
    icon: <Car className="h-12 w-12 md:h-10 md:w-10 text-brand-yellow transition-transform duration-300" />,
    title: <>Xe <span className="text-brand-yellow">đời mới</span></>,
    description: "Đội xe hiện đại, đầy đủ tiện nghi, sạch sẽ, thoải mái"
  },
  {
    icon: <MapPin className="h-12 w-12 md:h-10 md:w-10 text-brand-yellow transition-transform duration-300" />,
    title: <>Nhiều <span className="text-brand-yellow">điểm đón</span></>,
    description: "Dễ dàng đón khách tại nhiều điểm trong và ngoài tỉnh"
  },
  {
    icon: <Check className="h-12 w-12 md:h-10 md:w-10 text-brand-yellow transition-transform duration-300" />,
    title: <>Tài xế <span className="text-brand-yellow">chuyên nghiệp</span></>,
    description: "Tài xế thân thiện, am hiểu địa phương, nhiều kinh nghiệm"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            TẠI SAO CHỌN <span className="text-brand-yellow">TAXI GÒ CÔNG - TIỀN GIANG?</span>
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-brand-yellow"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Với nhiều năm kinh nghiệm, chúng tôi tự hào là đơn vị cung cấp dịch vụ taxi uy tín hàng đầu tại Gò Công
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.03] border border-transparent hover:border-brand-yellow transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
              tabIndex={0}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10 whitespace-nowrap">
                    {typeof reason.title === 'string' ? reason.title : ''}
                  </span>
                  {reason.icon}
                </div>
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
