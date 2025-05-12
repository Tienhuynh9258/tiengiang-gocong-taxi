
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070&auto=format&fit=crop" 
                alt="Taxi service 1" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1936&auto=format&fit=crop" 
                alt="Taxi service 2" 
                className="rounded-lg shadow-md h-64 w-full object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1567356889989-48d7380972d2?q=80&w=2070&auto=format&fit=crop" 
                alt="Taxi service 3" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=2064&auto=format&fit=crop" 
                alt="Taxi service 4" 
                className="rounded-lg shadow-md h-64 w-full object-cover mt-8"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Giới Thiệu Về Chúng Tôi</h2>
              <div className="h-1 w-20 bg-brand-blue mb-6"></div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Taxi Tiền Giang là đơn vị hàng đầu cung cấp dịch vụ vận chuyển hành khách tại tỉnh Tiền Giang. Với đội xe đa dạng từ 4 - 16 chỗ, chúng tôi phục vụ nhu cầu di chuyển của khách hàng trên các tuyến nội và ngoại tỉnh.
            </p>
            
            <p className="text-gray-600 mb-6">
              Với phương châm "An toàn - Tận tâm - Chuyên nghiệp", chúng tôi không ngừng nâng cao chất lượng dịch vụ, đảm bảo mỗi hành trình của khách hàng đều thoải mái và an toàn nhất.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-brand-blue">50+</div>
                <p className="text-gray-600">Xe hiện đại</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">60+</div>
                <p className="text-gray-600">Tài xế chuyên nghiệp</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">24/7</div>
                <p className="text-gray-600">Hỗ trợ khách hàng</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">1000+</div>
                <p className="text-gray-600">Khách hàng hài lòng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
