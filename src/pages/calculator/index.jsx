import React from "react";
import { useLocation } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

export const Calculator = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  function calculator(string) {
    let splitedString = string.split("/");

    if (splitedString[2] === "plus") {
      if (isNaN(+splitedString[3]) || isNaN(+splitedString[4])) {
        return "Please enter a number";
      }

      return `${+splitedString[3]}+ ${+splitedString[4]}=${
        +splitedString[3] + +splitedString[4]
      }`;
    } else if (splitedString[2] === "minus") {
      if (isNaN(+splitedString[3]) || isNaN(+splitedString[4])) {
        return "Please enter a number";
      }
      return `${+splitedString[3]} - ${+splitedString[4]} = ${
        +splitedString[3] - +splitedString[4]
      }`;
    } else if (splitedString[2] === "multiply") {
      if (isNaN(+splitedString[3]) || isNaN(+splitedString[4])) {
        return "Please enter a number";
      }
      return `${+splitedString[3]} * ${+splitedString[4]} = ${
        +splitedString[3] * +splitedString[4]
      }`;
    } else if (splitedString[2] === "divide") {
      if (isNaN(+splitedString[3]) || isNaN(+splitedString[4])) {
        return "Please enter a number";
      }
      return `${+splitedString[3]} / ${+splitedString[4]} = ${(
        +splitedString[3] / +splitedString[4]
      ).toFixed(2)}`;
    }
    return "Wrong id";
  }

  <p>{calculator(pathname)}</p>;
  return (
    <div>
      <p className="text-center text-info fs-1 fw-medium">Calculator</p>
      <p className="text-center text-info fs-2 fw-medium">Result</p>
      <p className="text-center text-secondary fs-1 fw-medium">
        {calculator(pathname)}{" "}
      </p>
    </div>
  );
};
