import React, { useEffect, useRef, useState } from 'react'
import { processInput } from './fns.js';
import './test.css';


const word = ()=>`Lafjkda sladjfklasfjldk asdfjl kdasjfkla sdfajlk; sdfjklasdfj asdkjlfk; sdlfjklasdfj; asdfjkl; sadfjkl; kdasjfkla sdfajlk; sdfjklasdfj kdasjfkla sdfajlk; sdfjklasdfj asdkjlfk; sdlfjklasdfj; sladjfklasfjldk asdfjl kdasjfkla sdfajlk;sdfajlk; sdfjklasdfj asdkjlfk; sdlfjklasdfj; asdfjkl; sadfjkl; kdasjfkla sdfajlk; sdfjklasdfj kdasjfkla sdfajlk; sdfjklasdfj Lafjkda sladjfklasfjldk asdfjl kdasjfkla sdfajlk; sdfjklasdfj asdkjlfk; sdlfjklasdfj; asdfjkl; sadfjkl; kdasjfkla sdfajlk;  kdasjfkla sdfajlk; sdfjklasdfj kdasjfkla sdfajlk;`.split(' ');



export const Test3 = () => {

   const[userInput,setUserInput]=useState('');
   const [activeWordIndex,setActiveWordIndex]=useState(0);

   const [correctWordArray,setCorrectWordArray]=useState([]);

   const [startCounting,setStartCountingh]=useState(false);
    const cloud=useRef(word());


    // for checking how many times it is renendering
    


    function Sentence(props){
      const {text,active,correct}=props;
      const rerender=useRef(0);

      useEffect(()=>{

      rerender.current+=1;
    })   


      
       
      if(correct===true){
        return <span className='correct'>{text} </span>
      }
      if(correct===false){
        return <span className='incorrect'>{text} </span>
      }

      if(active){

        return <span className='active'>{text}  </span>
      }
 

      return <span> {text} </span>

    }
//  how to fix rerendering multiple time
 Sentence = React.memo(Sentence);

// function for timer
 function Timer(props){
  const {startCounting,correctWords,totalWord}=props
  const [timeElepse,setTimeElepse]=useState(0);

 useEffect(()=>{
  
  if(startCounting){


    setInterval(()=>{
     setTimeElepse(oldTime=>oldTime+1); 
    //  console.log(totalWord,correctWords)

    },1000)
  }
 },[startCounting]); 



return <div>
  <p>Time : {timeElepse} sec</p>
  <p>No of Words : {totalWord} Words </p> 
  <p>Accuracy : {(correctWords/totalWord)*100}%</p>

</div>

        
 }




  return (
    <div>
    <h1>Typing Test 1</h1>
    <Timer
    startCounting={startCounting}
    correctWords={correctWordArray.filter(Boolean).length}
    totalWord={cloud.current.length}
    /> 

    <p>{cloud.current.map((word,index)=>{
       return <Sentence text={word} active={index=== activeWordIndex}
       correct={correctWordArray[index]}/>


    })}</p>
   
    <input type="text" 
    value={userInput}
    onChange={(e)=>{processInput(e.target.value,setUserInput,setActiveWordIndex,cloud,setCorrectWordArray,activeWordIndex,setStartCountingh,startCounting)}}/> 

 




    </div>
  )
}