import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import OrderedItem from './OrderedItem/OrderedItem';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user, isLoading } = useAuth();

    useEffect(() => {
        fetch(`https://pacific-tundra-63617.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            })
    }, [myOrders, user?.email])

    const deleteOrder = (id) => {
        let warning = window.confirm("Are sure wanna delete this product?");
        const url = `https://pacific-tundra-63617.herokuapp.com/myOrders/${id}`;
        if (warning) {
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainingOrders = myOrders.filter((order) => order._id !== id);
                        setMyOrders(remainingOrders);
                    }
                })
        }
    }


    return (
        <>
            <div className="my-8 text-center mt-5 mb-5">
                <h3 className="text-3xl">
                    See Your Order List
                </h3>
            </div>
            {isLoading ?
                <div className="spinner-border text-danger" role="status">
                    <span className="sr-only"></span>
                </div>
                :
                <>
                    <div className="table-responsive">
                        <table className="table mb-5 container">
                            <thead>
                                <tr>
                                    <th scope="col">S/N</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Shipping Address</th>
                                    <th scope="col">Order Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myOrders.map((orders, index) => <OrderedItem
                                    key={orders._id}
                                    orders={orders}
                                    serial={index + 1}
                                    deleteOrder={deleteOrder}
                                ></OrderedItem>)}
                            </tbody>
                        </table>
                    </div>
                </>}
        </>
    );
};

export default MyOrders;