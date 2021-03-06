import React from 'react';
import Typewriter from 'typewriter-effect';
import img from '../../../images/taseen.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="bg-light container-fluid py-5 mt-5 pt-5 ">
            <div className="row mx-auto justify-content-center align-items-center ">
                <div className="col-12 col-lg-7 col-md-7 col-sm-12 p-3 ">

                    <div className="profile-text">
                        <div className="profile-title">
                            {" "}
                            <span className="text-dark fw-bolder" ><span className="hello-txt">Hello, I'm</span>
                                <span className="profile-sub-title"> Taseenul Hoque Bappi</span>
                            </span>
                        </div>
                        <div className="profile-role fw-bolder fs-4 p-2">
                            {" "}
                            <Typewriter
                                options={{
                                    strings: ['MERN Stack Developer', 'JavaScript Developer', "React Developer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>

                    </div>
                    <div className="p-3 social-media">
                        <a href="https://github.com/taseenbappi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square p-1 fs-3 "></i></a>
                        <a href="https://www.linkedin.com/in/taseenbappi/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin p-1 fs-3 "></i></a>
                        <a href="https://twitter.com/taseen_bappi" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square p-1 fs-3 "></i></a>
                        <a href="https://www.hackerrank.com/taseen_bappi" target="_blank" rel="noopener noreferrer"><i className="fab fa-hackerrank p-1 fs-3 "></i></a>

                    </div>
                    <div>
                        <a href="./Taseenul_Hoque_Bappi_Resume.pdf" download><button className="btn btn-outline-dark m-3"><i className="fas fa-download me-2"></i>Resume Download</button></a>
                        <a className="btn btn-dark" href="/home#contact" >Hire Me</a>
                    </div>
                </div>
                <div className="col-12 col-lg-5 col-md-5 col-sm-12 p-3">
                    <img src={img} alt="" className="img-fluid p-2 border border-1 rounded-pill bg-white profile-img" />
                </div>
            </div>

        </div>
    );
};

export default Banner;