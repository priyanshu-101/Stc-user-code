import React, { useLayoutEffect, useState } from 'react';
import './styles.scss';
import Navbar from '../../components/navbar';
import { useEffect } from 'react';
const PreviousOA = () => {
  const [companies, setcompanies] = useState([
    "Gemini Solutions",
    "FinBox",
    "DeltaX",
    "Mamsys Consultancy Services",
    "Infosys",
    "TCS"
  ]);
  // useEffect(async() => {
  //   const data = await fetch('http://localhost:5000/api/QuestionCompanyList')
  //   const data1 = await data.json();
  //   console.log(data1);
  //   setcompanies(data1.data);
  // },[]);
  return (
    <>
      <Navbar/>
      <h1>Previous Year Questions</h1>
      <div className='Company-Column'>
      {companies.map((data, index)=>{
          //return <div key={index} className='Company'>{data.Company}</div>
          return <div key={index} className='Company'>{data}</div>
      })}
      </div>
    </>
  )
}

export default PreviousOA