import { useEffect, useRef, useState } from "react";
import { HistoryDetails } from "./MainPageComponents/HistoryDetails";

export const HistoryPage = () => {
  const [range, setRange] = useState(1874);
  const [historyDate, setHistoryDate] = useState("Потяните ползунок");

  const [dates, setDates] = useState([]);

  const url = "https://mocki.io/v1/6c07b180-4c25-4631-a9c7-860c553baa31";

  const ShowInformation = (event) => {
    setRange(event.target.value);
    const CurrentHistoryDate = dates.filter(
      (item) => item.year === parseInt(event.target.value)
    );
    setHistoryDate(CurrentHistoryDate[0].title);
  };

  useEffect(() => {
    async function YearsFetch() {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Ошибка при получении данных с сервера...");
      }

      const responseJSON = await response.json();
      setDates([...responseJSON]);
    }

    YearsFetch();
  }, []);

  return (
    <>
      <h1>История Енисейской губрении</h1>
      <HistoryDetails />
      <h2>Фрагменты истории</h2>
      <h4>
        Потяните ползунок, чтобы посмотреть какие события произошли в том или
        ином году
      </h4>

      <input
        type="range"
        max="1925"
        min="1822"
        onChange={(event) => ShowInformation(event)}
      />
      <h2>
        {range} год: {historyDate}
      </h2>
    </>
  );
};
