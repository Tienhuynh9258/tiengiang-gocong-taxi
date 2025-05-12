
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock, User, Car, Calendar } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactSection = () => {
  const [bookingType, setBookingType] = useState('taxi');
  
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the booking request
    console.log('Booking form submitted');
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
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center text-orange-500">ĐẶT XE NGAY TẠI ĐÂY</h3>
              
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                    <label className="block text-gray-700">Điểm đón</label>
                  </div>
                  <Input 
                    placeholder="Nhập địa điểm đón" 
                    className="border-gray-300"
                    required
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                    <label className="block text-gray-700">Điểm đến</label>
                  </div>
                  <Input 
                    placeholder="Nhập địa điểm đến" 
                    className="border-gray-300"
                    required
                  />
                </div>
                
                <div className="py-2">
                  <RadioGroup 
                    defaultValue="taxi" 
                    className="flex gap-6"
                    onValueChange={setBookingType}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="taxi" id="taxi" />
                      <Label htmlFor="taxi">Taxi</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ghepghe" id="ghepghe" />
                      <Label htmlFor="ghepghe">Ghép ghế</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="baoxe" id="baoxe" />
                      <Label htmlFor="baoxe">Bao xe</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <User className="h-5 w-5 text-red-500 mr-2" />
                      <label className="block text-gray-700">Họ và tên</label>
                    </div>
                    <Input 
                      placeholder="Nhập họ và tên" 
                      className="border-gray-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Phone className="h-5 w-5 text-purple-500 mr-2" />
                      <label className="block text-gray-700">Số điện thoại</label>
                    </div>
                    <Input 
                      type="tel" 
                      placeholder="Nhập số điện thoại" 
                      className="border-gray-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Car className="h-5 w-5 text-blue-500 mr-2" />
                      <label className="block text-gray-700">Tùy chọn xe</label>
                    </div>
                    <Select>
                      <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Tùy chọn xe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedan4">Sedan 4 Chỗ</SelectItem>
                        <SelectItem value="suv7">SUV 7 Chỗ</SelectItem>
                        <SelectItem value="xe16">Xe 16 Chỗ</SelectItem>
                        <SelectItem value="vip">Xe VIP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-teal-500 mr-2" />
                      <label className="block text-gray-700">Ngày giờ đón</label>
                    </div>
                    <Input 
                      type="text" 
                      placeholder="12-05-2025 16:00" 
                      className="border-gray-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="pt-4 flex justify-center">
                  <Button type="submit" className="w-full md:w-auto px-8 py-3 bg-brand-yellow hover:bg-yellow-500 text-brand-darkBlue font-bold rounded-full text-lg">
                    Đặt xe ngay
                  </Button>
                </div>
              </form>
            </div>
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
