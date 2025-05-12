
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Search } from 'lucide-react';

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ pickupLocation, dropoffLocation, pickupDate, pickupTime });
    // In a real app, this would send the booking request
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center bg-gray-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1623473443463-d6e18dc7fed8?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>
      
      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow-lg">
            Dịch Vụ Taxi Tiền Giang Uy Tín
          </h1>
          <p className="text-xl text-white mb-8 text-shadow">
            Cung cấp dịch vụ đưa đón chất lượng cao, an toàn và tiện lợi cho mọi nhu cầu di chuyển của bạn tại Tiền Giang
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">Điểm đón</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input 
                      type="text" 
                      id="pickup"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" 
                      placeholder="Nhập điểm đón"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700 mb-1">Điểm đến</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input 
                      type="text" 
                      id="dropoff"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" 
                      placeholder="Nhập điểm đến"
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Ngày đón</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input 
                      type="date" 
                      id="date"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" 
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Giờ đón</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input 
                      type="time" 
                      id="time"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" 
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-darkBlue text-white py-3 rounded-md transition duration-200">
                <Search className="mr-2 h-5 w-5" />
                Tìm Xe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
