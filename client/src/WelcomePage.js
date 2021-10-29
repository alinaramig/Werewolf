import React, {useState, useRef, useEffect} from 'react';
import {BrowserRouter as Router, Route, Redirect, useHistory} from "react-router-dom";
import './WelcomePage.css';


function WelcomePage() {
    const history = useHistory();

    const[todos, setTodos]= useState([])


    return (
        <>
        <div className='welcome-page'>
          <h1>
          Werewolf
          </h1> 
          <button onClick={() => history.push("/Lounge")} >START</button>
          <button onClick={() => history.push("/JoinInstruction")} >JOIN</button>
        </div>
        </>
    )
}
export default WelcomePage;