import React, { useEffect, useState } from "react";
import UseberryBox from "../UseberryBox/UseberryBox";
import "./MainContainer.css";

export default function MainContainer(props) {
    const dataArray = props.data
    const [state, setState] = useState()    
    const [updateToggle, setUpdateToggle] = useState(false)
    const fianlArray = []

    const updateToggleFunction = () => {
        setUpdateToggle(!updateToggle);
      };
    
    const onAddChild = (prop) =>{
        dataArray.push(prop.options)
        props.addToFinalArray(prop)
        updateToggleFunction()
    }

    

  return (
    <>
      {dataArray.length !==0 ? 
        dataArray.map((data) => {
          return (
            <div key={data} className="mainContainer">
              <UseberryBox data={data} onAddChild={onAddChild}/>
            </div>
          )
        }) 
        : null
      }
      
    </>
  );
}
