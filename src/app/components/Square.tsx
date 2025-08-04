export default function DriveEnhanceSection() {
  const features = [
    'Engine & Mechanical',
    'Cooling & Heating Systems',
    'Transmission & Drivetrain',
    'Electrical & Battery',
    'Suspensions & Steering',
    'Brakes',
  ];

  return (
    <>
      <section className="container">
        <div className="content-row">
          
          <div className="image-wrapper">
            <img src="car.PNG" alt="Auto Repair Visual" />
          </div>

          {/* Text block on right */}
          <div className="text-block">
            <h2>
              We Enhance your Drive <br></br> with Confidence and Ease
            </h2>

            <p className="description">
              From warning lights to worn-out parts, we handle it all. Our auto repair
              services are designed to keep your vehicle safe, efficient, and road-ready—
              no matter the make, model, or issue. Whether it's a minor fix or a major
              repair, we bring experience, precision, and care to every job.
            </p>

            <ul className="feature-list">
              {features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
          color: #222;
        }

        .content-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .image-wrapper {
          flex-shrink: 0;
          width: 400px;
          max-width: 100%;
          height: auto;
          position: relative;
        }

        .image-wrapper img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          object-fit: cover;
          display: block;
        }

        .text-block {
          flex: 1;
          max-width: 450px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
        }

        h1 {
          font-size: 2.8rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
        }

        .description {
          font-size: 1.15rem;
          color: #555;
          line-height: 1.5;
          margin: 0;
        }

        .feature-list {
          list-style-type: disc;
          padding-left: 20px;
          margin: 0;
          color: #444;
          font-size: 1.1rem;
          line-height: 1.4;
        }

        /* Responsive */

        @media (max-width: 768px) {
          .image-wrapper {
            width: 300px;
          }
          h1 {
            font-size: 2.2rem;
          }
          .description {
            font-size: 1rem;
          }
          .feature-list {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .content-row {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 25px;
          }
          .image-wrapper {
            width: 90%;
          }
          .text-block {
            max-width: 100%;
            align-items: center;
          }
          .feature-list {
            padding-left: 0;
            list-style-position: inside;
          }
        }
      `}</style>
    </>
  );
}
