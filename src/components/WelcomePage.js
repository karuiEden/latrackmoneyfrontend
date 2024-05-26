import React from "react";
import "./main.css";

function Head() {
    return(
        <div className="header">
            <a className="source" href="https://github.com/karuiEden">Source Code</a>
            <a className="head" href="/"><h1>LaTrackMoney</h1></a>
            <a className="about-href" href="/about">About me</a>
        </div>
    )
}

function Body(){
    return (

        <div className="main">
            <p>Starting control your money</p>
            <a href="/work/money"><button name="signup">Begin</button></a>
        </div>
    )
}

function WelcomePage(){
    return(
        <div className="welcomePage">
            <body >
            <Head/>
            <div className="welcome">
            <Body/>
            </div>
            <footer><p className="title">Made by karui</p></footer>
            </body>
        </div>
    )
}
export default WelcomePage;