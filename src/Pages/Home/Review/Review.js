import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview.js/SingleReview';

const Review = () => {
    const [reviews, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pacific-tundra-63617.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className="mt-5">Clients <span className="text-danger">Review</span></h1>
            <div className="container mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {reviews.length === 0 ? <div className="spinner-border text-danger mx-auto" role="status">
                        <span className="visually-hidden"></span>
                    </div> :
                        reviews.map(review =>
                            <div className="col">
                                <SingleReview
                                    key={review._id}
                                    review={review}
                                >
                                </SingleReview>
                            </div>)}
                </div>
            </div>
        </div>
    );
};

export default Review;