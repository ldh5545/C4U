import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import Question from "./Question/Question";
import Result from "./Result/Result";
import { useState } from "react";
import Wait from "./Wait/Wait";
import AllActivity from "./AlllActivity/AllActivity";
import { mbtiType } from "./data/MBTITypeData";
import { questions } from "./data/questionData";

const App = () => {
  const [answers, setAnswers] = useState([]);

  const getMBTI = (answers) => {
    return mbtiType
      .map((type) => {
        const firstTypeNumber = answers.filter(
          (answer) => answer.type === type.charAt(0)
        ).length;
        const secondTypeNumber = answers.filter(
          (answer) => answer.type === type.charAt(1)
        ).length;

        return firstTypeNumber >= secondTypeNumber
          ? type.charAt(0)
          : type.charAt(1);
      })
      .join("");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*첫번째 화면*/}
          <Route path={"/"} element={<Main />} />

          {/*질문 페이지*/}
          <Route
            path={"/question"}
            element={<Question answers={answers} setAnswers={setAnswers} />}
          />

          {/*대기 중 페이지*/}
          <Route path={"/wait"} element={<Wait />} />

          {/*결과 페이지*/}
          <Route
            path={"/result"}
            element={
              answers.length === questions.length ? (
                <Result mbti={getMBTI(answers)} />
              ) : (
                <Navigate to={"/"} replace />
              )
            }
          />

          {/*모든 활동 모아보기*/}
          <Route path={"/allActivity"} element={<AllActivity />} />
          <Route path={"*"} element={<Navigate to={"/"} replace />} />
        </Routes>
      </BrowserRouter>

      <span className={"copyRight"}>ⓒ 62대 단비 전국 총단</span>
    </div>
  );
};

export default App;
