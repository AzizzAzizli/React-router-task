import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import "./home.css";
import vendingimg from "../../images/vending.jpg";
import { useNavigate } from "react-router";
import { ROUTER } from "../../constants/router";

export const Home = () => {
  let navigator = useNavigate();

  return (
    <div>
      <Header />
      <Nav />
      <main className=" container d-flex justify-content-center align-items-center">
        <div>
          <img
            style={{ height: "450px", width: "350px" }}
            src={vendingimg}
            alt="vending-machine"
          />
        </div>
        <div className="bg-secondary p-3 height-auto rounded-4 text-light fs-3 fw-medium ">
          <ul>
            <li onClick={() => navigator(ROUTER.cola)} className="li">
              Cola
            </li>
            <li onClick={() => navigator(ROUTER.chips)} className="li">
              Chips
            </li>
            <li onClick={() => navigator(ROUTER.fastFood)} className="li">
              Fast-food
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};
