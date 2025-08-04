export default function TriangleBlockWithText() {
  return (
    <>
      <div className="container">
        {/* Triangles container */}
        <div className="triangles">
          {/* Triangle Up */}
          <div className="triangle triangle-up">
            <img src="red.png" alt="triangle up" />
          </div>

          {/* Triangle Down */}
          <div className="triangle triangle-down">
            <img src="kia.png" alt="triangle down" />
          </div>
        </div>

        {/* Text next to triangles */}
        <div className="text-block">
          <p>Auto Repair. Made Simple</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          padding: 60px 20px;
          flex-wrap: wrap;
        }

        .triangles {
          display: flex;
          line-height: 0;
          gap: 8px;
          flex-shrink: 0;
        }

        .triangle {
          width: 250px;
          height: 300px;
          overflow: hidden;
        }

        .triangle-up {
          clip-path: polygon(50% 0%, 0 100%, 100% 100%);
        }

        .triangle-down {
          clip-path: polygon(50% 100%, 0 0, 100% 0);
        }

        .triangle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .text-block {
          max-width: 300px;
          color: #444;
          font-size: 1rem;
          display: flex;
          align-items: center;
        }

        /* Responsive */

        @media (max-width: 768px) {
          .triangle {
            width: 180px;
            height: 220px;
          }
          .text-block {
            max-width: 220px;
            font-size: 0.9rem;
            margin-top: 20px;
          }
        }

        @media (max-width: 480px) {
          .container {
            flex-direction: column;
            gap: 20px;
            padding: 40px 10px;
          }
          .triangles {
            gap: 16px;
            justify-content: center;
            width: 100%;
          }
          .triangle {
            width: 180px;
            height: 220px;
            margin: 0 auto;
          }
          .text-block {
            max-width: 100%;
            text-align: center;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}
