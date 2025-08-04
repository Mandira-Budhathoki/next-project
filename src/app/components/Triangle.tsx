export default function TriangleBlockWithText() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',  // <-- center the whole row horizontally
        alignItems: 'center',
        gap: '30px',
        padding: '60px 0',
      }}
    >
      {/* Triangles container: two triangles side by side with no gap */}
      <div style={{ display: 'flex', lineHeight: 0 }}>
        {/* Triangle Up */}
        <div
          style={{
            width: '250px',
            height: '300px',
            overflow: 'hidden',
            clipPath: 'polygon(50% 0%, 0 100%, 100% 100%)',
            marginRight: '8px',
          }}
        >
          <img
            src="red.png"
            alt="triangle up"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Triangle Down */}
        <div
          style={{
            width: '250px',
            height: '300px',
            overflow: 'hidden',
            clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
          }}
        >
          <img
            src="kia.png"
            alt="triangle down"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Text next to triangles */}
      <div style={{ maxWidth: '300px' }}>
        <p style={{ fontSize: '1rem', color: '#444' }}>
          Auto Repair. Made Simple </p>
        
        
      </div>
    </div>
  );
}
