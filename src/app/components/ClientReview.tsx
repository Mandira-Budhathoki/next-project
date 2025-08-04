export default function ClientReviews() {
  const reviews = [
    {
      name: 'Imran A. Khan',
      review:
        'Great sevice! The owner is very friendly and professional, as are the mechanics who work here.',
    },
    {
      name: 'Rizwan Asghar',
      review:
        'I had the best experience. The owner is very humble man I neede a brake replacement, a...',
    },
    {
      name: 'Vinny Iadevaia',
      review:
        'Only place in the area open on Sunday that was doing NYS inspections. Quick and easy, had..',
    },
    {
      name: 'Imran A.Khan',
      review:
        'Grea Service! The owner is friendly and professional, as are the mechanics who work here.',
    },
  ];

  return (
    <>
      <div className="client-reviews">
        <h2>What our clients are Saying</h2>
        <div className="reviews-container">
          {reviews.map((item, index) => (
            <div key={index} className="review-card">
              <div className="stars">{'★'.repeat(5)}</div>
              <p className="review-text">{item.review}</p>
              <p className="reviewer-name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .client-reviews {
          padding: 60px 20px;
          background-color: #fff;
          text-align: center;
          color: #222;
        }

        h2 {
          font-size: 2rem;
          margin-bottom: 40px;
        }

        .reviews-container {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .review-card {
          flex: 1 1 220px;
          max-width: 220px;
          min-height: 220px;
          background-color: #f9f9f9;
          border-radius: 12px;
          padding: 15px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
          color: #444;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
          transition: transform 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }

        .stars {
          color: #ffd700;
          font-size: 1rem;
          margin-bottom: 12px;
        }

        .review-text {
          font-size: 0.9rem;
          line-height: 1.4;
          flex-grow: 1;
        }

        .reviewer-name {
          font-weight: bold;
          margin-top: 16px;
          color: #222;
          font-size: 0.95rem;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .review-card {
            max-width: 180px;
            min-height: 200px;
            padding: 12px;
          }

          .stars {
            font-size: 0.9rem;
            margin-bottom: 10px;
          }

          .review-text {
            font-size: 0.85rem;
          }

          .reviewer-name {
            font-size: 0.9rem;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .reviews-container {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .review-card {
            max-width: 280px;
            min-height: auto;
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}
