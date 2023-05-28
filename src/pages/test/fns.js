

export const processInput = (val,setInp,setactiveWordIndex,cloud,setCorrectWordArry,activeWordIndex,setStartCounting,startCounting) => {
  
    if(!startCounting){setStartCounting(true);}


if(val.endsWith(' ')){

// user has finish the word

setactiveWordIndex(index=>index+1);
setInp(' ');




    setCorrectWordArry(data=>{
        const word=val.trim();
        const newResult=[...data]
        newResult[activeWordIndex]=
         word=== cloud.current[activeWordIndex]
         return newResult;
    })


}

else{
setInp(val);

}


}
