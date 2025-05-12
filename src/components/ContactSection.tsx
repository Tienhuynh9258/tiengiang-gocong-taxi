
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the contact form
    console.log('Contact form submitted');
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">LIÊN HỆ VỚI CHÚNG TÔI</h2>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-brand-yellow mb-6"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi để được hỗ trợ đặt xe hoặc giải đáp các thắc mắc của bạn
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Thông Tin Liên Hệ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 bg-brand-yellow rounded-full p-2 text-brand-darkBlue">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Số Điện Thoại</h4>
                    <p className="text-gray-800">0909 123 456</p>
                    <p className="text-gray-800">0909 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-brand-yellow rounded-full p-2 text-brand-darkBlue">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <p className="text-gray-800">info@taxitiengiang.com</p>
                    <p className="text-gray-800">support@taxitiengiang.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-brand-yellow rounded-full p-2 text-brand-darkBlue">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Địa Chỉ</h4>
                    <p className="text-gray-800">123 Đại lộ Lê Lợi, TP. Mỹ Tho, Tiền Giang</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-brand-yellow rounded-full p-2 text-brand-darkBlue">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Giờ Làm Việc</h4>
                    <p className="text-gray-800">24/7 - Phục vụ cả ngày lễ và cuối tuần</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" 
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" 
                    placeholder="Nhập địa chỉ email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" 
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Chủ đề</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" 
                    placeholder="Nhập chủ đề"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tin nhắn</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" 
                  placeholder="Nhập nội dung tin nhắn"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-brand-yellow hover:bg-yellow-500 text-brand-darkBlue font-semibold py-3 rounded-md transition duration-200">
                Gửi Tin Nhắn
              </Button>
            </form>
          </div>
        </div>
        
        {/* Map section */}
        <div className="mt-12">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125412.45259193536!2d106.29494061116244!3d10.350604105815592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a9ce276ae9a7f%3A0xff70bf811640ac6e!2zTXkgVGhvLCBUaeG7gW4gR2lhbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1651827625577!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
