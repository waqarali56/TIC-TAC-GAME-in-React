import React from "react";

function Box(props) {

  return (
    <>
      <h1>TIC TAC TOE</h1>
      <h2>{props.player}</h2>
      <h1>{props.winner}</h1>

      <div className="mybox">

             
           
      <button onClick={() => props.writeInBox(0)}>{props.buttons[0]}</button>
            <button onClick={() => props.writeInBox(1)}>{props.buttons[1]}</button>
            <button onClick={() => props.writeInBox(2)}>{props.buttons[2]}</button>
            <button onClick={() => props.writeInBox(3)}>{props.buttons[3]}</button>
            <button onClick={() => props.writeInBox(4)}>{props.buttons[4]}</button>
            <button onClick={() => props.writeInBox(5)}>{props.buttons[5]}</button>
            <button onClick={() => props.writeInBox(6)}>{props.buttons[6]}</button>
            <button onClick={() => props.writeInBox(7)}>{props.buttons[7]}</button>
            <button onClick={() => props.writeInBox(8)}>{props.buttons[8]}</button>

     </div>
            
    </>
  );

}

export default Box;
