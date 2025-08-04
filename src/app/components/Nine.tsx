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
    <div
      style={{
        width: '100%',
        overflowX: 'auto',
        padding: '30px 0',
        backgroundColor: '#f8f8f8',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '60px',
          flexWrap: 'nowrap',
          minWidth: 'fit-content',
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'cover',
              borderRadius: '6px',
              border: '1px solid #ccc',
            }}
          />
        ))}
      </div>
    </div>
  );
}
