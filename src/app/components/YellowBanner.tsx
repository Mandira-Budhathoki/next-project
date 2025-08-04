export default function AutoRepairSection() {
  return (
    <>
      <div className="container">
        {/* Left: Text */}
        <div className="text-box">
          <h1>Auto Repairs</h1>
          <p>Home / Auto Repair</p>
        </div>

        {/* Right: Image */}
        <div className="image-box">
          <img
            src="/side rectangle.PNG"
            alt="Auto Repair"
          />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #fffde7;
          padding: 20px 40px;
          height: 160px;
          border-radius: 8px;
        }

        .text-box {
          flex: 1;
          padding-right: 20px;
        }

        h1 {
          color: #fdd835;
          font-size: 26px;
          margin: 0;
        }

        p {
          font-size: 14px;
          color: #444;
          margin-top: 8px;
        }

        .image-box {
          flex: 1;
          height: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            height: auto;
            padding: 15px 20px;
          }

          .text-box {
            padding-right: 0;
            margin-bottom: 15px;
            text-align: center;
          }

          h1 {
            font-size: 22px;
          }

          p {
            font-size: 13px;
          }

          .image-box {
            height: 200px; /* fixed height for mobile */
          }
        }
      `}</style>
    </>
  );
}
