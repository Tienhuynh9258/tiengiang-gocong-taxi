import { MapPin, Car, FileText, User, Phone, Calendar, Globe } from 'lucide-react';

export const bookingFieldStyles = {
  pickupLocation: {
    icon: MapPin,
    color: '#3B82F6', // Xanh dương
  },
  destination: {
    icon: MapPin,
    color: '#F59E42', // Cam
  },
  bookingType: {
    taxi: { icon: Car, color: '#22C55E' },      // Xanh lá
    dulich: { icon: Globe, color: '#0EA5E9' }, // Globe cho Du lịch
    hopdong: { icon: FileText, color: '#F59E42' }, // Cam
  },
  fullName: {
    icon: User,
    color: '#EF4444', // Đỏ
  },
  phone: {
    icon: Phone,
    color: '#A855F7', // Tím
  },
  carOption: {
    icon: Car,
    color: '#0EA5E9', // Xanh biển
  },
  pickupDate: {
    icon: Calendar,
    color: '#14B8A6', // Xanh teal
  },
}; 