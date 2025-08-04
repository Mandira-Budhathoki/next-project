'use client';

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCar,
  FaCalendarAlt,
  FaUpload,
} from 'react-icons/fa';

const VehicleInfoSection = () => {
  return (
    <>
      <section className="section-wrapper">
        <div className="container">
          {/* Left: Form */}
          <div className="form">
            <div className="field">
              <label>
                <FaUser className="icon" />
                Name
              </label>
              <input type="text" placeholder="Name" />
            </div>

            <div className="field-row">
              <div className="field">
                <label>
                  <FaEnvelope className="icon" />
                  Email
                </label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="field">
                <label>
                  <FaPhone className="icon" />
                  Phone
                </label>
                <input type="tel" placeholder="Phone" />
              </div>
            </div>

            <div className="field">
              <label>
                <FaCar className="icon" />
                Facility Type
              </label>
              <input type="text" placeholder="Facility Type" />
            </div>

            <div className="field-row">
              <div className="field">
                <label>Make</label>
                <input type="text" placeholder="Make" />
              </div>
              <div className="field">
                <label>Model</label>
                <input type="text" placeholder="Model" />
              </div>
              <div className="field">
                <label>
                  <FaCalendarAlt className="icon" />
                  Year
                </label>
                <input type="number" placeholder="Year" />
              </div>
            </div>

            <div className="field">
              <label>
                <FaUpload className="icon" />
                Upload picture of the damage
              </label>
              <input type="file" />
            </div>

            <button className="quote-btn">Get a Quote</button>
          </div>

          {/* Right: Image */}
          <div className="image-box">
            <img src="/bike.PNG" alt="Car Damage" />
          </div>
        </div>
      </section>

      <style jsx>{`
        .section-wrapper {
          background-color: #f9f9f9;
          padding: 1.5rem 1rem; /* slightly less padding */
          display: flex;
          justify-content: center;
        }

        .container {
          max-width: 950px;
          width: 100%;
          display: flex;
          gap: 0.8rem; /* tighter gap */
          align-items: flex-start;
          flex-wrap: nowrap;
          justify-content: center;
        }

        .form {
          flex: 1 1 600px;
          display: flex;
          flex-direction: column;
          gap: 6px; /* smaller gap between fields */
          font-size: 11px; /* smaller font */
        }

        label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 600;
          margin-bottom: 2px; /* less space below label */
          color: #555;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          font-size: 11px; /* smaller label font */
        }

        .icon {
          color: #999;
          font-size: 12px; /* smaller icon */
          flex-shrink: 0;
        }

        input[type='text'],
        input[type='email'],
        input[type='tel'],
        input[type='number'],
        input[type='file'] {
          width: 100%;
          padding: 5px 7px; /* less padding */
          font-size: 11px; /* smaller input text */
          border: 1px solid #ccc;
          border-radius: 4px;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s ease;
        }

        input[type='text']:focus,
        input[type='email']:focus,
        input[type='tel']:focus,
        input[type='number']:focus,
        input[type='file']:focus {
          border-color: #ffcc00;
        }

        .field-row {
          display: flex;
          gap: 6px; /* tighter gap */
        }

        .field-row .field {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .field {
          display: flex;
          flex-direction: column;
        }

        .quote-btn {
          margin-top: 6px;
          align-self: flex-start;
          padding: 7px 14px;
          background-color: #ffcc00;
          color: #222;
          font-weight: 700;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .quote-btn:hover {
          background-color: #e6b800;
        }

        .image-box {
          flex: 0 0 280px;
          border-radius: 6px;
          overflow: hidden;
          max-height: 380px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Responsive for very small screens */
        @media (max-width: 700px) {
          .container {
            flex-wrap: wrap;
          }

          .form {
            flex: 1 1 100%;
          }

          .image-box {
            flex: 1 1 100%;
            max-height: 250px;
            margin-top: 1rem;
          }

          .field-row {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default VehicleInfoSection;
