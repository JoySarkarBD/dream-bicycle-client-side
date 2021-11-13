import React, { useState } from 'react';


const AddAProduct = () => {

    const [addProductInfo, setNewProductInfo] = useState({});

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...addProductInfo };
        newInfo[field] = value;
        // console.log(addProductInfo);
        setNewProductInfo(newInfo);
    }

    const handleAddProductSubmit = (e) => {
        e.preventDefault();
        const newProduct = { ...addProductInfo }
        // console.log(newProduct);
        fetch("https://pacific-tundra-63617.herokuapp.com/addProducts", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Product Added successfully....!");
                    e.target.reset()
                }
            });
    }



    return (
        <div>
            <form onSubmit={handleAddProductSubmit} className="d-flex flex-column container text-start col-md-6 col-sm-12 mt-5 mb-5">
                <h1 className="text-center mb-4">Add A New Product</h1>
                <div className="mb-3 ">
                    <label className="form-label">Enter Product Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Product Name"
                        onBlur={handleOnBlur}
                        required />
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Enter Product Rating</label>
                    <input
                        type="number"
                        name="rating"
                        className="form-control"
                        placeholder="Enter Product Rating"
                        onBlur={handleOnBlur}
                        required />
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Enter Product Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="Enter Product Rating"
                        onBlur={handleOnBlur}
                        required />
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Enter Product Price</label>
                    <input
                        type="number"
                        name="price"
                        className="form-control"
                        placeholder="Enter Product Price"
                        onBlur={handleOnBlur}
                        required />
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Product Image</label>
                    <input
                        name="img"
                        className="form-control"
                        placeholder="Enter Product Image Url"
                        onBlur={handleOnBlur}
                        required />
                </div>

                <input type="submit" className={"btn btn-success"} />
            </form>
        </div>
    );
}

export default AddAProduct;