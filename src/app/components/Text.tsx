export default function RectangleSection() {
  const images = [
    {
      src: 's1.PNG',
      alt: 'Image 1',
      desc: 'Trusted by Thousands',
    },
    {
      src: 's2.PNG',
      alt: 'Image 2',
      desc: 'Complete Auto Solutions',
    },
    {
      src: 's3.PNG',
      alt: 'Image 3',
      desc: 'Experienced Professionals',
    },
  ];

  return (
    <>
      <div className="container">
        
        <div className="text-side">
          <h1>Your Perfect Choice For Auto Repair Services</h1>
          <p>At car mart Auto service, we are more than just an auto shop.</p>
        </div>

        {/* Right half with vertically stacked images and descriptions */}
        <div className="images-side">
          {images.map(({ src, alt, desc }) => (
            <div key={alt} className="image-row">
              <img src={src} alt={alt} />
              <span>{desc}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          max-width: 900px;
          width: 100%;
          margin: 20px auto;
          gap: 30px;
          flex-wrap: wrap; /* allows stacking on small screens */
          align-items: flex-start;
        }

        .text-side {
          flex: 1 1 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
        }

        .text-side h1 {
          margin: 0;
          font-size: 2.2rem;
          line-height: 1.1;
          color: #222;
        }

        .text-side p {
          margin: 0;
          font-size: 1.1rem;
          color: #555;
        }

        .images-side {
          flex: 1 1 300px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .image-row {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .image-row img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .image-row span {
          font-size: 1rem;
          color: #444;
        }

        /* Responsive */
        @media (max-width: 700px) {
          .container {
            flex-direction: column;
            gap: 20px;
          }

          .text-side,
          .images-side {
            flex: 1 1 100%;
          }

          .text-side h1 {
            font-size: 1.8rem;
          }

          .images-side {
            gap: 15px;
          }

          .image-row {
            gap: 10px;
          }

          .image-row img {
            width: 70px;
            height: 70px;
          }

          .image-row span {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
}
