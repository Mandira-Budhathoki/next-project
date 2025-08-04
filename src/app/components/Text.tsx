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
      desc: 'Experinced Professionals',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        maxWidth: '900px',
        height: '320px',
        border: '2px solid #333',
        borderRadius: '8px',
        overflow: 'hidden',
        margin: '20px auto',
      }}
    >
      {/* Left half with text */}
      <div
        style={{
          flex: 1,
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxSizing: 'border-box',
          gap: '12px',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2.8rem' }}>Your Perfect Choice For Auto Repair Services</h1>
        <p style={{ margin: 0, fontSize: '1.1rem', color: '#555' }}>
          At car mart Auto service, we are more than just an auto shop.
        </p>
      </div>

      {/* Right half with vertically stacked images and descriptions */}
      <div
        style={{
          flex: 1,
          padding: '20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {images.map(({ src, alt, desc }) => (
          <div
            key={alt}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              width: '100%',
              maxWidth: '280px',
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '6px',
                border: '1px solid #ccc',
              }}
            />
            <span style={{ fontSize: '1rem', color: '#444' }}>{desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
