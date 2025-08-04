export default function NineImageRow() {
  const images = [
    'acura.PNG',
    'hondo.PNG',
    'jeep.PNG',
    'kia.PNG',
    'lexus.PNG',
    'nissan.PNG',
    'ford.PNG',
    'swift.PNG',
    'chevrolet.jpeg',
  ];

  return (
    <div className="imageRowContainer">
      <div className="imageRow">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Brand ${index + 1}`}
            className="logoImage"
          />
        ))}
      </div>

      <style jsx>{`
        .imageRowContainer {
          width: 100%;
          overflow-x: auto;
          padding: 30px 0;
          background-color: #f8f8f8;
        }

        .imageRow {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: nowrap;
          padding: 0 20px;
          min-width: max-content;
        }

        .logoImage {
          height: 50px;
          width: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .imageRow {
            gap: 20px;
          }

          .logoImage {
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .imageRow {
            gap: 10px;
          }

          .logoImage {
            height: 35px;
          }
        }
      `}</style>
    </div>
  );
}
