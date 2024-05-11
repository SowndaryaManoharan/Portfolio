import React from "react";
 import '../styles/Skills.css';

 function Skills () {
    return (
        <div className="container" style={{ minHeight: "300px" }}>
            <h1 className="title-text" style={{color:"white"}}>SKILLS</h1>

            <h2 className="title-text">Technical Skills</h2>
            <div className="skill-box">
                <span className="title">Auto CAD</span>
                <div className="skill-bar">
                    <span className="skill-per html" style={{width:"80%"}}>
                        <span className="tooltip" >90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Staad Pro</span>
                <div className="skill-bar">
                    <span className="skill-per javascript" style={{width:"65%"}}>
                        <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>
            <h2 className="title-text">Programming Languages</h2>
           
            <div className="skill-box">
                <span className="title">PYTHON</span>
                <div className="skill-bar">
                    <span className="skill-per html" style={{width:"62%"}}>
                        <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>
           
           
            <h2 className="title-text">Soft Skills</h2>
            <div className="skill-box">
                <span className="title">Leadership</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs" style={{width:"90%"}}>
                        <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Team work</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs" style={{width:"78%"}}>
                        <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Adaptability</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs" style={{width:"70%"}}>
                        <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Communication</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs" style={{width:"80%"}}>
                        <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>
           
        </div>
    )
 }

 export default Skills;