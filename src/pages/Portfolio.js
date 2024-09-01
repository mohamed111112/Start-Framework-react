import { FaPlus } from "react-icons/fa";
import Line from "../components/Line";
import myGif1 from "../image/poert1.png";
import myGif2 from "../image/port2.png";
import myGif3 from "../image/port3.png";

function Portfolio() {
  return (
    <>
      <main className="portfolio" style={{ marginTop: "100px" }}>
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              paddingTop: "25px",
              color: "#555",
              fontSize: "2.25rem",
              fontWeight: "bold",
            }}
          >
            {"portfolio".toUpperCase()}
          </h1>
          <Line bg="#000" />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "10px",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "300px" }}>
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={myGif1}
                  alt="gif1"
                  style={{
                    width: "100%",
                    marginBottom: "15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
                <div className="overlay">
                  <FaPlus />
                </div>
              </div>
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={myGif1}
                  alt="gif1"
                  style={{
                    width: "100%",
                    marginBottom: "15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
                <div className="overlay">
                  <FaPlus />
                </div>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={myGif2}
                  alt="gif2"
                  style={{
                    width: "100%",
                    marginBottom: "15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
                <div className="overlay">
                  <FaPlus />
                </div>
              </div>
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={myGif2}
                  alt="gif2"
                  style={{
                    width: "100%",
                    marginBottom: "15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
                <div className="overlay">
                  <FaPlus />
                </div>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={myGif3}
                  alt="gif3"
                  style={{
                    width: "100%",
                    marginBottom: "15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
                <div className="overlay">
                  <FaPlus />
                </div>
              </div>
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={myGif3}
                  alt="gif3"
                  style={{
                    width: "100%",
                    marginBottom: "15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
                <div className="overlay">
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Portfolio;
