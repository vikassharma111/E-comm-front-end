import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Productlist = () => {
    const [products, setproduct] = useState([]);
    useEffect(() => {

        getproducts();
    }, [])

    const getproducts = async () => {

        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setproduct(result);
    }

    const deleteProduct = async(id) => {
        let result =await fetch(`http://localhost:5000/product/${id}`,
            {method:"Delete"}
        );
        result =await result.json();
        if(result)
        {
            getproducts();
        }


    }
    const searchHandle=async(event)=>{
        let key =event.target.value;
        if(key)
        {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if(result)
            {
                setproduct(result);
            }
        }
        else
        {
            getproducts();

        }
       


    }
    return (
        <div className="product-list">
            <h3>product list</h3>
            <input className=".search-product" type="text" placeholder="Search Product" 
            onChange={searchHandle}
            />
            <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>operation</li>

            </ul>
            {
               products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>Delete</button>
                        <Link to={"/update/"+item._id}>Update</Link>
                        </li>

                    </ul>
                )
                
            }
        </div>
    )
}

export default Productlist; 