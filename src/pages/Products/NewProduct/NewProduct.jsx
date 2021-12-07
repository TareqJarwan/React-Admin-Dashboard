import React from 'react';

import './NewProduct.styles.scss';

const NewProduct = () => {
    return (
        <div className="new-product">
            <h1 className="new-product-title">New Product</h1>
            <form className="new-product-form">
                <div className="new-product-item">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="new-product-item">
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className="new-product-item">
                    <label>Stock</label>
                    <input type="text" placeholder="123" />
                </div>
                <div className="new-product-item">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="new-product-button">Create</button>
            </form>
        </div>
    )
}

export default NewProduct
