
import React from 'react';
import { Button } from "@/components/ui/button";
import { Car, Users, Phone } from 'lucide-react';

interface CarCardProps {
  name: string;
  image: string;
  price: string;
  seats: number;
  features: string[];
  isPopular?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ 
  name, 
  image, 
  price, 
  seats, 
  features,
  isPopular = false
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <div className="flex items-center text-gray-600">
            <Users size={18} className="mr-1" />
            <span>{seats} chỗ</span>
          </div>
        </div>
        
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <div className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-gray-500">Giá từ</span>
              <p className="text-xl font-bold text-brand-blue">{price}</p>
            </div>
            <Button className="bg-brand-yellow hover:bg-yellow-500 text-brand-darkBlue">
              <Phone className="mr-2 h-4 w-4" />
              Đặt xe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
