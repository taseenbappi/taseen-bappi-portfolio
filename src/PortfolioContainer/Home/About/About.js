import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container-fluid py-5" id="about">
            <h3 className="about-header overflow-hidden">About me</h3>
            <div className="row mx-auto">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-3 text-start p-5" >
                    <span className="text-secondary fw-bolder fs-5">Taseenul Hoque Bappi,</span>
                    <p className="text-secondary fs-5 lh-base" >Dedicated and efficient full stack developer with 1+ years experience in application layers, presentation layers, and databases. Seeking a challenging position to build a long-term career in MERN stack developing. Passionate to learn up to date technologies to improve skill-sets. Specialized in MongoDB, Express.js, React.js, Node.js, Vanilla JavaScript, etc.</p>
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-5 text-start">
                    <span className=" fw-bolder fs-4">Skills</span>
                    <div>
                        <button className="btn btn-dark m-2">HTML5</button>
                        <button className="btn btn-dark m-2">CSS3</button>
                        <button className="btn btn-warning m-2">JavaScript</button>
                        <button className="btn btn-info m-2">React.js</button>
                        <button className="btn btn-success m-2">Node.js</button>
                        <button className="btn btn-secondary m-2">Express.js</button>
                        <button className="btn btn-dark m-2">MongoDB</button>
                        <button className="btn btn-dark m-2">Firebase</button>
                        <button className="btn btn-dark m-2">Git</button>
                        <button className="btn btn-dark m-2">Heroku</button>
                        <button className="btn btn-dark m-2">Netlify</button>
                        <button className="btn btn-dark m-2">GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;