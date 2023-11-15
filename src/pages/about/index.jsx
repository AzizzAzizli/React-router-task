import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { ROUTER } from "../../constants/router";
import { ColaInfo } from "../colainfo";
import { ChipsInfo } from "../chipsInfo";
import { FastFoodInfo } from "../fastfoodinfo";
import { ErrorPage } from "../404page";
export const About = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Header />
      <Nav />
      <div className="bg-secondary">
        <ul className="d-flex p-2 align-items-center gap-5">
          <li
            onClick={() => navigate(ROUTER.colaInfo)}
            className="text-light fs-5 fw-medium about-li"
          >
            Cola Info
          </li>
          <li
            onClick={() => navigate(ROUTER.chipsInfo)}
            className="text-light fs-5 fw-medium about-li"
          >
            Chips Info
          </li>
          <li
            onClick={() => navigate(ROUTER.fastFoodInfo)}
            className="text-light fs-5 fw-medium about-li"
          >
            Fast-Food Info
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to={ROUTER.colaInfo} replace />} />
        <Route path={ROUTER.chipsInfo} element={<ChipsInfo />} />
        <Route path={ROUTER.colaInfo} element={<ColaInfo />} />
        <Route path={ROUTER.fastFoodInfo} element={<FastFoodInfo />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
