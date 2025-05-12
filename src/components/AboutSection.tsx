
import React from 'react';
import { Button } from "@/components/ui/button";
import { PhoneCall } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://taxiquangnam.io.vn/wp-content/uploads/2023/08/about.jpg" 
              alt="Taxi Tiền Giang" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">GIỚI THIỆU VỀ TAXI TIỀN GIANG</h2>
              <div className="h-1 w-20 bg-brand-yellow mb-6"></div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Taxi Tiền Giang được thành lập vào năm 2010, là đơn vị hàng đầu trong lĩnh vực vận tải hành khách bằng taxi tại tỉnh Tiền Giang. Với đội xe hiện đại, đa dạng từ 4 đến 16 chỗ, chúng tôi tự hào mang đến cho khách hàng dịch vụ vận chuyển chất lượng cao, đáp ứng mọi nhu cầu di chuyển.
            </p>
            
            <p className="text-gray-600 mb-6">
              Với phương châm "An toàn - Tận tâm - Chuyên nghiệp", Taxi Tiền Giang không ngừng nâng cao chất lượng dịch vụ, đảm bảo mỗi hành trình của khách hàng đều thoải mái và an toàn nhất.
            </p>
            
            <p className="text-gray-600 mb-8">
              Hiện tại, chúng tôi cung cấp các dịch vụ taxi sân bay, taxi nội thành, taxi đường dài, taxi hợp đồng và nhiều dịch vụ khác. Với đội ngũ tài xế chuyên nghiệp, am hiểu địa phương, chúng tôi cam kết mang đến trải nghiệm di chuyển tốt nhất cho quý khách hàng.
            </p>
            
            <Button className="bg-brand-yellow hover:bg-yellow-500 text-brand-darkBlue font-semibold px-8 py-6 rounded shadow-lg">
              <PhoneCall className="mr-2 h-5 w-5" />
              Gọi Ngay: 0909 123 456
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
