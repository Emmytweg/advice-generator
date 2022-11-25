import React from 'react'
import './Advice.css';
import Axios from 'axios';
import mobile from './mobile.svg'
import dice from './dice.svg'
import desktop from './desktop.svg'
import { useState } from 'react';
import { useEffect } from "react";
function Advice() {
    
    const [advice, setAdvice] = useState('')
    const fetchAdvice = () => {
        Axios.get('https://api.adviceslip.com/advice').then((res)=> {
            console.log(res.data.slip.advice)
            setAdvice(res.data.slip.advice)
        })
    }
   useEffect(() => {
    Axios.get('https://api.adviceslip.com/advice').then((res)=> {
        console.log(res.data.slip.advice)
       fetchAdvice()
    })
   }, [])
    

  return (
    <div className='advice-container'>
      <div className="advice-box">
        <div className="advice-no">
            <h5>ADVICE #117</h5>
        </div>
        <div className="advice-content">
            <p>
          " {advice}"
            </p>
        </div>
        <div className="line">
            <img src={mobile} alt="" />
            <img src={desktop} className='desktop' alt="" />
        </div>
        <div className="dice">
            <img src={dice} alt="" onClick={fetchAdvice} />
        </div>
      </div>
    </div>
  )
}

export default Advice
