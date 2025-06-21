import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Phone, User, Car, Calendar, FileText, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast, { Toaster } from 'react-hot-toast';
import { bookingFieldStyles } from "@/constants/bookingFieldStyles";

const BookingFormSection = () => {
  const [bookingType, setBookingType] = useState('taxi');
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupAddressDetail, setPickupAddressDetail] = useState('');
  const [pickupLocationError, setPickupLocationError] = useState('');
  const [pickupAddressDetailError, setPickupAddressDetailError] = useState('');
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [pickupDateError, setPickupDateError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneValid, setPhoneValid] = useState<boolean | null>(null);
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setBookingType('taxi');
    setPickupLocation('');
    setPickupAddressDetail('');
    setPickupLocationError('');
    setPickupAddressDetailError('');
    setPickupDate(null);
    setPickupDateError('');
    setPhone('');
    setPhoneValid(null);
    setPhoneError('');
    // Nếu có các trường khác, reset tại đây
  };

  const validatePhone = (value: string) => {
    // Vietnamese phone: 10 digits, starts with 0
    const regex = /^0\d{9}$/;
    return regex.test(value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    if (value === '') {
      setPhoneValid(null);
      setPhoneError('');
    } else if (validatePhone(value)) {
      setPhoneValid(true);
      setPhoneError('');
    } else {
      setPhoneValid(false);
      setPhoneError('Số điện thoại không hợp lệ, đúng 10 chữ số');
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    if (!pickupLocation) {
      setPickupLocationError('Vui lòng chọn điểm đón');
      valid = false;
    } else {
      setPickupLocationError('');
    }
    if (!pickupAddressDetail) {
      setPickupAddressDetailError('Vui lòng nhập địa chỉ chi tiết');
      valid = false;
    } else {
      setPickupAddressDetailError('');
    }
    if (!pickupDate) {
      setPickupDateError('Vui lòng chọn ngày giờ đón');
      valid = false;
    } else {
      setPickupDateError('');
    }
    if (!phone || !validatePhone(phone)) {
      setPhoneError('Số điện thoại không hợp lệ');
      setPhoneValid(false);
      valid = false;
    } else {
      setPhoneError('');
      setPhoneValid(true);
    }
    if (!valid) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        <div style={{lineHeight: 1.35}}>
          <div style={{fontSize: '1.08em', fontWeight: 500}}>Đặt xe thành công!</div>
          <div style={{fontSize: '0.98em', fontWeight: 400}}>Chúng tôi sẽ liên hệ bạn sớm nhất.</div>
        </div>,
        {
          duration: 4000,
          position: 'top-right',
          style: {
            border: '2px solid #22c55e',
            borderRadius: '18px',
            background: 'linear-gradient(90deg, #f0fdf4 80%, #bbf7d0 100%)',
            color: '#166534',
            fontWeight: 500,
            fontSize: '1.08rem',
            boxShadow: '0 6px 32px 0 rgba(34,197,94,0.18)',
            padding: '18px 22px 18px 18px',
            minWidth: '260px',
            maxWidth: '95vw',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            animation: 'slideInRight 0.5s',
          },
          icon: (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#22c55e"/>
              <path d="M8 12.5L11 15.5L16 9.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
        }
      );
      resetForm();
    }, 1500);
    // In a real app, this would send the booking request
    console.log('Booking form submitted');
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              border: '2px solid #22c55e',
              borderRadius: '18px',
              background: 'linear-gradient(90deg, #f0fdf4 80%, #bbf7d0 100%)',
              color: '#166534',
              fontWeight: 500,
              fontSize: '1.08rem',
              boxShadow: '0 6px 32px 0 rgba(34,197,94,0.18)',
              padding: '18px 22px 18px 18px',
              minWidth: '260px',
              maxWidth: '95vw',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              animation: 'slideInRight 0.5s',
            },
          },
          error: {
            style: {
              border: '2px solid #b91c1c',
              borderRadius: '18px',
              background: 'linear-gradient(90deg, #fef2f2 80%, #fecaca 100%)',
              color: '#b91c1c',
              fontWeight: 500,
              fontSize: '1.08rem',
              boxShadow: '0 6px 32px 0 rgba(185,28,28,0.18)',
              padding: '18px 22px 18px 18px',
              minWidth: '260px',
              maxWidth: '95vw',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              animation: 'slideInRight 0.5s',
            },
          },
        }}
        containerStyle={{ zIndex: 9999 }}
      />
      <div id="booking-form" className="w-full lg:w-3/4 mx-auto py-8 px-2 sm:px-4">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-300">
          <h3 className="text-2xl font-bold mb-6 text-center text-brand-blue">ĐẶT XE NGAY TẠI ĐÂY</h3>
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center mb-2">
                  {React.createElement(bookingFieldStyles.pickupLocation.icon, {
                    className: "h-5 w-5 mr-2",
                    style: { color: bookingFieldStyles.pickupLocation.color },
                  })}
                  <label className="block text-gray-700">Điểm đón</label>
                </div>
                <Select value={pickupLocation} onValueChange={setPickupLocation} required>
                  <SelectTrigger
                    className={`border-[1px] focus:border-blue-400 focus:ring-2 focus:ring-blue-200`}
                    style={{ borderColor: bookingFieldStyles.pickupLocation.color }}
                  >
                    <SelectValue placeholder="Chọn điểm đón" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cho-gao">Chợ Gạo</SelectItem>
                    <SelectItem value="go-cong">Gò Công</SelectItem>
                  </SelectContent>
                </Select>
                {pickupLocationError && (
                  <div className="flex items-center text-red-500 text-sm mt-1"><AlertCircle className="w-4 h-4 mr-1" />{pickupLocationError}</div>
                )}
                {pickupLocation && (
                  <div className="mt-3">
                    <Input
                      placeholder="Nhập số nhà, tên đường..."
                      className="border-[1px] focus:border-blue-500 focus:shadow-none outline-none ring-0 focus:outline-none focus:ring-0 placeholder:text-base placeholder:text-gray-400"
                      style={{ borderColor: bookingFieldStyles.pickupLocation.color }}
                      value={pickupAddressDetail}
                      onChange={e => setPickupAddressDetail(e.target.value)}
                      required
                    />
                    {pickupAddressDetailError && (
                      <div className="flex items-center text-red-500 text-sm mt-1"><AlertCircle className="w-4 h-4 mr-1" />{pickupAddressDetailError}</div>
                    )}
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center mb-2">
                  {React.createElement(bookingFieldStyles.destination.icon, {
                    className: "h-5 w-5 mr-2",
                    style: { color: bookingFieldStyles.destination.color },
                  })}
                  <label className="block text-gray-700">Điểm đến</label>
                </div>
                <Input
                  placeholder="Nhập địa điểm đến"
                  className="border-[1px] focus:border-orange-500 focus:shadow-none outline-none ring-0 focus:outline-none focus:ring-0 placeholder:text-base placeholder:text-gray-400"
                  style={{ borderColor: bookingFieldStyles.destination.color }}
                  required
                />
              </div>
            </div>
            <div className="py-2">
              <label className="block text-gray-700 font-medium mb-2">Chọn loại dịch vụ</label>
              <RadioGroup
                defaultValue="taxi"
                className="flex gap-6"
                onValueChange={setBookingType}
              >
                <div className="flex items-center space-x-2">
                  {React.createElement(bookingFieldStyles.bookingType.taxi.icon, {
                    className: "h-5 w-5",
                    style: { color: bookingFieldStyles.bookingType.taxi.color },
                  })}
                  <RadioGroupItem value="taxi" id="taxi" />
                  <Label htmlFor="taxi">Taxi</Label>
                </div>
                <div className="flex items-center space-x-2">
                  {React.createElement(bookingFieldStyles.bookingType.dulich.icon, {
                    className: "h-5 w-5",
                    style: { color: bookingFieldStyles.bookingType.dulich.color },
                  })}
                  <RadioGroupItem value="dulich" id="dulich" />
                  <Label htmlFor="dulich">Du lịch</Label>
                </div>
                <div className="flex items-center space-x-2">
                  {React.createElement(bookingFieldStyles.bookingType.hopdong.icon, {
                    className: "h-5 w-5",
                    style: { color: bookingFieldStyles.bookingType.hopdong.color },
                  })}
                  <RadioGroupItem value="hopdong" id="hopdong" />
                  <Label htmlFor="hopdong">Hợp đồng</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center mb-2">
                  {React.createElement(bookingFieldStyles.fullName.icon, {
                    className: "h-5 w-5 mr-2",
                    style: { color: bookingFieldStyles.fullName.color },
                  })}
                  <label className="block text-gray-700">Họ và tên</label>
                </div>
                <Input
                  placeholder="Nhập họ và tên"
                  className="border-[1px] focus:border-red-500 focus:shadow-none outline-none ring-0 focus:outline-none focus:ring-0 placeholder:text-base placeholder:text-gray-400"
                  style={{ borderColor: bookingFieldStyles.fullName.color }}
                  required
                />
              </div>
              <div>
                <div className="flex items-center mb-2">
                  {React.createElement(bookingFieldStyles.phone.icon, {
                    className: "h-5 w-5 mr-2",
                    style: { color: bookingFieldStyles.phone.color },
                  })}
                  <label className="block text-gray-700">Số điện thoại</label>
                </div>
                <div className="relative">
                  <Input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className={`border-[1px] pr-10 focus:border-purple-500 focus:shadow-none outline-none ring-0 focus:outline-none focus:ring-0 placeholder:text-base placeholder:text-gray-400 ${phoneValid === false ? 'border-red-500' : phoneValid === true ? 'border-green-500' : ''}`}
                    style={{ borderColor: bookingFieldStyles.phone.color }}
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                  />
                  {phoneValid === true && (
                    <CheckCircle className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500 w-5 h-5" />
                  )}
                  {phoneValid === false && (
                    <XCircle className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 w-5 h-5" />
                  )}
                </div>
                {phoneError && (
                  <div className="flex items-center text-red-500 text-sm mt-1"><AlertCircle className="w-4 h-4 mr-1" />{phoneError}</div>
                )}
              </div>
              <div>
                <div className="flex items-center mb-2">
                  {React.createElement(bookingFieldStyles.carOption.icon, {
                    className: "h-5 w-5 mr-2",
                    style: { color: bookingFieldStyles.carOption.color },
                  })}
                  <label className="block text-gray-700">Tùy chọn xe</label>
                </div>
                <Select>
                  <SelectTrigger
                    className="border-[1px] focus:border-sky-400 focus:shadow-none outline-none ring-0 focus:outline-none focus:ring-0"
                    style={{ borderColor: bookingFieldStyles.carOption.color }}
                  >
                    <SelectValue placeholder="Tùy chọn xe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="xe4">Xe 4 Chỗ</SelectItem>
                    <SelectItem value="xe7">Xe 7 Chỗ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  {React.createElement(bookingFieldStyles.pickupDate.icon, {
                    className: "h-5 w-5 mr-2",
                    style: { color: bookingFieldStyles.pickupDate.color },
                  })}
                  <label className="block text-gray-700">Ngày giờ đón</label>
                </div>
                <DatePicker
                  selected={pickupDate}
                  onChange={(date: Date | null) => setPickupDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="dd-MM-yyyy HH:mm"
                  placeholderText="Chọn ngày giờ đón"
                  className={`border-[1px] rounded-md px-3 py-2 w-full focus:outline-none focus:ring-0 focus:shadow-none outline-none ring-0 placeholder:text-base placeholder:text-gray-400 border-teal-500`}
                  minDate={new Date()}
                  required
                />
                {pickupDateError && (
                  <div className="flex items-center text-red-500 text-sm mt-1"><AlertCircle className="w-4 h-4 mr-1" />{pickupDateError}</div>
                )}
              </div>
            </div>
            <div className="pt-4 flex justify-center">
              <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8 py-3 bg-brand-yellow hover:bg-yellow-500 text-brand-darkBlue font-bold rounded-full text-lg flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-brand-darkBlue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Đang gửi...
                  </>
                ) : (
                  'Đặt xe'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @media (max-width: 480px) {
          .react-hot-toast {
            min-width: 90vw !important;
            max-width: 98vw !important;
            padding: 12px 10px 12px 10px !important;
            font-size: 1rem !important;
            border-radius: 14px !important;
            gap: 8px !important;
          }
          .react-hot-toast svg {
            width: 22px !important;
            height: 22px !important;
          }
        }
        /* Custom placeholder cho DatePicker */
        .react-datepicker__input-container input::placeholder {
          font-size: 1rem;
          color: #9ca3af;
          font-family: inherit;
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default BookingFormSection; 