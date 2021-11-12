import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import FeaturedBike from '../FeaturedBike/FeaturedBike';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Sponsor from '../Sponsor/Sponsor';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <FeaturedBike></FeaturedBike>
            <Products></Products>
            <Review></Review>
            <Sponsor></Sponsor>
            <Footer></Footer>
        </div>
    );
};

export default Home;