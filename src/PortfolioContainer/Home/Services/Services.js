import React from 'react';
import './Services.css';
import webDev from "../../../images/web-dev-icon.png";
import webDs from "../../../images/web-icon.png";
import react from "../../../images/react-icon.png";
import fullstack from "../../../images/full-stack-icon.png";

const Services = () => {

    return (
        <div className="container-fluid py-5 bg-light ">
            <span className="fs-2 services-header">What I'm Doing</span>
            <p className="p-2 service-details">I design and develop services for customers of all sizes, <br /> specializing in creating stylish, modern websites, web services and online stores.</p>
            <div className="row row-cols-1 row-cols-md-4 g-4 text-center container mx-auto">

                <div className="col">
                    <div className="card h-100 px-1 service-card ">
                        <img src={webDev} className="card-img-top img-fluid service-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title overflow-hidden service-title">Web Development</h5>
                            <p className="card-text service-details">High-quality and professional development of sites at the professional level. </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 px-1 service-card">
                        <img src={webDs} className="card-img-top img-fluid service-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title overflow-hidden service-title">Web Design</h5>
                            <p className="card-text service-details">The most modern and high-quality design made at a professional level.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 px-1 service-card">
                        <img src={react} className="card-img-top img-fluid service-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title overflow-hidden service-title">React Apps</h5>
                            <p className="card-text service-details">Professional one pager React Fast application for your project.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 px-1 service-card">
                        <img src={fullstack} className="card-img-top img-fluid service-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title overflow-hidden service-title">Full Stack Application</h5>
                            <p className="card-text service-details">I make high-quality full stack application using React, Node.js and MongoDB.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;