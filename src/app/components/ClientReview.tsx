// components/ClientReviews.js

export default function ClientReviews() {
  const reviews = [
    {
      name: 'Mandira Budhathoki',
      review: 'Amazing service! Highly recommended.',
    },
    {
      name: 'Siomona Thapa',
      review: 'Professional and quick. Loved the experience.',
    },
    {
      name: 'Aastha Paudel',
      review: 'Very satisfied with the customer support.',
    },
    {
      name: 'Aabriti Pradhan',
      review: 'Reliable and friendly team. Great work!',
    },
  ];

  return (
    <div style={{ padding: '60px 0', backgroundColor: '#fff' }}>
      {/* Heading */}
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}>
        What our clients are Saying
      </h2>

      {/* Review boxes */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
        }}
      >
        {reviews.map((item, index) => (
          <div
            key={index}
            style={{
              width: '250px',
              height: '250px',
              border: '1px solid #ccc',
              borderRadius: '12px',
              padding: '20px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '1rem', color: '#444' }}>{item.review}</p>

            <div>
              <p style={{ fontWeight: 'bold', margin: '12px 0 8px' }}>{item.name}</p>

              {/* Star Rating */}
              <div style={{ color: '#FFD700', fontSize: '1.2rem' }}>
                {'★'.repeat(5)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
