import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock, User, Car, Calendar, PhoneCall, FileText } from 'lucide-react';
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
    <section id="contact" className="py-16 bg-gray-100">
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

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <Button className="bg-brand-yellow hover:bg-yellow-500 text-brand-darkBlue font-semibold px-8 py-6 rounded shadow-lg" asChild>
            <a href="tel:0387560769">
              <PhoneCall className="mr-2 h-5 w-5" />
              Gọi Ngay: 0387 560 769
            </a>
          </Button>
          <span className="mx-2 font-semibold text-gray-500">HOẶC</span>
          <Button className="bg-brand-blue hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded shadow-lg" asChild>
            <a href="#booking-form">
              <FileText className="mr-2 h-5 w-5" />
              Điền mẫu để đặt
            </a>
          </Button>
        </div>
        
        {/* Map section */}
        <div className="mt-12">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.324234363786!2d106.6666667!3d10.3666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a9c2e2e2e2e2e%3A0x7e7e7e7e7e7e7e7e!2zVFAgR8OyIENvbmcsIFRpw6puIEdpYW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s"
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
