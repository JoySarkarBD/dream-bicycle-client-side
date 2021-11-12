import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pacific-tundra-63617.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="mt-5 mb-5 text-center">
                <h1>New <span className="text-danger">Bicycles</span></h1>
            </div>
            <div className="container mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products.length === 0 ? <div className="spinner-border text-danger mx-auto" role="status">
                        <span className="visually-hidden"></span>
                    </div> :
                        products.map(product =>
                            <div className="col">
                                <Product
                                    key={product._id}
                                    product={product}
                                >
                                </Product>
                            </div>).slice(0, 6)}
                </div>
            </div>
        </div>
    );
};

export default Products;