import React, { useState } from "react";

const Game = ({ questions }) => {
  const [step, setStep] = useState(0);

  const onClickVari = () => {
    setStep(step + 1);
  };

  return (
    <div className="game">
      <h1>{questions[step].title}</h1>
      <ul>
        {questions[step].variants.map((text) => (
          <li onClick={onClickVari}>{text}</li>
        ))}
      </ul>
      <p className="progress">{step + 1}/3</p>
    </div>
  );
};

const Result = () => {
  return (
    <div>
      <img src={firecracker} alt="" />
      <p>Вы решили верно {stepClone} из 3!!🎉🎉</p>
    </div>
  );
};

export default Game;
