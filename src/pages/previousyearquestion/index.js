import React, { useState } from 'react';
import './styles.scss';
import Navbar from '../../components/navbar';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const PreviousQuestion = () => {
  const { id} = useParams();
  const companyName = "Gemini Solutions"
  const [questions, setquestions] = useState([]);
  useEffect(async()=>{
    const data = await fetch(`http://localhost:5000/api/CompanyQuestion`)
    const data1 = await data.json();
    console.log(data1);
    setquestions(data1.data);
  },[])
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
      <Navbar/>
      <h1>{companyName}</h1>
      <div className='Question-Column'>
        {questions.map((data,key)=>{
          return <div>
          <h5><b>Q{key+1}</b> {data.Question}</h5>
          <div>
            {/* {console.log(JSON.parse(data.Options))} */}
            {/* {data.Options && JSON.parse(data.Options).map((option,key)=>{
              return <h6>
                 <b>{key+1}</b>: {option} <br/>
              </h6>
            })} */}
            {/* {console.log(data.options)} */}
          </div>
          <br/>
          </div>
        })}
        
      </div>
    </>
  )
}

export default PreviousQuestion