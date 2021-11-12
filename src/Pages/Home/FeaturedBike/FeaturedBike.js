import React from 'react';
import featuredBike from "./FeaturedBikeImg/featured01.jpg"
import Rating from "react-rating"

const FeaturedBike = () => {
    return (
        <div className="bg-color">
            <div className="container">
                <div className="mt-5 mb-5 text-center">
                    <h1>Featured <span className="text-danger">Bicycle</span></h1>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src={featuredBike} className="w-75" alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12 text-start">
                        <h1>The first all fat-tire,
                            bullfrog trike is here.</h1>
                        <p>Rating: <Rating
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            initialRating={4.5}
                            readonly >

                        </Rating></p>
                        <p>A fatbike (also called fat bike, fat tire, fat-tire bike, or snow bike) is an off-road bicycle with oversized tires, typically 3.8 in (97 mm) or larger and rims 2.16 in (55 mm) or wider, designed for low ground pressure to allow riding on soft, unstable terrain, such as snow, sand, bogs and mud.</p>
                        <button className="btn btn-danger">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBike;