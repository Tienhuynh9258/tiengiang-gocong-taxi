import React from 'react';

const ZALO_LINK = 'https://zalo.me/0972445983';
const PHONE_NUMBER = '0972445983';

export const FloatingContact: React.FC = () => (
  <div className="floating-contact">
    <a
      className="contact-btn zalo"
      href={ZALO_LINK}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat Zalo"
    >
      <span className="pulse-circle zalo"></span>
      <span className="pulse-circle2 zalo"></span>
      <img
        src="/images/zalo.png"
        alt="Zalo"
      />
    </a>
    <a
      className="contact-btn phone"
      href={`tel:${PHONE_NUMBER}`}
      title="Gọi điện"
    >
      <span className="pulse-circle phone"></span>
      <span className="pulse-circle2 phone"></span>
      <img
        src="/images/phone.png"
        alt="Phone"
      />
    </a>
    <style>{`
      .floating-contact {
        position: fixed;
        left: 20px;
        bottom: 40px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        z-index: 9999;
      }
      .contact-btn {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        background: #fff;
        position: relative;
        overflow: visible;
        transition: transform 0.2s;
      }
      .contact-btn img {
        width: 36px;
        height: 36px;
        z-index: 2;
        transition: transform 0.2s;
        animation: shakeTilt 0.8s infinite;
      }
      .contact-btn.zalo {
        background: #2196f3;
      }
      .contact-btn.phone {
        background: #f44336;
      }
      .contact-btn:hover {
        transform: scale(1.1);
      }
      @keyframes shakeTilt {
        0% { transform: rotate(0deg); }
        20% { transform: rotate(-20deg); }
        50% { transform: rotate(20deg); }
        80% { transform: rotate(-20deg); }
        100% { transform: rotate(0deg); }
      }
      .pulse-circle {
        position: absolute;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        z-index: 0;
        animation: pulse 1.5s infinite;
        opacity: 0.5;
      }
      .pulse-circle2 {
        position: absolute;
        width: 80px;
        height: 80px;
        left: -10px;
        top: -10px;
        border-radius: 50%;
        z-index: 0;
        animation: pulse2 1.5s infinite;
        opacity: 0.3;
      }
      .pulse-circle.zalo, .pulse-circle2.zalo {
        background: #2196f3;
      }
      .pulse-circle.phone, .pulse-circle2.phone {
        background: #f44336;
      }
      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.5; }
        70% { transform: scale(1.3); opacity: 0.1; }
        100% { transform: scale(1); opacity: 0.5; }
      }
      @keyframes pulse2 {
        0% { transform: scale(1); opacity: 0.3; }
        70% { transform: scale(1.5); opacity: 0.05; }
        100% { transform: scale(1); opacity: 0.3; }
      }
    `}</style>
  </div>
);

export default FloatingContact; 