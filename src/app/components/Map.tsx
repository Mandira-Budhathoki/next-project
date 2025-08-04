export default function ContactSection() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '40px',
        padding: '40px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      {/* Left form side */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          style={{
            padding: '12px',
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />

        <input
          type="email"
          placeholder="Email Address"
          style={{
            padding: '12px',
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          style={{
            padding: '12px',
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />

        <textarea
          placeholder="Message"
          rows={6}
          style={{
            padding: '12px',
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            resize: 'vertical',
          }}
        />
      </div>

      {/* Right map side */}
      <div
        style={{
          flex: 1,
          borderRadius: '10px',
          overflow: 'hidden',
          border: '1px solid #ccc',
          height: '100%', // will match height of form container
          minHeight: '360px',
        }}
      >
        {/* Replace below iframe src with your actual map URL */}
        <iframe
          src="https://maps.google.com/maps?q=Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          title="Location Map"
        />
      </div>
    </div>
  );
}
