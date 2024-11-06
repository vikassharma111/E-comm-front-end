import React, { useState ,useEffect } from "react";

const AddProduct = () => {
    const [name, setname] = React.useState('');
    const [price, setprice] = React.useState('');
    const [category, setcategory] = React.useState('');
    const [company, setcompany] = React.useState('');
    const [error, setError] = useState(null);
const addproduct = async ()=>{

    if (!name || !price || !category || !company) {
        setError("All fields are required.");
        return;
    }
    setError(null);

    console.warn(name,price,category,company);
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch("http://localhost:5000/add-product",{
        method:'post',
        body:JSON.stringify({name,price,category,company ,userId}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    result = await result.json();
    console.warn(result);
}
        
    return (
        <div className="product">
            <h1>Add product</h1>
            {error && <p className="error">{error}</p>}
            <input type="text" placeholder="Enter product name" className="inputbox"
            value={name}    onChange={(e) => { setname(e.target.value) }}
            />
            <input type="text" placeholder="Enter product price" className="inputbox"
             value={price}    onChange={(e) => { setprice(e.target.value) }}
            />
            <input type="text" placeholder="Enter product category" className="inputbox"
             value={category}    onChange={(e) => { setcategory(e.target.value) }}
            />
            <input type="text" placeholder="Enter product company" className="inputbox" 
              value={company}   onChange={(e) => { setcompany(e.target.value) }}
            />
            <button onClick={addproduct} className="appbutton">Add Product</button>

        </div>
    )
}

export default AddProduct;