export default function Footer() {
  return (
    <>
      <footer className="footer">
        {/* Left side: Logo and social icons */}
        <div className="left-section">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="main-logo"
          />
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="facebook.PNG" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="instagram.PNG" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Right side: Three columns */}
        <div className="right-section">
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>Auto Repair</li>
              <li>Auto Detailing</li>
              <li>Auto Sales</li>
              <li>Selling Tires</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <p>(516) 636-5600</p>
            <p>26 Gran Ave Farmingdale NY11735</p>
            <p>carmartautoservice@gmail.com</p>
          </div>

          <div className="footer-column">
            <h3>Opening Hours</h3>
            <p>Mon-Sat &nbsp;&nbsp;&nbsp;8AM-6PM</p>
            <p>Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9AM-5PM</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px;
          display: flex;
          gap: 60px;
          background-color: #f5f5f5;
          color: #333;
          flex-wrap: wrap;
          justify-content: center;
        }

        .left-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          flex-shrink: 0;
          min-width: 120px;
        }

        .main-logo {
          width: 100px;
          height: auto;
          object-fit: contain;
        }

        .social-icons {
          display: flex;
          gap: 20px;
        }

        .social-icons img {
          width: 30px;
          height: 30px;
          cursor: pointer;
          filter: grayscale(0.3);
          transition: filter 0.3s ease;
        }

        .social-icons img:hover {
          filter: grayscale(0);
        }

        .right-section {
          flex: 1;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          min-width: 280px;
        }

        .footer-column {
          min-width: 140px;
          margin-bottom: 20px;
        }

        .footer-column h3 {
          font-size: 1.25rem;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .footer-column ul {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }

        .footer-column ul li {
          margin-bottom: 10px;
          font-size: 1rem;
        }

        .footer-column p {
          margin: 6px 0;
          font-size: 1rem;
          line-height: 1.4;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer {
            flex-direction: column;
            align-items: center;
            gap: 40px;
            text-align: center;
          }

          .left-section {
            flex-direction: row;
            justify-content: center;
            gap: 30px;
          }

          .right-section {
            flex-direction: column;
            gap: 30px;
            width: 100%;
            max-width: 500px;
          }

          .footer-column {
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  );
}
