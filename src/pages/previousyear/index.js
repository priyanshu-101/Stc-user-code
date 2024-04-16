import React, { useLayoutEffect, useState } from "react";
import "./styles.scss";
import Navbar from "../../components/navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PreviousOA = () => {
  const nav = useNavigate();
  const [companies, setcompanies] = useState([]);
  const showQuestion = (id) => {
    nav(`/previousyear/${id}`);
  };
  useEffect(async () => {
    const data = await fetch("https://free.yashv.xyz/api/QuestionCompanyList");
    const data1 = await data.json();
    console.log(data1);
    setcompanies(data1.data);
  }, []);
  return (
    <>
      <Navbar />
      <h1>Previous Year Questions</h1>
      <div className="Company-Column">
        {companies.map((data, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                showQuestion(data.companyID);
              }}
              className="Company"
            >
              {data.Company}
            </div>
          );
          //return <div key={index} className='Company'>{data}</div>
        })}
      </div>
    </>
  );
};

export default PreviousOA;
