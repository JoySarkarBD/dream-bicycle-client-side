import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import EachBicycle from './EachBicycle';


const Explore = () => {
    const [bicycles, setBicycles] = useState([]);
    useEffect(() => {
        fetch('https://pacific-tundra-63617.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setBicycles(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <div className="mt-5 mb-5">
                <h1>All <span className="text-danger">Bicycles</span></h1>

                <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto mb-5">
                    {bicycles.length === 0 ?
                        <div className="spinner-border text-danger mx-auto" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        :
                        bicycles.map(bicycle => <div className="col">
                            <div className="card">
                                <EachBicycle key={bicycle._id} eachBicycle={bicycle}></EachBicycle>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;