import { useState } from "react";
import { testWork } from "./TestDetails/TestWork";
import { CustomLink } from "../CustomLink";
import { Link } from "react-router-dom";

export const Test = () => {
  return (
    <>
      <div className="ButtonDiv">
        <h1>Тест на тему: Енисейская губерния</h1>

        <Link to="/TestStart">
          <button>Начать тест</button>
        </Link>
      </div>
    </>
  );
};
