import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid fixed-top ">
            <div className="container-fluid">
                <Link className=" brand-title navbar-brand p-2" to="/home">Taseen Bappi</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">

                            <Link className="nav-link active" to="/home#projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home#contact">Contact</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default Navigation;