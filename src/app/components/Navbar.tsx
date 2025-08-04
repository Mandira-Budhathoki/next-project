export default function Header() {
  return (
    <>
      <header className="header">
        {/* Left: Nav items */}
        <nav className="nav-left">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Center: Small logo */}
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" />
        </div>

        {/* Right: Social Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.PNG" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
      </header>

      {/* Bottom centered text row */}
      <div className="bottom-bar">
        AUTO REPAIRS&nbsp;&nbsp;&nbsp; AUTO SALES&nbsp;&nbsp;&nbsp; AUTO DETAILING&nbsp;&nbsp;&nbsp;
        TIRE SERVICE&nbsp;&nbsp;&nbsp; BODY SHOP&nbsp;&nbsp;&nbsp; MUFFLERS AND REPLACEMENT
      </div>

      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 40px;
          background-color: #f8f8f8;
          border-bottom: 1px solid #ccc;
          font-family: sans-serif;
        }

        .nav-left {
          display: flex;
          gap: 25px;
          font-size: 16px;
          font-weight: 500;
        }
        .nav-left a {
          color: #333;
          text-decoration: none;
        }
        .nav-left a:hover {
          text-decoration: underline;
        }

        .logo-container img {
          height: 40px;
          object-fit: contain;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }
        .social-icons img {
          height: 20px;
          width: 20px;
          object-fit: contain;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        .social-icons img:hover {
          opacity: 0.7;
        }

        .bottom-bar {
          text-align: center;
          padding: 12px 20px;
          background-color: #f1f1f1;
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 1px;
          color: #222;
          text-transform: uppercase;
          white-space: nowrap;
          overflow-x: auto;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .header {
            flex-wrap: wrap;
            padding: 12px 20px;
            justify-content: center;
            gap: 15px;
          }

          .nav-left {
            order: 2;
            gap: 18px;
            font-size: 14px;
            justify-content: center;
            width: 100%;
          }

          .logo-container {
            order: 1;
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 8px;
          }

          .social-icons {
            order: 3;
            gap: 12px;
            width: 100%;
            justify-content: center;
          }

          .bottom-bar {
            font-size: 13px;
            padding: 10px 15px;
            white-space: normal;
          }
        }

        @media (max-width: 400px) {
          .nav-left {
            gap: 12px;
            font-size: 12px;
          }

          .social-icons img {
            height: 18px;
            width: 18px;
          }
        }
      `}</style>
    </>
  );
}
