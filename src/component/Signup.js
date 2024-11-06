import React, { useState ,useEffect } from "react";
import { json, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })

    const collectData = async () => {
        if (!name || !email || !password) {
            setError("All fields are required.");
            return;
        }

        setError(null);
        console.warn(name, email, password);


        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/')



    };

    return (
        <div className="register">
            <h1>Register</h1>
            {error && <p className="error">{error}</p>}
            <input
                className="inputbox"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <input
                className="inputbox"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
            />
            <input
                className="inputbox"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            />
            <button onClick={collectData} className="appbutton" type="button">
                Sign Up
            </button>
        </div>
    );
};

export default Signup;
