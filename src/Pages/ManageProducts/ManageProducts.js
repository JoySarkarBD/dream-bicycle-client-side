import React, { useEffect, useState } from 'react';
import AllProducts from './AllProducts/AllProducts';

const ManageProducts = () => {
    const [bicycles, setBicycles] = useState([]);
    useEffect(() => {
        fetch('https://pacific-tundra-63617.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setBicycles(data))
    }, [bicycles])

    const deleteProduct = (id) => {
        let warning = window.confirm("Are sure wanna delete this product?");
        const url = `https://pacific-tundra-63617.herokuapp.com/products/${id}`;
        if (warning) {
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainingOrders = bicycles.filter((bicycle) => bicycle._id !== id);
                        setBicycles(remainingOrders);
                    }
                })
        }
    }

    return (
        <div>
            <div className="my-8 text-center mt-5 mb-5">
                <h3 className="text-3xl">
                    Manage All Products
                </h3>
            </div>
            <div className="table-responsive">
                <table className="table mb-5 container">
                    <thead>
                        <tr>
                            <th scope="col">S/N</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bicycles.map((bicycle, index) => <AllProducts
                            key={bicycle._id}
                            bicycle={bicycle}
                            serial={index + 1}
                            deleteProduct={deleteProduct}
                        ></AllProducts>)}
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default ManageProducts;