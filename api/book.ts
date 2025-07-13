import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

// Use ES module export syntax
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Add CORS headers for production
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const bookingDetails = req.body;

  if (!bookingDetails) {
    return res.status(400).json({ message: 'Missing booking details' });
  }

  // Validate required fields
  const requiredFields = ['name', 'phone', 'pickupLocation', 'destination', 'serviceType', 'carOption', 'pickupDateTime'];
  for (const field of requiredFields) {
    if (!bookingDetails[field]) {
      return res.status(400).json({ message: `Missing required field: ${field}` });
    }
  }

  // Check if RESEND_API_KEY is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ message: 'Email service not configured' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'ĐẶT XE MỚI <info@taxigocong.com>',
      to: ['taxigocongtiengiang@gmail.com'],
      subject: `[THÔNG TIN: ${bookingDetails.name} - ${bookingDetails.phone}]`,
      html: `
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td align="center" style="background-color: #ffc107; padding: 20px;">
                      <h1 style="color: #1a237e; margin: 0; font-size: 24px; font-weight: bold;">TAXI TIENGIANG-GOCONG</h1>
                    </td>
                  </tr>
                  <!-- Body -->
                  <tr>
                    <td style="padding: 30px 25px;">
                      <h2 style="color: #1a237e; text-align: center; margin-top: 0; margin-bottom: 20px;">Yêu Cầu Đặt Xe Mới</h2>
                      <p style="color: #333; font-size: 16px; line-height: 1.6;">
                        Xin chào, bạn đã nhận được một yêu cầu đặt xe mới với các thông tin chi tiết như sau:
                      </p>
                      
                      <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;">
                      
                      <h3 style="color: #1a237e; border-bottom: 2px solid #ffc107; padding-bottom: 5px; margin-bottom: 15px;">
                        Thông tin khách hàng
                      </h3>
                      <p style="font-size: 16px; color: #333; margin: 10px 0;">👤 <strong>Họ và tên:</strong> ${bookingDetails.name}</p>
                      <p style="font-size: 16px; color: #333; margin: 10px 0;">📞 <strong>Số điện thoại:</strong> ${bookingDetails.phone}</p>
                      
                      <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;">
                      
                      <h3 style="color: #1a237e; border-bottom: 2px solid #ffc107; padding-bottom: 5px; margin-bottom: 20px;">
                        Chi tiết hành trình
                      </h3>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td width="50%" valign="top" style="padding-right: 10px;">
                            <p style="font-size: 16px; color: #333; margin-top: 0; margin-bottom: 15px;">📍 <strong>Điểm đón:</strong><br>${bookingDetails.pickupLocation}</p>
                            <p style="font-size: 16px; color: #333; margin-top: 0; margin-bottom: 15px;">🚕 <strong>Loại dịch vụ:</strong><br>${bookingDetails.serviceType}</p>
                          </td>
                          <td width="50%" valign="top" style="padding-left: 10px;">
                            <p style="font-size: 16px; color: #333; margin-top: 0; margin-bottom: 15px;">🏁 <strong>Điểm đến:</strong><br>${bookingDetails.destination}</p>
                            <p style="font-size: 16px; color: #333; margin-top: 0; margin-bottom: 15px;">🚗 <strong>Tùy chọn xe:</strong><br>${bookingDetails.carOption}</p>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" style="padding-top: 10px;">
                             <p style="font-size: 16px; color: #333; margin-top: 0; margin-bottom: 10px;">📅 <strong>Ngày giờ đón:</strong> ${bookingDetails.pickupDateTime}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td align="center" style="background-color: #f8f9fa; padding: 20px; border-top: 1px solid #dee2e6;">
                      <p style="color: #6c757d; margin: 0; font-size: 14px;">Email này được gửi tự động từ hệ thống đặt xe.</p>
                      <p style="color: #6c757d; margin: 5px 0 0; font-size: 14px;">Hotline hỗ trợ: <a href="tel:0987654321" style="color: #1a237e; text-decoration: none;">0987 654 321</a></p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ message: 'Error sending email', error: error.message });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ message: 'Booking successful!', data });
  } catch (exception: any) {
    console.error('Unexpected error:', exception);
    return res.status(500).json({ 
      message: 'An unexpected error occurred.', 
      error: exception.message || 'Unknown error'
    });
  }
} 