import React, { useState } from "react";
import ReactToPrint from "react-to-print";
import "./styles.scss";
import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const PreviousQuestion = () => {
  const { id } = useParams();
  const [questions, setquestions] = useState([]);
  useEffect(async () => {
    const data = await fetch(
      `https://free.yashv.xyz/api/CompanyQuestion/${id}`
    );
    const data1 = await data.json();
    console.log(data1);
    setquestions(data1.data);
  }, []);
  // const questions = [
  //   {question: "A train running at the speed of 60 kmph crosses a pole in 9seconds.What is the length of the train?",
  //    options: [120, 180,150, 324]
  // },
  // {question: "An accurate clock shows 8’o clock in the morning. Through how many degrees will the hour hand rotate when the clock shows 2’o clock in the afternoon.",
  //    options: [168,144,150,180]
  // },
  // {question: "A train running at the speed of 60 kmph crosses a pole in 9seconds.What is the length of the train?",
  //    options: [120, 180,150, 324]
  // },

  //]
  return (
    <>
      <Navbar />
      {/* <ReactToPrint
        trigger={() => {
          return <button>Print</button>;
        }}
        content={() => this.componentRef}
        pageStyle="print"
      /> */}
      <h1>{questions[0]?.Company}</h1>

      <div className="Question-Column">
        {questions.map((data, key) => {
          return (
            <div>
              <h5>
                <b>Q{key + 1}</b> {data.Question}
              </h5>
              <div>
                {data.Options &&
                  data.Options.slice(1, -1)
                    .split(",")
                    .map((option, key) => {
                      return (
                        <h6>
                          <b>{key + 1}</b>: {option} <br />
                        </h6>
                      );
                    })}
                {/* {console.log(data.options)} */}
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PreviousQuestion;
