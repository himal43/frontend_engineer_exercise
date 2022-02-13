import React, { useState } from "react";
const QUESTIONS = [
  "What is your preference for design?",
  "what is your timeline for project?",
  "What is your budget estimate?",
  "Who are your customers?",
];

export default function App() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });
  const [checkBoxes, setCheckBoxes] = useState({
    checkBox1: false,
    checkBox2: false,
    checkBox3: false,
    checkBox4: false,
  });

  function handleChechbox(e) {
    const { name, value } = e.target;
    console.log(name === "checkbox1" ? true : false);

    setCheckBoxes({
      checkBox1: name === "checkbox1" ? true : false,
      checkBox2: name === "checkbox2" ? true : false,
      checkBox3: name === "checkbox3" ? true : false,
      checkBox4: name === "checkbox4" ? true : false,
    });
    console.log(checkBoxes);
    setAnswers({
      ...answers,
      answer4: value,
    });
  }

  const submitQuiz = () => {
    answers.answer1 && answers.answer2 && answers.answer3 && answers.answer4
      ? setQuizFinished(true)
      : alert("please answer all the questions");
  };

  console.log(answers);

  return (
    <div className="app">
      <div className="answer-section">
        <label htmlFor="answer">
          {QUESTIONS[0]}
          <input
            type="text"
            value={answers.answer1}
            onChange={(e) =>
              setAnswers({ ...answers, answer1: e.target.value })
            }
          />
        </label>

        <label htmlFor="question" className="next_question">
          {QUESTIONS[1]}
          <select
            onChange={(e) =>
              setAnswers({ ...answers, answer2: e.target.value })
            }
          >
            <option value="2 months">2 months</option>
            <option value="4 months">4 months</option>
            <option value="6 months">6 months</option>
            <option value="8 months">8 months</option>
          </select>
        </label>

        <label htmlFor="question" className="next_question">
          {QUESTIONS[2]}
        </label>
        <div className="question_input">
          <label>
            <input
              type="radio"
              value="500 Thousands"
              name="answer3"
              onChange={(e) =>
                setAnswers({ ...answers, answer3: e.target.value })
              }
            />
            500 Thousands
          </label>

          <label>
            <input
              type="radio"
              value="1 million"
              name="answer3"
              onChange={(e) =>
                setAnswers({ ...answers, answer3: e.target.value })
              }
            />
            1 million
          </label>
          <br />

          <label>
            <input
              type="radio"
              value="1.25 million"
              name="answer3"
              onChange={(e) =>
                setAnswers({ ...answers, answer3: e.target.value })
              }
            />
            1.25 million
          </label>

          <label>
            <input
              type="radio"
              value="1.5 million"
              name="answer3"
              onChange={(e) =>
                setAnswers({ ...answers, answer3: e.target.value })
              }
            />
            1.5 million
          </label>
        </div>

        <label htmlFor="question" className="next_question">
          {QUESTIONS[3]}
        </label>

        <div className="question_input">
          <label>
            <input
              type="checkbox"
              value="Kids"
              name="checkbox1"
              onClick={handleChechbox}
              checked={checkBoxes.checkBox1}
            />{" "}
            Kids
          </label>
          <label>
            <input
              type="checkbox"
              value="Toddlers"
              name="checkbox2"
              onClick={handleChechbox}
              checked={checkBoxes.checkBox2}
            />
            Toddlers
          </label>
          <label>
            <input
              type="checkbox"
              value="Adults"
              name="checkbox3"
              onChange={handleChechbox}
              checked={checkBoxes.checkBox3}
            />
            Adults
          </label>
          <label>
            <input
              type="checkbox"
              value="Old People"
              name="checkbox4"
              onChange={handleChechbox}
              checked={checkBoxes.checkBox4}
            />
            Old People
          </label>
        </div>

        <button
          onClick={submitQuiz}
          // disabled={
          //   answers.answer1 &&
          //   answers.answer2 &&
          //   answers.answer3 &&
          //   answers.answer4 ?
          //   false : true
          // }
        >
          Submit
        </button>
      </div>

      {quizFinished && (
        <div className="score-section">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Question</th>

                <th>Answer Given</th>
              </tr>
            </thead>
            <tbody>
              {QUESTIONS.map((q, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{q}</td>

                  <td>{answers[`answer${i + 1}`]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
