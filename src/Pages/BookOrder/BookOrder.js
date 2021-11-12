import React, { useEffect, useRef, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Rating from "react-rating"
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router';

const BookOrder = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const nameRef = useRef('');
    const emailRef = useRef('');
    const productRef = useRef('');
    const addressRef = useRef('');
    const phoneRef = useRef('');

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const product = productRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;

        const booking = {
            name: name,
            email: email,
            product: product,
            address: address,
            phone: phone,
            status: "Pending"
        }
        fetch("https://pacific-tundra-63617.herokuapp.com/bookedOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Booked successfully....!");
                    e.target.reset();
                }
            })

    }


    useEffect(() => {
        fetch(`https://pacific-tundra-63617.herokuapp.com/products/${id}`)
            .then((res) => res.json())
            .then(data => {
                setProduct(data)
            });
    }, [id]);


    return (
        <div>
            <Navigation></Navigation>
            <div className="d-flex flex-column justify-content-center mb-5">
                <div>
                    <h1 className="text-center mt-5 mb-5">Book Now</h1>
                </div>
                <div className="row container mx-auto">
                    <div className="col-md-6 col-sm-12">
                        <div className="mx-auto mb-5">

                            <form onSubmit={handleBookingSubmit} className="d-flex flex-column container text-start">

                                <div className="mb-3 ">
                                    <label className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Name"
                                        ref={nameRef}
                                        value={user.displayName}
                                        required />
                                </div>

                                <div className="mb-3 ">
                                    <label className="form-label">Your Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Your Email"
                                        ref={emailRef}
                                        value={user.email}
                                        required />
                                </div>

                                <div className="mb-3 ">
                                    <label className="form-label">Your Product</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        ref={productRef}
                                        value={product?.name}
                                        required
                                    />
                                </div>

                                <div className="mb-3 ">
                                    <label className="form-label">Your Address</label>
                                    <input
                                        className="form-control"
                                        ref={addressRef}
                                        placeholder="Enter Your Address"
                                        required />
                                </div>

                                <div className="mb-3 ">
                                    <label className="form-label">Your Phone Number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        ref={phoneRef}
                                        placeholder="Enter Your Phone"
                                        required />
                                </div>

                                <div className="mb-3 ">
                                    <input
                                        type="submit"
                                        className="form-control btn btn-success"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h2 className="text-start">Here is your package details</h2>
                        <div className="card">
                            <img src={product?.img} className="card-img-top img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mt-3 mb-3">{product?.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <h5>Price: <span className="text-danger">${product?.price}</span></h5>
                                    <p>Rating: <Rating
                                        emptySymbol="far fa-star icon-color"
                                        fullSymbol="fas fa-star icon-color"
                                        initialRating={product?.rating}
                                        readonly >
                                    </Rating>
                                    </p>
                                </div>
                                <p className="text-start">{product?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default BookOrder;