import Head from 'next/head';

export default function ImageRowWithText() {
  return (
    <>
      <div className="container">
        <div className="images">
          {/* First image: slightly higher */}
          <img src="/image1.PNG" alt="Image 1" className="image first" />
          {/* Second image: slightly lower */}
          <img src="/hello.PNG" alt="Image 2" className="image second" />
        </div>

        <div className="text-box">
          <p>
            Whether it's an unexpected breakdown, a blinking warning light, or routine
            maintenance, our skilled technicians are here to help. We offer a full 
            range of auto repair services — from engine diagnostics and suspension work 
            to brake repairs, oil changes, battery replacements and more. With transparent
            pricing, certified mechanics and a commitment to quality, we get you back on
            the road quickly and safely. No guesswork. No unnecessary upsell. 
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;  /* Vertically center content */
          gap: 20px;
          padding: 30px;
          justify-content: center;
          margin: 0 auto;
          max-width: 1000px;
        }

        .images {
          display: flex;
          flex-direction: row;
          gap: 10px;
        }

        .image {
          width: 260px;
          height: 260px;
          object-fit: cover;
          border-radius: 4px;
          display: block;
        }

        /* Stagger images vertically */
        .first {
          margin-bottom: 25px; /* slightly up */
        }
        .second {
          margin-top: 25px; /* slightly down */
        }

        .text-box {
          max-width: 650px;
        }

        p {
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            padding: 20px;
            max-width: 90%;
            align-items: center;
          }

          .images {
            justify-content: center;
          }

          .image {
            width: 200px;
            height: 200px;
          }

          /* Remove stagger on mobile for better layout */
          .first,
          .second {
            margin-top: 0;
            margin-bottom: 0;
          }

          .text-box {
            max-width: 100%;
            margin-top: 20px;
            text-align: center;
          }

          p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
