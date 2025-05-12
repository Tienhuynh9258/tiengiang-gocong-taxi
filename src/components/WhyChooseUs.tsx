
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, PhoneCall } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    'Đội xe hiện đại, đa dạng loại xe',
    'Giá cả cạnh tranh, công khai minh bạch',
    'Tài xế chuyên nghiệp, am hiểu địa phương',
    'Dịch vụ 24/7, hỗ trợ khách hàng nhanh chóng',
    'Xe sạch sẽ, được bảo dưỡng định kỳ',
    'Hóa đơn VAT đầy đủ cho khách hàng doanh nghiệp'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Tại Sao Chọn Dịch Vụ Taxi Tiền Giang?</h2>
            <p className="text-gray-600 mb-8">
              Với nhiều năm kinh nghiệm phục vụ khách hàng, chúng tôi tự hào mang đến dịch vụ taxi chất lượng cao tại Tiền Giang. Sự hài lòng của khách hàng luôn là ưu tiên hàng đầu của chúng tôi.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-brand-blue" />
                  </div>
                  <p className="ml-3 text-gray-600">{reason}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white rounded-full">
              <PhoneCall className="mr-2 h-4 w-4" />
              Gọi Ngay: 0909 123 456
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
                alt="Taxi service" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-yellow text-brand-darkBlue p-6 rounded-lg shadow-lg hidden md:block">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Năm kinh nghiệm</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-brand-blue text-white p-6 rounded-lg shadow-lg hidden md:block">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm">Khách hàng hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
