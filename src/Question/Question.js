import React from "react";

import styles from "./Question.module.scss";
import CustomizedButton from "../Components/CustomizedButton/CustomizedButton";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "../data/questionData";
import TitleBox from "../Components/TitleBox/TitleBox";

const Question = ({ answers, setAnswers }) => {
  const number = new URLSearchParams(useLocation().search).get("number") ?? 1;

  const navigate = useNavigate();
  const answerClick = (type) => {
    const newAnswers = [...answers];
    const prevAnswerIndex = newAnswers.findIndex(
      (answer) => answer.number === number
    );

    if (prevAnswerIndex !== -1) {
      newAnswers.splice(prevAnswerIndex, 1);
    }

    newAnswers.push({ number, type });
    setAnswers(newAnswers);

    if (number === "12") {
      navigate("/wait");
    } else {
      navigate(`/question?number=${Number(number) + 1}`);
    }
  };

  const questionInfo = questions[Number(number) - 1];

  return (
    <div className={styles.question}>
      <TitleBox />
      <div className={styles.progressBar}>
        <div
          className={styles.progressInnerBar}
          style={{ width: `${(Number(number) / questions.length) * 100}%` }}
        />
      </div>
      <span className={styles.progressText}>
        {number}/{questions.length}
      </span>

      <div key={number} className={styles.questionMainBox}>
        <div className={styles.questionBox}>
          <span className={styles.questionNumber}>Q{number}.</span>
          <span className={styles.questionText}>{questionInfo.problem}</span>
        </div>

        <div className={styles.buttonBox}>
          <CustomizedButton
            onClick={() => {
              answerClick(questionInfo.type.charAt(0));
            }}
            text={questionInfo.A}
          />

          <CustomizedButton
            onClick={() => {
              answerClick(questionInfo.type.charAt(1));
            }}
            text={questionInfo.B}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
