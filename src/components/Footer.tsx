import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { FOOTER_CONTACT, FOOTER_SOCIALS } from '@/lib/constants';

const SocialIcons = () => (
  <div className="flex space-x-4 justify-center md:justify-start">
    {FOOTER_SOCIALS.map((social, idx) => (
      <a
        key={social.label}
        href={social.href}
        aria-label={social.label}
        className="bg-brand-yellow text-brand-darkBlue p-2 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-colors"
        tabIndex={0}
      >
        {social.icon === 'facebook' && (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        )}
        {social.icon === 'instagram' && (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
        )}
        {social.icon === 'twitter' && (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
        )}
      </a>
    ))}
  </div>
);

const ContactInfo = () => (
  <ul className="space-y-4">
    <li className="flex">
      <MapPin className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" aria-hidden="true" />
      <span className="text-gray-300">{FOOTER_CONTACT.address}</span>
    </li>
    <li className="flex">
      <Phone className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" aria-hidden="true" />
      <div>
        {FOOTER_CONTACT.phones.map((phone, idx) => (
          <p className="text-gray-300" key={phone}>
            <a href={`tel:${phone.replace(/\s/g, '')}`} aria-label={`Gọi ${phone}`} className="hover:text-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-colors">{phone}</a>
          </p>
        ))}
      </div>
    </li>
    <li className="flex">
      <Mail className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" aria-hidden="true" />
      <div>
        {FOOTER_CONTACT.emails.map((email) => (
          <p className="text-gray-300" key={email}>
            <a href={`mailto:${email}`} aria-label={`Gửi email tới ${email}`} className="hover:text-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-colors">{email}</a>
          </p>
        ))}
      </div>
    </li>
  </ul>
);

const Footer = () => {
  return (
    <footer className="bg-brand-darkBlue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-center md:text-left">
              <div className="flex flex-col items-center mb-4 md:mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="Taxi Gò Công - Tiền Giang"
                  className="h-20 mb-2" 
                />
                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                  Dịch vụ taxi chất lượng cao, uy tín hàng đầu tại Tiền Giang, phục vụ 24/7, đảm bảo an toàn và tiện lợi cho mọi chuyến đi của bạn.
                </p>
              </div>
            </div>
            <SocialIcons />
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Dịch Vụ</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-brand-yellow"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-brand-yellow transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-brand-yellow" />
                  Taxi giá rẻ
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-brand-yellow transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-brand-yellow" />
                  Taxi nội thành
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-brand-yellow transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-brand-yellow" />
                  Taxi đường dài
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-brand-yellow transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-brand-yellow" />
                  Taxi theo hợp đồng
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Liên Kết Nhanh</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-brand-yellow"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-brand-yellow transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-brand-yellow" />
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-brand-yellow transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-brand-yellow" />
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-brand-yellow transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-brand-yellow" />
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="#cars" className="text-gray-300 hover:text-brand-yellow transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-brand-yellow" />
                  Xe
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-brand-yellow transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-brand-yellow" />
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Liên Hệ</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-brand-yellow"></span>
            </h3>
            <ContactInfo />
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Taxi Gò Công - Tiền Giang. Tất cả các quyền được bảo lưu.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
