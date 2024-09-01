import Line from "../components/Line";

function Contact() {
  return (
    <>
      <main>
        <div
          className="container"
          style={{
            display: "flex",
            marginTop: "100px",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "0",
              width: "550px",
              margin: "0 auto",
              padding: "10px 0",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                paddingTop: "25px",
                color: "#555",
                fontSize: "2.25rem",
                fontWeight: "bold",
              }}
            >
              {"conatct section".toUpperCase()}
            </h1>
            <Line bg="#000" />
            <form style={{ width: "100%" }}>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  style={{
                    width: "80%",
                    padding: "0.5rem",
                    fontSize: "1rem",
                    border: "0",
                    borderBottom: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Age
                </label>
                <input
                  type="number"
                  placeholder="Age"
                  required
                  style={{
                    width: "80%",
                    padding: "0.5rem",
                    fontSize: "1rem",
                    border: "0",
                    borderBottom: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  style={{
                    width: "80%",
                    padding: "0.5rem",
                    fontSize: "1rem",
                    border: "0",
                    borderBottom: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  style={{
                    width: "80%",
                    padding: "0.5rem",
                    fontSize: "1rem",
                    border: "0",
                    borderBottom: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <button
                  type="submit"
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    backgroundColor: "#1abc9c",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
