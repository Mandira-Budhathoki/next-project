export default function FooterInfo() {
  const footerTexts = [
    `About us: We provide the best services in the industry, .`,
    `Contact: You can reach us via email at contact@example.com rs.`,
    `Support: Our support team is available 24/7 to help you with any questions or concerns you may have.`,
  ];

  return (
    <footer
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '30px',
        padding: '40px',
        backgroundColor: '#f9f9f9',  // light grey background
        color: '#333',  
        maxWidth: '1000px',
        margin: '0 auto',
        fontSize: '0.9rem',
        lineHeight: '1.5',
      }}
    >
      
      <img
        src="red.png" 
        alt="Footer Logo"
        style={{ width: '50px', height: '50px', objectFit: 'contain', marginTop: '8px' }}
      />


      <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
        {footerTexts.map((text, idx) => (
          <p key={idx} style={{ maxWidth: '30%' }}>
            {text}
          </p>
        ))}
      </div>
    </footer>
  );
}
