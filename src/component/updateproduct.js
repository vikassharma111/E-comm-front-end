import React, { useState, useEffect } from "react";
import { json, useParams ,useNavigate} from "react-router-dom";

const UpdateProduct = () => {
    const [name, setname] = React.useState('');
    const [price, setprice] = React.useState('');
    const [category, setcategory] = React.useState('');
    const [company, setcompany] = React.useState('');
    const params = useParams();
    const navigate =useNavigate();


    useEffect(()=>{
        
        getproductdetails();
    },[])
    const getproductdetails=async()=>{
        console.warn(params)    
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result =await result.json();
        setname(result.name);
        setprice(result.price);
        setcategory(result.category);
        setcompany(result.company);
    }

    const Updateproduct = async () => {

        console.warn(name, price,category, company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method :'put',
            body:JSON.stringify({name, price,category, company}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/');

    }

    return (
        <div className="product">
            <h1>Udate product</h1>

            <input type="text" placeholder="Enter product name" className="inputbox"
                value={name} onChange={(e) => { setname(e.target.value) }}
            />
            <input type="text" placeholder="Enter product price" className="inputbox"
                value={price} onChange={(e) => { setprice(e.target.value) }}
            />
            <input type="text" placeholder="Enter product category" className="inputbox"
                value={category} onChange={(e) => { setcategory(e.target.value) }}
            />
            <input type="text" placeholder="Enter product company" className="inputbox"
                value={company} onChange={(e) => { setcompany(e.target.value) }}
            />
            <button onClick={Updateproduct} className="appbutton">Update Product</button>

        </div>
    )
}

export default UpdateProduct;