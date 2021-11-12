import React from 'react';

const OrderedItem = ({ orders, serial, deleteOrder }) => {
    const { product, email, address, status, _id } = orders;
    return (
        <>
            {orders.lenght === 0 ?
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> :
                <tr>
                    <th>{serial}</th>
                    <td>{product}</td>
                    <td>{email}</td>
                    <td>{address}</td>
                    <td>{status}</td>
                    <td>
                        {status === "Pending" ?
                            (<button onClick={() => deleteOrder(_id)} className="btn btn-danger">Cancel</button>)
                            :
                            (<button onClick={() => deleteOrder(_id)} className="btn btn-danger" disabled>Cancel</button>)
                        }
                    </td>
                </tr >}
        </>
    );
};

export default OrderedItem;