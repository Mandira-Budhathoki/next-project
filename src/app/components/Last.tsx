export default function FooterBottomRow() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        padding: '20px',
        fontSize: '0.85rem',
        color: '#555',
        backgroundColor: '#f0f0f0', // light gray background
        borderTop: '1px solid #ccc',
      }}
    >
      <span>Designed by IStem Lab Pvt. Ltd.</span>
      <span>Legal Policy</span>
      <span>Privacy Policy</span>
    </div>
  );
}
