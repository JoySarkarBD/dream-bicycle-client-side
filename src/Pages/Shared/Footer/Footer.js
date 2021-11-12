import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark text-white pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12 text-start">
                        <h1>Dream Bicycle</h1>
                        <p>Keep you bike high and your head higher. No hour of life is wasted when it’s spent on two wheels. An intellectual is a man who doesn’t know how to park a bike. Have a passion life is boring without it. Great memories happen when you don’t know when you’re going. Adventure may hurt you but monotony will kill you.</p>
                    </div>
                    <div className="col-md-2 col-sm-12 text-start">
                        <h3>PAGES</h3>
                        <Nav.Link as={NavLink} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} className="text-white" to="/">Explore</Nav.Link>
                        <Nav.Link as={NavLink} className="text-white" to="/">Login</Nav.Link>
                    </div>
                    <div className="col-md-5 col-sm-12 text-start">
                        <h3>NEWSLETTER</h3>
                        <p> Subscibe to the Shaeng mailing list to receive updates on new arrivals,offers and other discount information.</p>
                        <input type="text" placeholder="Write your email here." />
                        <br />
                        <button className="btn btn-danger mt-3">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;