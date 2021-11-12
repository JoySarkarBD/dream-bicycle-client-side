import React from 'react';
import imgOne from "./img/5.png"
import imgThree from "./img/3.jpg"
import imgFour from "./img/4.png"

const Sponsor = () => {
    return (
        <div>
            <h1>Our Official <span className="text-danger">Sponsors</span></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mt-5 mb-5">
                <div className="col">
                    <div className="card">
                        <img src={imgOne} className="card-img-top" alt={imgOne} />

                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={imgThree} className="card-img-top" alt={imgOne} />
                        <div className="card-body">

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={imgFour} className="card-img-top" alt={imgOne} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;