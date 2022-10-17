import React, { useEffect, useState } from "react";
import "./UseberryBox.css";

export default function UseberryBox(props) {
    const berries = props.data
    // console.log("props", props.data)

  return (
    <>
      <div className="boxContainer">
        {berries.map(
            (berry) => {
                return(
                <>
                
                {berry.options?
                  <div 
                      className="berryContainer" 
                      key={berry.title}
                      style={{backgroundColor: `${berry.color}`}}
                      onClick={() =>props.onAddChild(berry)}
                  >
                      {berry.title}
                  </div>
                  :
                  <div 
                      className="berryContainer" 
                      key={berry.color}
                      style={{backgroundColor: `${berry.color}`}}
                      // onClick={() =>props.onAddChild(berry.options)}
                  >
                      {berry.title}
                  </div>
            }
                </>
                )
            }
        )}
      </div>
    </>
  );
}
