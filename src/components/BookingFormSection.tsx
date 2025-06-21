import React, { useState, forwardRef } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Phone, User, Car, Calendar, FileText, Globe, AlertCircle, CheckCircle, XCircle, Loader2 } from 'lucide-react';
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
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [bookingType, setBookingType] = useState('taxi');
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupLocationError, setPickupLocationError] = useState('');
  const [pickupAddressDetail, setPickupAddressDetail] = useState('');
  const [pickupAddressDetailError, setPickupAddressDetailError] = useState('');
  const [destination, setDestination] = useState('');
  const [destinationError, setDestinationError] = useState('');
  const [carOption, setCarOption] = useState('');
  const [carOptionError, setCarOptionError] = useState('');
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [pickupDateError, setPickupDateError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [phoneValid, setPhoneValid] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setName('');
    setNameError('');
    setBookingType('taxi');
    setPickupLocation('');
    setPickupLocationError('');
    setPickupAddressDetail('');
    setPickupAddressDetailError('');
    setDestination('');
    setDestinationError('');
    setCarOption('');
    setCarOptionError('');
    setPickupDate(null);
    setPickupDateError('');
    setPhone('');
    setPhoneError('');
    setPhoneValid(null);
  };

  const validatePhone = (value: string) => {
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
      setPhoneError('Số điện thoại không hợp lệ (gồm 10 chữ số)');
    }
  };

  const validateForm = () => {
    let valid = true;
    if (!pickupLocation) {
      setPickupLocationError('Vui lòng chọn điểm đón');
      valid = false;
    } else {
      setPickupLocationError('');
      if (!pickupAddressDetail) {
        setPickupAddressDetailError('Vui lòng nhập số nhà, tên đường');
        valid = false;
      } else {
        setPickupAddressDetailError('');
      }
    }
    if (!destination) {
      setDestinationError('Vui lòng nhập điểm đến');
      valid = false;
    } else {
      setDestinationError('');
    }
    if (!name) {
      setNameError('Vui lòng nhập họ và tên');
      valid = false;
    } else {
      setNameError('');
    }
    if (!phone || !validatePhone(phone)) {
      setPhoneError('Số điện thoại không hợp lệ');
      setPhoneValid(false);
      valid = false;
    } else {
      setPhoneError('');
      setPhoneValid(true);
    }
    if (!carOption) {
      setCarOptionError('Vui lòng chọn loại xe');
      valid = false;
    } else {
      setCarOptionError('');
    }
    if (!pickupDate) {
      setPickupDateError('Vui lòng chọn ngày giờ đón');
      valid = false;
    } else {
      setPickupDateError('');
    }
    return valid;
  };

  const locationMap: { [key: string]: string } = {
    'cho-gao': 'Chợ Gạo',
    'go-cong': 'Gò Công',
  };

  const carOptionMap: { [key: string]: string } = {
    'xe-4-cho': 'Xe 4 chỗ',
    'xe-7-cho': 'Xe 7 chỗ',
  };

  const serviceTypeMap: { [key: string]: string } = {
      'taxi': 'Taxi',
      'du-lich': 'Du lịch',
      'hop-dong': 'Hợp đồng'
  };

  const formatDateTime = (date: Date | null): string => {
    if (!date) return '';
    const dateOptions: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const datePart = date.toLocaleDateString('vi-VN', dateOptions);
    const timePart = date.toLocaleTimeString('vi-VN', timeOptions);
    return `${datePart} ${timePart}`;
  }

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error(
        <div style={{lineHeight: 1.35}}>
          <div style={{fontSize: '1.08em', fontWeight: 500}}>Vui lòng kiểm tra lại thông tin</div>
          <div style={{fontSize: '0.98em', fontWeight: 400}}>Một vài trường bắt buộc chưa được điền.</div>
        </div>
      );
      return;
    }

    setIsSubmitting(true);

    const bookingDetails = {
      name,
      phone,
      pickupLocation: `${pickupAddressDetail}, ${locationMap[pickupLocation] || pickupLocation}`,
      destination,
      serviceType: serviceTypeMap[bookingType] || bookingType,
      carOption: carOptionMap[carOption] || carOption,
      pickupDateTime: formatDateTime(pickupDate),
    };

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Có lỗi xảy ra khi đặt xe.');
      }
      
      toast.success(
        <div style={{lineHeight: 1.35}}>
          <div style={{fontSize: '1.08em', fontWeight: 500}}>Đặt xe thành công!</div>
          <div style={{fontSize: '0.98em', fontWeight: 400}}>Chúng tôi sẽ liên hệ bạn sớm nhất.</div>
        </div>,
        {
          duration: 4000,
          position: 'top-right',
        }
      );
      resetForm();

    } catch (error: any) {
      toast.error(
        <div style={{lineHeight: 1.35}}>
          <div style={{fontSize: '1.08em', fontWeight: 500}}>Đặt xe thất bại</div>
          <div style={{fontSize: '0.98em', fontWeight: 400}}>{error.message}</div>
        </div>
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const CustomDateInput = forwardRef<HTMLButtonElement, { value?: string; onClick?: () => void }>(
    ({ value, onClick }, ref) => (
      <button
        type="button"
        onClick={onClick}
        ref={ref}
        className="w-full p-2 border-[1px] rounded-md focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-left font-normal placeholder:text-gray-400 flex items-center"
        style={{ borderColor: bookingFieldStyles.pickupDateTime.color }}
      >
        {value || <span className="text-gray-400">Chọn ngày giờ đón</span>}
      </button>
    )
  );
  CustomDateInput.displayName = "CustomDateInput";

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
                <Select value={pickupLocation} onValueChange={(value) => { setPickupLocation(value); setPickupLocationError(''); }} required>
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
                      onChange={e => { setPickupAddressDetail(e.target.value); setPickupAddressDetailError(''); }}
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
                  value={destination}
                  onChange={(e) => { setDestination(e.target.value); setDestinationError(''); }}
                  required
                />
                {destinationError && (
                  <div className="flex items-center text-red-500 text-sm mt-1"><AlertCircle className="w-4 h-4 mr-1" />{destinationError}</div>
                )}
              </div>
            </div>
            <div className="py-2">
              <label className="block text-gray-700 font-medium mb-2">Chọn loại dịch vụ</label>
              <RadioGroup
                defaultValue="taxi"
                className="flex items-center gap-6 flex-wrap"
                value={bookingType}
                onValueChange={setBookingType}
              >
                <div className="flex items-center space-x-2">
                  {React.createElement(bookingFieldStyles.bookingType.taxi.icon, {
                    className: "h-5 w-5 mr-2",
                    style: { color: bookingFieldStyles.bookingType.taxi.color },
                  })}
                  <RadioGroupItem value="taxi" id="taxi" />
                  <Label htmlFor="taxi">Taxi</Label>
                </div>
                <div className="flex items-center space-x-2">
                  {React.createElement(bookingFieldStyles.bookingType.dulich.icon, {
                    className: "h-5 w-5 mr-2",
                    style: { color: bookingFieldStyles.bookingType.dulich.color },
                  })}
                  <RadioGroupItem value="du-lich" id="du-lich" />
                  <Label htmlFor="du-lich">Du lịch</Label>
                </div>
                <div className="flex items-center space-x-2">
                  {React.createElement(bookingFieldStyles.bookingType.hopdong.icon, {
                    className: "h-5 w-5 mr-2",
                    style: { color: bookingFieldStyles.bookingType.hopdong.color },
                  })}
                  <RadioGroupItem value="hop-dong" id="hop-dong" />
                  <Label htmlFor="hop-dong">Hợp đồng</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center mb-2">
                  {React.createElement(bookingFieldStyles.name.icon, {
                    className: "h-5 w-5 mr-2",
                    style: { color: bookingFieldStyles.name.color },
                  })}
                  <label className="block text-gray-700">Họ và tên</label>
                </div>
                <Input
                  placeholder="Nhập họ và tên"
                  className="border-[1px] focus:border-red-500 focus:shadow-none outline-none ring-0 focus:outline-none focus:ring-0 placeholder:text-base placeholder:text-gray-400"
                  style={{ borderColor: bookingFieldStyles.name.color }}
                  value={name}
                  onChange={(e) => { setName(e.target.value); setNameError(''); }}
                  required
                />
                {nameError && (
                  <div className="flex items-center text-red-500 text-sm mt-1"><AlertCircle className="w-4 h-4 mr-1" />{nameError}</div>
                )}
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
                    placeholder="Nhập số điện thoại"
                    className={`border-[1px] focus:border-purple-500 focus:shadow-none outline-none ring-0 focus:outline-none focus:ring-0 placeholder:text-base placeholder:text-gray-400 ${phoneValid === false ? 'border-red-500' : phoneValid === true ? 'border-green-500' : ''}`}
                    style={{ borderColor: phoneValid === null ? bookingFieldStyles.phone.color : '' }}
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                  />
                  {phoneValid === true && (
                    <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 w-5 h-5" />
                  )}
                  {phoneValid === false && (
                    <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 w-5 h-5" />
                  )}
                </div>
                {phoneError && (
                  <div className="flex items-center text-red-500 text-sm mt-1"><AlertCircle className="w-4 h-4 mr-1" />{phoneError}</div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center mb-2">
                  {React.createElement(bookingFieldStyles.carOption.icon, {
                    className: "h-5 w-5 mr-2",
                    style: { color: bookingFieldStyles.carOption.color },
                  })}
                  <label className="block text-gray-700">Tùy chọn xe</label>
                </div>
                <Select value={carOption} onValueChange={(value) => { setCarOption(value); setCarOptionError(''); }} required>
                  <SelectTrigger
                    className={`border-[1px] focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200`}
                    style={{ borderColor: bookingFieldStyles.carOption.color }}
                  >
                    <SelectValue placeholder="Tùy chọn xe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="xe-4-cho">Xe 4 chỗ</SelectItem>
                    <SelectItem value="xe-7-cho">Xe 7 chỗ</SelectItem>
                  </SelectContent>
                </Select>
                {carOptionError && (
                  <div className="flex items-center text-red-500 text-sm mt-1"><AlertCircle className="w-4 h-4 mr-1" />{carOptionError}</div>
                )}
              </div>
              <div>
                <div className="flex items-center mb-2">
                  {React.createElement(bookingFieldStyles.pickupDateTime.icon, {
                    className: "h-5 w-5 mr-2",
                    style: { color: bookingFieldStyles.pickupDateTime.color },
                  })}
                  <label className="block text-gray-700">Ngày giờ đón</label>
                </div>
                <DatePicker
                  selected={pickupDate}
                  onChange={(date: Date | null) => { setPickupDate(date); setPickupDateError(''); }}
                  showTimeSelect
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy HH:mm"
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  customInput={<CustomDateInput />}
                  wrapperClassName="w-full"
                  required
                />
                {pickupDateError && (
                  <div className="flex items-center text-red-500 text-sm mt-1"><AlertCircle className="w-4 h-4 mr-1" />{pickupDateError}</div>
                )}
              </div>
            </div>
            <div className="text-center pt-4">
              <Button type="submit" size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-8 min-w-[150px]" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Đang xử lý...
                  </span>
                ) : 'Đặt xe'}
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