import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div >
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;