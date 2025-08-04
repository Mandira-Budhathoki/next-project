export default function InfoSquareSection() {
  const listItems = [
    'Engine & Mechanical',
    'Cooling & Heating System',
    'Transmission & Drivetrain',
    'Electrical & Battery',
    'Brakes',
    'Maintainence',
  ];

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
      }}
    >
      <div
        style={{
          width: '700px',
          height: '300px',
          border: '2px solid #333',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
          boxSizing: 'border-box',
          gap: '20px',
        }}
      >
        {/* Text content on the left */}
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: '12px', fontSize: '1.8rem' }}>
            Auto Repair
          </h2>
          <ul style={{ paddingLeft: '18px', margin: 0 }}>
            {listItems.map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: '6px',
                  fontSize: '1rem',
                  color: '#555',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image on the right */}
        <img
          src="bicycle.PNG"
          alt="Main visual"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
      </div>
    </div>
  );
}
