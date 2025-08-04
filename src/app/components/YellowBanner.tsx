const AutoRepairsBanner = () => {
  const sectionStyle = {
    backgroundColor: '#FEF3C7', // light yellow (#FEF3C7 is Tailwind's yellow-100)
    padding: '4rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const boxStyle = {
    backgroundColor: 'white',
    border: '1px solid #D1D5DB', // gray-300
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '1.5rem 2.5rem',
    textAlign: 'center',
    maxWidth: '36rem',
    width: '100%',
  };

  const headingStyle = {
    fontSize: '1.875rem', // ~text-3xl
    fontWeight: '700',
    color: '#1F2937', // gray-800
    marginBottom: '0.5rem',
  };

  const paragraphStyle = {
    color: '#4B5563', // gray-600
    fontSize: '1.125rem', // ~text-lg
  };

  return (
    <section style={sectionStyle}>
      <div style={boxStyle}>
        <h2 style={headingStyle}>AUTO REPAIRS</h2>
        <p style={paragraphStyle}>Home / Auto Repairs</p>
      </div>
    </section>
  );
};

export default AutoRepairsBanner;
