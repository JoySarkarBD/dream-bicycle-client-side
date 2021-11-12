import React from 'react';

const AllProducts = ({ bicycle, serial, deleteProduct }) => {
    const { name, description, price, _id } = bicycle;
    return (
        <>
            {bicycle.lenght === 0 ?
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> :
                <tr>
                    <th>{serial}</th>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{price}</td>
                    <td>
                        <button onClick={() => deleteProduct(_id)} className="btn btn-danger">Delete</button>
                    </td>
                </tr >}
        </>
    );
};

export default AllProducts;