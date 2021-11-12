import React from 'react';
import Rating from 'react-rating';

const SingleReview = (props) => {

    const { name, rating, img, review } = props.review;

    return (
        <div>
            <div className="card rounded-3 border">
                <img src={img} className="card-img-top img-size w-25 mx-auto mt-3 rounded-3 border" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mt-3 mb-3">{name}</h5>
                    <div className="d-flex justify-content-between">
                        <p className="mx-auto"><Rating
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            initialRating={rating}
                            readonly >
                        </Rating></p>
                    </div>
                    <p className="text-start">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;