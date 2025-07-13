  import React, { useRef, useEffect, useState } from 'react';
  import { Button } from "@/components/ui/button";

  const AboutSection = () => {
    const imgRef = useRef<HTMLImageElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      const img = imgRef.current;
      if (!img) return;
      let timeout: NodeJS.Timeout;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(false); // reset để animation có thể chạy lại
            timeout = setTimeout(() => setInView(true), 10); // delay nhỏ để trigger lại animation
          } else {
            setInView(false);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(img);
      return () => {
        observer.disconnect();
        clearTimeout(timeout);
      };
    }, []);

    return (
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center items-center">
              <img 
                ref={imgRef}
                src="/images/intro_car.png" 
                alt="Taxi Gò Công - Tiền Giang" 
                className={`w-full h-auto max-w-4xl mx-auto ${inView ? 'animate-fadeZoomIn' : ''}`}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">GIỚI THIỆU VỀ TAXI GÒ CÔNG - TIỀN GIANG</h2>
                <div className="h-1 w-20 bg-brand-yellow mb-6"></div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Taxi Gò Công - Tiền Giang được thành lập vào năm 2025, là đơn vị hàng đầu trong lĩnh vực vận tải hành khách bằng taxi tại tỉnh Tiền Giang. Với đội xe hiện đại, đa dạng từ 4 đến 7 chỗ, chúng tôi tự hào mang đến cho khách hàng dịch vụ vận chuyển chất lượng cao, đáp ứng mọi nhu cầu di chuyển.
              </p>
              
              <p className="text-gray-600 mb-6">
                Với phương châm "An toàn - Tận tâm - Chuyên nghiệp", Taxi Gò Công - Tiền Giang không ngừng nâng cao chất lượng dịch vụ, đảm bảo mỗi hành trình của khách hàng đều thoải mái và an toàn nhất.
              </p>
              
              <p className="text-gray-600 mb-8">
                Hiện tại, chúng tôi cung cấp các dịch vụ taxi giá rẻ, taxi nội thành, taxi đường dài, taxi hợp đồng và nhiều dịch vụ khác. Với đội ngũ tài xế chuyên nghiệp, am hiểu địa phương, chúng tôi cam kết mang đến trải nghiệm di chuyển tốt nhất cho quý khách hàng.
              </p>
              
            </div>
          </div>
        </div>
        <style>{`
        @keyframes fadeZoomIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeZoomIn {
          animation: fadeZoomIn 2.2s cubic-bezier(0.4,0,0.2,1);
        }
        `}</style>
      </section>
    );
  };

  export default AboutSection;
