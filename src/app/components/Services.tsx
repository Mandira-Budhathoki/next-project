export default function ThreeImageRow() {
  const images = [
    { src: 't1.PNG', alt: 'Image 1', desc: 'From dents to major collision repairs' },
    { src: 't2.PNG', alt: 'Image 2', desc: 'From new tires to rotations and flat repairs' },
    { src: 't3.PNG', alt: 'Image 3', desc: 'Quiet down your ride or boost' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 40,
        flexWrap: 'wrap',
        marginTop: 40,
      }}
    >
      {images.map(({ src, alt, desc }, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 150,
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              width: 150,
              height: 150,
              objectFit: 'cover',
              border: 'none',
              boxShadow: 'none',
              padding: 0,
              margin: 0,
              background: 'none',
              borderRadius: 0,
              display: 'block',
            }}
          />
          <p style={{ marginTop: 10, fontSize: 16, color: '#444', textAlign: 'center' }}>
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
}
