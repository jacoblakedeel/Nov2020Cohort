import React, {useState, useEffect} from "react";

const ConditionalRendering = () => {

  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(()=>{
    setTimeout(() =>{

      setIsLoaded(true);


    }, 3000)
  }, [])



  if(!isLoaded){
    return 
    <>
        Data is Loading
    </>
  }
  else{
    <>
      This is Main View
    </>
  }
};

export default ConditionalRendering;
