import { useEffect, useRef, useState } from "react";
import { Etnos } from "./CulturesHTML`s/etnos";
import { Empire } from "./CulturesHTML`s/empire";
import { Literature } from "./CulturesHTML`s/literature";
import { Creation } from "./CulturesHTML`s/creation";
import { Architecture } from "./CulturesHTML`s/acrchitecture";
import { Myth } from "./CulturesHTML`s/myth";
import { CultureXX } from "./CulturesHTML`s/cultureXX";

export const CulturePage = () => {
  const [OptionValue, setOptionValue] = useState("etnos");

  const HandleChange = (event) => {
    setOptionValue(event.target.value);
  };

  return (
    <>
      <h1>Культура в Енисейской губернии</h1>
      <div className="Options">
        <label htmlFor="culture">Выберите отрасль культуры:</label>
        <select
          name="culture"
          id="culture"
          onChange={(event) => HandleChange(event)}
        >
          <option value="etnos">Этническое разнообразие</option>
          <option value="empire">Русская культура и влияние империи</option>
          <option value="literature">Литература и образование</option>
          <option value="creation">Ремесла и народное творчество</option>
          <option value="architecture">Архитектура</option>
          <option value="myth">Фольклор и мифология</option>
          <option value="cultureInXX">Культура в начале XX века</option>
        </select>
      </div>
      {OptionValue === "etnos" && <Etnos />}
      {OptionValue === "empire" && <Empire />}
      {OptionValue === "literature" && <Literature />}
      {OptionValue === "creation" && <Creation />}
      {OptionValue === "architecture" && <Architecture />}
      {OptionValue === "myth" && <Myth />}
      {OptionValue === "cultureInXX" && <CultureXX />}
    </>
  );
};
