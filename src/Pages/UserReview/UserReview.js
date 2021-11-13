import React, { useRef } from 'react';

const UserReview = () => {

    const nameRef = useRef("");
    const ratingRef = useRef("");
    const opinionRef = useRef("");
    const imgRef = useRef("");

    const handleSubmitReview = (e) => {
        e.preventDefault()
        const name = nameRef.current.value;
        const rating = ratingRef.current.value;
        const opinion = opinionRef.current.value;
        const img = imgRef.current.value;

        if (rating > 5) {
            alert('Rating must be under 5');
            return;
        }

        const review = {
            name: name,
            rating: rating,
            img: img,
            review: opinion,
        };
        fetch("https://pacific-tundra-63617.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Review Submitted successfully....!");
                    e.target.reset()
                }
            })

    }

    return (
        <div>
            <div className="d-flex flex-column justify-content-center mb-5">
                <div>
                    <h1 className="text-center mt-5 mb-5">Give A Review</h1>
                </div>
                <div className="row container mx-auto">
                    <div className="col-md-6 col-sm-12 mx-auto">
                        <div className="mx-auto mb-5">

                            <form onSubmit={handleSubmitReview} className="d-flex flex-column container text-start">

                                <div className="mb-3 ">
                                    <label className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        ref={nameRef}
                                        placeholder="Enter Your Name"
                                        required />
                                </div>

                                <div className="mb-3 ">
                                    <label className="form-label">Rating</label>
                                    <input
                                        type="number"
                                        ref={ratingRef}
                                        className="form-control"
                                        placeholder="Rate our service"
                                        required />
                                </div>

                                <div className="mb-3 ">
                                    <label className="form-label">Review</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        ref={opinionRef}
                                        placeholder="Give your review"
                                        required
                                    />
                                </div>

                                <div className="mb-3 ">
                                    <label className="form-label">Client Img</label>
                                    <input
                                        className="form-control"
                                        ref={imgRef}
                                        placeholder="Enter Your img"
                                    />
                                </div>
                                <input type="submit" className={"btn btn-success"} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;