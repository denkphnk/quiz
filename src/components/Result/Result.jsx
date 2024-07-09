import React, { useState } from "react";
import firecracker from "../../assets/firecracker.jpg";

const Result = () => {
  return (
    <div>
      <img src={firecracker} alt="" />
      <p>Вы решили верно {stepClone} из 3!!🎉🎉</p>
    </div>
  );
};

export default Result;
