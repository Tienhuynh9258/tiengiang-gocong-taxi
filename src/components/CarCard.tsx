import React, { useState } from 'react';
import { Users, Wifi, Droplet, Snowflake, UserCheck, Expand, CheckCircle, Plane, FileText, ImageOff, Car } from 'lucide-react';

interface CarCardProps {
  name: string;
  image: string;
  seats: number;
  features: string[];
  isPopular?: boolean;
}

const featureIcons: Record<string, JSX.Element> = {
  'Máy lạnh': <Snowflake size={16} className="mr-1" />, // Điều hòa
  'Wifi miễn phí': <Wifi size={16} className="mr-1" />, // Wifi
  'Nước uống': <Droplet size={16} className="mr-1" />, // Nước
  'Tài xế chuyên nghiệp': <UserCheck size={16} className="mr-1" />, // Tài xế
  'Rộng rãi': <Expand size={16} className="mr-1" /> // Rộng rãi
};

const serviceDetails = [
  { text: '15.000₫/1km đến km 21 giá giảm còn 13.000₫/1km', icon: <CheckCircle size={18} className="text-green-500 mr-2" /> },
  { text: 'Đi hợp đồng 10.000₫/1km', icon: <FileText size={18} className="text-blue-500 mr-2" /> },
  { text: 'Đưa đón trong Gò Công, Chợ Gạo, các tỉnh lân cận miền Nam, du lịch', icon: <Car size={30} className="text-yellow-500 mr-2" /> }
];

const CarCard: React.FC<CarCardProps> = ({ 
  name, 
  image, 
  seats, 
  features,
  isPopular = false
}) => {
  // Split features into two rows, max 2 per row
  const featureRows = [features.slice(0, 2), features.slice(2, 4)];
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-brand-yellow max-w-md mx-auto group font-sans border border-gray-100">
      {/* Car image with skeleton loading */}
      <div className="relative w-full h-60 flex-shrink-0 overflow-hidden flex items-center justify-center bg-white">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-gray-200">
            <ImageOff size={40} className="text-gray-300" />
          </div>
        )}
        <img 
          src={image} 
          alt={`Ảnh thực tế ${name}`} 
          className={`object-contain w-full h-full rounded-t-3xl transition-transform duration-500 group-hover:scale-105 bg-white ${imgLoaded ? '' : 'invisible'}`}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />
      </div>
      <div className="p-7 w-full flex flex-col items-center">
        {/* Car name and seat icon/number row - modern, balanced */}
        <div className="flex flex-row items-center justify-between w-full mb-6">
          <h3 className="text-2xl font-extrabold text-[#1a237e] tracking-tight" style={{lineHeight: '1.1'}}>{name}</h3>
          <div className="flex items-center text-brand-yellow text-lg font-semibold ml-4">
            <Users size={24} className="mr-1" />
            <span style={{fontSize: '1.15rem'}}>{seats} chỗ</span>
          </div>
        </div>
        {/* Features as chips, 2 rows */}
        <div className="flex flex-col gap-2 w-full items-center mb-6">
          {featureRows.map((row, i) => (
            <div key={i} className="flex gap-2 sm:gap-4 justify-center w-full flex-wrap">
              {row.map((feature, idx) => (
                <span
                  key={idx}
                  className="flex items-center bg-brand-yellow text-brand-darkBlue rounded-lg px-3 py-1 text-sm font-medium shadow-none min-w-0 justify-center transition-all duration-200
                    sm:rounded-full sm:px-5 sm:py-2 sm:text-base sm:font-semibold sm:shadow-sm sm:min-w-[120px] lg:min-w-[140px]"
                >
                  {React.cloneElement(featureIcons[feature], { size: 14, className: 'mr-1 sm:mr-2' })}
                  {feature}
                </span>
              ))}
            </div>
          ))}
        </div>
        {/* Divider */}
        <div className="w-full border-t border-gray-200 my-5"></div>
        {/* Service checklist */}
        <ul className="bg-gray-50 rounded-2xl px-6 py-5 text-gray-800 text-base w-full space-y-3 mb-2 mt-2 shadow-sm">
          {serviceDetails.map((detail, idx) => (
            <li key={idx} className="flex items-center">
              {detail.icon}
              <span>{detail.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarCard;
