import "./styles.css";
import React, { useEffect, useState } from "react";
import UseberryBox from "./components/UseberryBox/UseberryBox";
import axios from "axios"
import MainContainer from "./components/MainContainer/MainContainer";

export default function App() {
  const externalAPI = "https://research.useberry.com/bill-scripts/assignment.php";
  const [data, setData] = useState([])  
  const finalArray = []

  useEffect(() => {
    axios.get(externalAPI)
      .then(res => {
        setData([res.data]);
        console.log("res.data=",res.data)
      })
      .then(res => {
        console.log("dataArray=",data) 
      })
      .catch(err => {
        console.log(err)
      })

  }, []);

  //console.log nested obj
  const showFinalObject = () =>{  

    for (let i = finalArray.length; i > 0; i--) {
      delete finalArray[i-1].options
      finalArray[i-1].selectedChild = finalArray[i]
    }
    console.log(finalArray[0])
  }

  const addToFinalArray = (prop) =>{
    finalArray.push(prop)
  }


  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <MainContainer data={data} addToFinalArray={addToFinalArray} />
      <div className="buttonContainer">
        <button onClick={showFinalObject}>Save</button>
      </div>
    </>
  );
}
