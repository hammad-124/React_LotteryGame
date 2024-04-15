import { useState } from "react";

export default function LodoBoard(){
  let [moves,setmoves] = useState({
    blue:0,
    Green:0,
    Red:0,
    Yellow:0,
  });
  let updatedBlue = () =>{
    setmoves((preValue)=>{
       return {...preValue,blue:preValue.blue+1}
    });

  }
  let updatedGreen = () =>{
    setmoves((preValue)=>{
       return {...preValue,Green:preValue.Green+1}
    });

  }
  
    return(
        <div>
            <p>Let Game Begins</p>
            <div>
                <p>Blue moves : {moves.blue}</p>
                <button style={{backgroundColor :"blue"}} onClick={updatedBlue}>+1</button>
                <p>Green moves :{moves.Green}</p>
                <button style={{backgroundColor:"green"}} onClick={updatedGreen}>+1</button>
                <p>Red moves :{moves.Red}</p>
                <button style={{backgroundColor:"red"}}>+1</button>
                <p>Yellow moves :{moves.Yellow}</p>
                <button style={{backgroundColor:"yellow",color : "black"}}>+1</button>
            </div>
        </div>
    );
}