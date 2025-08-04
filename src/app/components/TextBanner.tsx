export default function FeatureRow() {
  const features = [
    'WASHING',
    'AUTO REPAIR',
    'INTERIOR DETAILING',
    'FINANCING SOLUTION',
  ];

  return (
    <div className="feature-container">
      {features.map((text, index) => (
        <div key={index} className="feature-item">
          <span>{text}</span>
          {index < features.length - 1 && (
            <span className="divider">✦</span>
          )}
        </div>
      ))}

      <style jsx>{`
        .feature-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
          padding: 30px 20px;
          background-color: #fff;
        }

        .feature-item {
          display: flex;
          align-items: center;
          font-family: 'Segoe UI', 'Lucida Handwriting', cursive, sans-serif;
          font-size: 18px;
          font-weight: bold;
          text-transform: uppercase;
          color: #e07b39; /* warm soft orange */
        }

        .divider {
          margin-left: 12px;
          margin-right: 12px;
          font-size: 20px;
          color: #e07b39;
        }

        @media (max-width: 600px) {
          .feature-container {
            gap: 16px;
          }

          .feature-item {
            font-size: 14px;
          }

          .divider {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
