# Website Taxi Gò Công - Tiền Giang

Đây là mã nguồn cho website của dịch vụ Taxi Gò Công - Tiền Giang. Trang web được xây dựng với mục tiêu cung cấp một giao diện hiện đại, chuyên nghiệp và thân thiện với người dùng để giới thiệu dịch vụ và cho phép khách hàng đặt xe trực tuyến một cách dễ dàng.

## ✨ Tính Năng Nổi Bật

- **Giao diện Hiện Đại**: Thiết kế sạch sẽ, chuyên nghiệp và hoàn toàn đáp ứng (responsive) trên mọi thiết bị từ máy tính để bàn đến điện thoại di động.
- **Đặt Xe Online**: Biểu mẫu đặt xe thông minh, cho phép khách hàng dễ dàng gửi yêu cầu đặt xe với các thông tin cần thiết.
- **Giới Thiệu Dịch Vụ**: Trình bày rõ ràng các gói dịch vụ chính: taxi nội thành, taxi đường dài, taxi du lịch và taxi hợp đồng.
- **Thông Tin Chi Tiết**: Cung cấp các thông tin hữu ích cho khách hàng như:
    - Lý do lựa chọn dịch vụ (cam kết về giá cả, tài xế, chất lượng xe).
    - Giới thiệu về đội xe (xe 4 chỗ, 7 chỗ).
    - Thông tin liên hệ rõ ràng (số điện thoại, Zalo).
- **Tối ưu Trải Nghiệm Người Dùng**: Tích hợp các nút liên hệ nhanh (gọi điện, Zalo) và nút quay lại đầu trang, giúp người dùng tương tác thuận tiện.

## 🚀 Công Nghệ Sử Dụng

Dự án được xây dựng với các công nghệ web hiện đại nhất để đảm bảo hiệu suất và khả năng bảo trì:

- **Framework**: [React](https://reactjs.org/) (thông qua [Vite](https://vitejs.dev/))
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/)
- **Giao diện người dùng (UI)**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Quản lý Biểu mẫu**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Routing**: [React Router](https://reactrouter.com/)

## 🛠️ Cài Đặt và Chạy Dự Án

Để chạy dự án này trên máy của bạn, hãy làm theo các bước sau:

1.  **Clone a repository**
    ```bash
    git clone https://github.com/your-username/tiengiang-gocong-taxi.git
    ```

2.  **Di chuyển vào thư mục dự án**
    ```bash
    cd tiengiang-gocong-taxi
    ```

3.  **Cài đặt các dependencies**
    *Lưu ý: Bạn cần cài đặt Vercel CLI nếu chưa có: `npm install -g vercel`*
    ```bash
    npm install
    ```

4. **Tạo file môi trường**
   Tạo một file có tên `.env` ở thư mục gốc của dự án và thêm các biến môi trường cần thiết. Ví dụ:
   ```env
   RESEND_API_KEY=your_api_key_here
   ```

5.  **Chạy development server với Vercel**
    ```bash
    vercel dev
    ```

    Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem trang web.

## 🤝 Đóng Góp

Nếu bạn có ý tưởng để cải thiện dự án, vui lòng tạo một Pull Request. Mọi sự đóng góp đều được chào đón!
