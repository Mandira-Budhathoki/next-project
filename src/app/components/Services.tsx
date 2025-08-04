export default function ThreeImageRow() {
  const images = [
    {
      src: 't1.PNG',
      alt: 'Image 1',
      desc: 'From dents to major collision repairs',
    },
    {
      src: 't2.PNG',
      alt: 'Image 2',
      desc: 'From new tires to rotations and flat repairs',
    },
    {
      src: 't3.PNG',
      alt: 'Image 3',
      desc: 'Quiet down your ride or boost',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '40px',
        flexWrap: 'wrap',
      }}
    >
      {images.map(({ src, alt, desc }, index) => (
        <div
          key={index}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            maxWidth: '150px',
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
          <p style={{ marginTop: '10px', textAlign: 'center', fontSize: '1rem', color: '#444' }}>
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
}