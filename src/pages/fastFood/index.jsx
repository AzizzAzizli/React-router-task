import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import fastfood from "../../images/fast-food.jpg"
import dolma from "../../images/dolma.jpg"
import { useNavigate } from "react-router";
import { ROUTER } from "../../constants/router";
import  './fastfood.css'
export const FastFood = () => {
    let navigate=useNavigate()
  return (

    <div>
      <Header />
      <Nav />
      <main className=" container mt-5">
        <div className="d-flex gap-3 "> 
            <img className="rounded-3" style={{width:"250px", height:"150px"}} src={fastfood} alt="fast-food" />
            <p className="bg-secondary rounded-4 p-3 fs-3 fw-bolder ">I think you should  <span className="text-warning  span" onClick={()=>navigate(ROUTER.home)} >go home</span>  and eat your mom's delicious home cooking.</p>
            <img  className="rounded-3" style={{width:"250px", height:"150px"}}  src={dolma} alt="dolma" />
        </div>
      </main>
    </div>
  );
};
