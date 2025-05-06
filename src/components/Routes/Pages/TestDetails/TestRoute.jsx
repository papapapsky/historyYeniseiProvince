import { PureComponent, useEffect, useState } from "react";

export const TestRoute = () => {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [questions, setQuestions] = useState([]);
  const [checkedItem, setCheckedItems] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [grade, setGrade] = useState();

  const handleClick = (event) => {
    const points = answers.length;
    if (points >= 7) {
      setGrade("5");
    } else if (points >= 6 && points < 7) {
      setGrade("4");
    } else if (points >= 4 && points < 6) {
      setGrade("3");
    } else if (points < 4) {
      setGrade("2");
    }

    setCheckedItems({
      ...Object.fromEntries(
        Object.keys(checkedItem).map((key) => [key, false])
      ),
      [event.target.id]: true,
    });
    setUserAnswer(event.target.name);
  };

  const nextQuestion = () => {
    setCheckedItems({
      ...Object.fromEntries(
        Object.keys(checkedItem).map((key) => [key, false])
      ),
    });

    for (let i = 1; i <= Object.entries(checkedItem).length; i++) {
      if (checkedItem[`option${i}`] === true) {
        setQuestions([...questions].splice(1, questions.length));
        console.log(currentQuestion.answer);
        if (userAnswer === currentQuestion.answer) {
          setAnswers([...answers, "true"]);
          console.log(answers);
        }
      }
    }
  };

  useEffect(() => {
    const url = "https://mocki.io/v1/633b6183-3185-4506-8d48-0085206ff223";
    async function FetchToQuestions() {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("ошибка при получении запроса.");
      }

      const responseJSON = await response.json();
      setQuestions([...responseJSON]);
    }

    FetchToQuestions();
  }, []);

  useEffect(() => {
    setCurrentQuestion(questions[0]);
    console.log(currentQuestion);
  }, [questions]);

  return (
    <>
      {currentQuestion && (
        <div className="OptionsDiv">
          <h1>{currentQuestion.title}</h1>
          <div className="CheckAnswer">
            <input
              type="checkbox"
              id="option1"
              name={currentQuestion.options && currentQuestion.options[0]}
              checked={checkedItem.option1}
              onChange={handleClick}
            />
            <label htmlFor="option1">
              {currentQuestion.options && currentQuestion.options[0]}
            </label>
          </div>
          <div className="CheckAnswer">
            <input
              type="checkbox"
              id="option2"
              name={currentQuestion.options && currentQuestion.options[1]}
              checked={checkedItem.option2}
              onChange={handleClick}
            />
            <label htmlFor="option2">
              {currentQuestion.options && currentQuestion.options[1]}
            </label>
          </div>
          <div className="CheckAnswer">
            <input
              type="checkbox"
              id="option3"
              name={currentQuestion.options && currentQuestion.options[2]}
              checked={checkedItem.option3}
              onChange={handleClick}
            />
            <label htmlFor="option3">
              {currentQuestion.options && currentQuestion.options[2]}
            </label>
          </div>
          <button className="nextQuestion" onClick={() => nextQuestion()}>
            Следующий вопрос
          </button>
        </div>
      )}
      {questions.length === 0 && (
        <div>
          <h1>Тест завершен!</h1>
          <h2>Ваш результат: {answers.length} из 8</h2>
          <h1>
            Оценка: <span style={{ color: "red" }}> {grade}</span>
          </h1>
        </div>
      )}
    </>
  );
};
