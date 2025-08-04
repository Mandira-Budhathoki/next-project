const VehicleInfoSection = () => {
  const pageWrapper = {
    maxWidth: '1000px',          
    margin: '0 auto',            
    padding: '0 2rem',           
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'stretch',
    gap: '1.5rem',
    width: '100%',
  };

  const formStyle = {
    flex: 1.3,
    padding: '1rem 1.2rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    fontWeight: '600',
    fontSize: '13px',
    marginBottom: '4px',
    display: 'block',
  };

  const inputStyle = {
    padding: '6px 8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '13px',
    marginBottom: '0.8rem',
    width: '100%',
  };

  const rowStyle = {
    display: 'flex',
    gap: '0.8rem',
    marginBottom: '0.8rem',
  };

  const smallInputStyle = {
    flex: 1,
    padding: '6px 8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '13px',
  };

  const imageBoxStyle = {
    flex: 1,
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <section style={{ backgroundColor: '#f9f9f9', padding: '4rem 0' }}>
      <div style={pageWrapper}>
        <div style={containerStyle}>
          {/* Left: Form */}
          <div style={formStyle}>
            <div>
              <label style={labelStyle}>Name</label>
              <input style={inputStyle} type="text" />
            </div>

            <div>
              <label style={labelStyle}>Email & Phone</label>
              <div style={rowStyle}>
                <input style={smallInputStyle} type="email" placeholder="Email" />
                <input style={smallInputStyle} type="tel" placeholder="Phone" />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Facility Type</label>
              <input style={inputStyle} type="text" />
            </div>

            <div>
              <label style={labelStyle}>Vehicle Make, Model, Year</label>
              <div style={rowStyle}>
                <input style={smallInputStyle} type="text" placeholder="Make" />
                <input style={smallInputStyle} type="text" placeholder="Model" />
                <input style={smallInputStyle} type="number" placeholder="Year" />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Upload picture of the damage in your vehicle</label>
              <input type="file" />
            </div>
          </div>

          {/* Right: Image */}
          <div style={imageBoxStyle}>
            <img
              src="jeep.PNG"
              alt="Car Damage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleInfoSection;
