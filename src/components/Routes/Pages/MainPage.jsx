import "./Pages.css";
import { EarthDetails } from "./MainPageComponents/Details";
import { CustomLink } from "../CustomLink";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="PageStructure">
      <h1>Енисейская губрения 19 - 20 века</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/1856._Card_from_set_of_geographical_cards_of_the_Russian_Empire_046.jpg/330px-1856._Card_from_set_of_geographical_cards_of_the_Russian_Empire_046.jpg"
        alt=""
      />
      <h2>
        Енисейская губерния - это административно-территориальная единица
        Российской империи, впоследствии Российской республики, Российского
        государства и РСФСР в 1822—1925 годах.
      </h2>
      <h2>Общие сведения:</h2>
      <EarthDetails />
      <p>
        Население: <span>570 161</span>
      </p>
      <p>
        Просуществовала: <span>103 года</span>
      </p>
      <h1 className="LinkTest">
        <Link to="/Test">Пройти тест</Link>
      </h1>
    </div>
  );
};
