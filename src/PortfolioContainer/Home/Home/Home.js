import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div >
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>

        </div>
    );
};

export default Home;