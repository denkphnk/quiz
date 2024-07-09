import { useState } from "react";
import "./App.css";
import firecracker from "./assets/firecracker.jpg";

const questions = [
  {
    title: "React - это ..?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 1,
  },
  {
    title: "Каковы преимущества использования React?",
    variants: ["Увеличение времени разработки", "Легкость в изучении"],
    correct: 1,
  },
  {
    title: "Какие недостатки у React?",
    variants: [
      "Относительная сложность для новичков",
      "Зависимость от сторонних библиотек",
    ],
    correct: 1,
  },
];

const Game = ({ step, question, onClickVari }) => {
  return (
    <div className="game">
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVari(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
      <p className="progress">{step + 1}/3</p>
    </div>
  );
};

const Result = ({ correct }) => {
  return (
    <div>
      <img src={firecracker} alt="" />
      <p>Вы верно ответили на {correct} вопроса из 3!!🎉🎉</p>
    </div>
  );
};

const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVari = (index) => {
    setStep(step + 1);
    if (index == question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="quiz-wrapper">
      {step != questions.length ? (
        <Game step={step} question={question} onClickVari={onClickVari} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};

export default App;
