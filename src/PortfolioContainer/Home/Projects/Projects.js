import React from 'react';
import './Projects.css';
import toys from '../../../images/projects/baby-shopper-bd.png';
import denta from '../../../images/projects/denta111.png';
import tourx from '../../../images/projects/tourx.png';


const Projects = () => {
    return (
        <div className="container-fluid py-5" id="projects">
            <h2 className="projects-header py-3">Technical Projects</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
                <div className="col">
                    <div className="card h-100">
                        <img src={toys} className="card-img-top img-fluid  p-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Baby Shopper BD</h5>
                            <p className="card-text">Baby products selling e-commerce.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={denta} className="card-img-top img-fluid p-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Denta</h5>
                            <p className="card-text">Dental care service digital platform.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={tourx} className="card-img-top img-fluid p-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">TourX</h5>
                            <p className="card-text">Tour service digital platform.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;