export default function ContactSection() {
  return (
    <div className="contact-container">
      {/* Left: Contact Form */}
      <div className="form-section">
        <input type="text" placeholder="Full Name" className="input" />
        <input type="email" placeholder="Email Address" className="input" />
        <input type="tel" placeholder="Phone Number" className="input" />
        <textarea placeholder="Message" rows={6} className="textarea" />
      </div>

      {/* Right: Map */}
      <div className="map-section">
        <iframe
          src="https://maps.google.com/maps?q=Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          title="Location Map"
        />
      </div>

      <style jsx>{`
        .contact-container {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          padding: 40px 20px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .form-section {
          flex: 1 1 300px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .map-section {
          flex: 1 1 300px;
          min-height: 400px;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #ccc;
        }

        .input,
        .textarea {
          padding: 12px;
          font-size: 1rem;
          border-radius: 6px;
          border: 1px solid #ccc;
          width: 100%;
        }

        @media (max-width: 768px) {
          .contact-container {
            flex-direction: column;
            padding: 20px;
          }

          .map-section {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
