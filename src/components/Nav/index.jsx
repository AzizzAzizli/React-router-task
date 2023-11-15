import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router";
import "./nav.css";
import { ROUTER } from "../../constants/router";

export const Nav = () => {
  let navigator = useNavigate();
const {pathname}=useLocation()
// console.log("/"+pathname.split("/")[1]);

  return (
    <>
      <ul className="d-flex m-0 gap-5 bg-primary p-3 w-100">
        <button
          onClick={() => navigator(-1)}
          className="btn text-black carousel-control-prev-icon"
        ></button>
        <button
          onClick={() => navigator(1)}
          className="btn text-black carousel-control-next-icon"
        ></button>
        <li className={`text-${pathname===ROUTER.home? "warning":"light"}  li`} onClick={() => navigator(ROUTER.home)}>
          Home
        </li>
        <li className={`text-${pathname===ROUTER.cola?"warning":"light"}  li`} onClick={() => navigator(ROUTER.cola)}>
        Cola
        </li>
        <li className={`text-${pathname===ROUTER.chips?"warning":"light"}  li`} onClick={() => navigator(ROUTER.chips)}>
        Chips
        </li>
        <li className={`text-${pathname===ROUTER.fastFood?"warning":"light"}  li`} onClick={() => navigator(ROUTER.fastFood)}>
       Fast-Food
        </li>
        <li className={`text-${("/"+pathname.split("/")[1])===ROUTER.about?"warning":"light"}  li`} onClick={() => navigator(ROUTER.about)}>
      About
        </li>
        <li className={`text-${pathname===ROUTER.math?"warning":"light"}  li`} onClick={() => navigator(ROUTER.math)}>
    Math
        </li>
      </ul>
    </>
  );
};
