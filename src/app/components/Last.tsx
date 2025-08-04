export default function FooterLine() {
  return (
    <div className="footer">
      <p className="footer-text">
        <span>DESIGNED BY ISTEMLAB AI WEB STUDIOS</span>
        <span className="divider">|</span>
        <span>2025 CarMartAutoService, Inc. All Rights Reserved</span>
        <span className="divider">|</span>
        <span>Legal Policy</span>
        <span className="divider">|</span>
        <span>Privacy Policy</span>
      </p>

      <style jsx>{`
        .footer {
          width: 100%;
          background-color: #222;
          color: #ccc;
          padding: 20px 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-text {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          font-size: 14px;
          text-align: center;
        }

        .divider {
          color: #777;
        }

        @media (max-width: 600px) {
          .footer-text {
            gap: 10px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}
