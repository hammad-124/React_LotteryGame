import { useState } from "react"
import "./Lottery.css";
import { GenTicket,sum } from "./helper";
import Ticket from "./ticket";

export default function Lottery({n,winningSum}){

    let [ticket ,setTicket] = useState(GenTicket(n));
    let Iswinning = sum(ticket) === winningSum;
    let buyNew =()=>{
        setTicket(GenTicket(n))
    }

   
    return (
        <div>
          <h1>Lottery Game!</h1>  
          <Ticket ticket={ticket}/>
         
          <button onClick={buyNew}>Get New Ticket</button>
          <h3>{Iswinning && "Congratulations,You Won!"}</h3>
        </div>
    )
}