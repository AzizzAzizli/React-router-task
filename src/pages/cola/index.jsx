import React, { useState } from "react";
import { Nav } from "../../components/Nav";
import { Header } from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import colaimg from "../../images/colaimg.jpg";
export const Cola = () => {
  const [colas, setcolas] = useState([]);
  const [colacounter, setcolacounter] = useState(0);

  function countCola() {
    setcolacounter((prev) => prev + 1);
    setcolas((prev) => [...prev, "colaimg"]);
  }

  console.log(colas);
  return (
    <div>
      <Header />
      <Nav />

      <main
        style={{ height: "100vh" }}
        className="d-flex flex-column gap-5 justify-content-around align-items-center "
      >
        <div className="d-flex gap-3 flex-wrap">
          {colas.map((item, index) => (
            <img
              key={index + "cola"}
              style={{ width: "150px", height: "150px" }}
              src={colaimg}
              alt={item + index}
            />
          ))}
        </div>
        <div>
          <img
            style={{ width: "250px", height: "250px" }}
            src={colaimg}
            alt="colaimgL"
          />
          <button onClick={countCola} className="btn btn-danger">
            Real Magic
          </button>{" "}
          <span className="ms-3 fs-3 fw-bold">{colacounter}</span>
          <img
            style={{ width: "250px", height: "250px" }}
            src={colaimg}
            alt="colaimgR"
          />
        </div>
      </main>
    </div>
  );
};
