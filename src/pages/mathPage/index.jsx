import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { ROUTER } from "../../constants/router";
import { Route, Routes, useNavigate } from "react-router";
import { Calculator } from "../calculator";

export const Math = () => {
  const navigate = useNavigate();

  //   console.log(calculator(pathname));
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <div className="bg-secondary">
          <ul className="d-flex p-2 align-items-center gap-5">
            <li
              onClick={() => navigate(ROUTER.plus)}
              className="text-light fs-5 fw-medium about-li"
            >
              /Plus
            </li>
            <li
              onClick={() => navigate(ROUTER.minus)}
              className="text-light fs-5 fw-medium about-li"
            >
              /Minus
            </li>
            <li
              onClick={() => navigate(ROUTER.multiply)}
              className="text-light fs-5 fw-medium about-li"
            >
              /Multiply
            </li>
            <li
              onClick={() => navigate(ROUTER.divide)}
              className="text-light fs-5 fw-medium about-li"
            >
              /Divide
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-danger fs-1 ">Math</h1>
          <p className="text-warning fs-5 fw-bold">
            Select your operation and type the numbers you want to calculate
            separated by "/", for example math/plus/5/8 - then click enter and
            see the result{" "}
          </p>

          <Routes>
            <Route path=":operator/:num1/:num2" element={<Calculator />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};
