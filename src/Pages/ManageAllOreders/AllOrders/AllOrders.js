import React from 'react';

const AllOrders = ({ orders, serial, rejectOrder, handleUpdateStatus }) => {
    const { product, email, status, name } = orders;
    return (
        <>
            {
                orders.lenght === 0 ? <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> :
                    <tr>
                        <th scope="row">{serial}</th>
                        <td>{name}</td>
                        <td>{product}</td>
                        <td>{email}</td>
                        <td>
                            {orders.status === "Pending" ? (
                                <button
                                    onClick={() => handleUpdateStatus(orders._id)}
                                    type="button"
                                    className="btn btn-warning">
                                    {status}
                                </button>)
                                :
                                <button className="btn btn-success">
                                    Shipped
                                </button>
                            }
                        </td>
                        <td>{orders.status === "Pending" ? (
                            <button onClick={() => rejectOrder(orders._id)} type="button" className="btn btn-danger">Reject</button>
                        ) :
                            <button onClick={() => rejectOrder(orders._id)} type="button" className="btn btn-danger" disabled>Reject</button>
                        }
                        </td>
                    </tr>
            }
        </>
    );
};

export default AllOrders;