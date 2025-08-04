export default function ImageRowWithText() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      padding: '30px',
    }}>
      
      {/* Image container */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
      }}>
        {/* First image (slightly up using marginBottom) */}
        <img
          src="/image1.PNG"
          alt="Image 1"
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            marginBottom: '20px', // move it slightly up
          }}
        />

        {/* Second image (same size, not moved) */}
        <img
          src="kia.PNG"
          alt="Image 2"
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Text to the right of the images */}
      <div style={{ maxWidth: '650px' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        Whether it's an unexpected breakdown, a blinking warning light, or routine
         meaintenence, our skilled  techinicians are here to help.We offer  a full 
         range of auto repair services-fro engine diagonistics and suspension work 
         to brake repairs, oil changes, battery replacements and more. With transparent
          pricing, certified mechanics and a commitment to quality, we get uyou back in
           the road quickly and safely. No guesswork.No unnecessary upshell. 
        </p>
      </div>
    </div>
  );
}
