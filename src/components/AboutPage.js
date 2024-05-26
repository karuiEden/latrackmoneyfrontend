import React from "react";
import "./main.css";

function Head() {
    return(
        <div className="header">
            <a className="source" href="https://github.com/karuiEden">Source Code</a>
            <a className="head" href="/"><h1>LaTrackMoney</h1></a>
            <a className="about-href" href="/latrackmoneyfrontend/src/components/AboutPage">About me</a>
        </div>
    )
}


function Body(){
    return (

        <div>
            <h2>About me</h2>
            <img src="https://avatars.githubusercontent.com/u/97159954?s=400&u=9057ab9a200ae54ca618e2b32be42294f97ff45e&v=4" alt="karui" width="200" height="200"/>
            <p>My name is Karui Eden, I am a software developer.</p>
            <p>This is my first web application. I am using React for the frontend, Spring for the backend, and PostgreSQL for the database.</p>
        </div>
    )
}

function AboutPage() {
    return (
        <div>
            <body className="aboutPage">
            <Head/>
            <div className="about">
            <Body/>
            </div>
            </body>
        </div>
    )
}
export default AboutPage;