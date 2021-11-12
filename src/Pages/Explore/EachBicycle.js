import React from 'react';
import { Link } from 'react-router-dom';
import Rating from "react-rating"
import "./EachBicycle.css"

const EachBicycle = (props) => {
    // console.log(props);
    const { _id, name, img, description, price, rating } = props.eachBicycle;
    return (
        <div>
            <img src={img} className="card-img-top img-size" alt="..." />
            <div className="card-body">
                <h5 className="card-title mt-3 mb-3">{name}</h5>
                <div className="d-flex justify-content-between">
                    <h5>Price: <span className="text-danger">${price}</span></h5>
                    <p>Rating:
                        <Rating
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            initialRating={rating}
                            readonly >

                        </Rating>
                    </p>
                </div>
                <p className="text-start">{description}</p>
            </div>
            <Link to={`/bookOrder/${_id}`}><button type="button" className="btn btn-danger w-100">Buy Now</button></Link>
        </div>
    );
};

export default EachBicycle;