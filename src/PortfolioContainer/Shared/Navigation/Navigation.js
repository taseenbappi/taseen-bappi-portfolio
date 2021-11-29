import React from 'react';

const Navigation = () => {
    return (
        <div className="container-fluid bg-light p-3 border-bottom border-2" >
            <span className="navbar-brand fw-bolder fs-2  " href='/'>Taseenul Hoque Bappi</span>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/#">Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Blogs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Contact</a>
                </li>

            </ul>
        </div>
    );
};

export default Navigation;