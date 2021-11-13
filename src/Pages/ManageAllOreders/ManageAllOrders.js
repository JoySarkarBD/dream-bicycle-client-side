import React, { useEffect, useState } from 'react';
import AllOrders from './AllOrders/AllOrders';

const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);

    

    useEffect(() => {
        fetch("https://pacific-tundra-63617.herokuapp.com/manageOrders")
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders])

    const rejectOrder = (id) => {
        let warning = window.confirm("Are sure wanna delete this order?");
        const url = `https://pacific-tundra-63617.herokuapp.com/manageOrders/${id}`
        if (warning) {
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        const remainingOrders = allOrders.filter(orders => orders._id !== id);
                        setAllOrders(remainingOrders);
                    }
                })
        }
    }

    const handleUpdateStatus = id => {
        const url = `https://pacific-tundra-63617.herokuapp.com/manageOrders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allOrders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Successfully updated status")
                }
            })
    }

    return (

        <div>
            <h1 className="mt-5 mb-5">Manage All Orders</h1>
            <div className="container col-md-12 col-sm-12">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Name</th>
                                <th scope="col">Product</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allOrders.map((orders, index) => <AllOrders
                                key={orders._id}
                                orders={orders}
                                serial={index + 1}
                                rejectOrder={rejectOrder}
                                handleUpdateStatus={handleUpdateStatus}
                            >
                            </AllOrders>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default ManageAllOrders;