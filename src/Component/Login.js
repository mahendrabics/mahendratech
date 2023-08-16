
// 

import React, { useState, } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";




export const Login = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/auth/api/login/", {
                username: username,
                email: email,
                password: pass
            });



            console.log("API Response:", response.data);


            const authToken = response.data.token;
            console.log("Received authToken:", authToken);
            // setIsAuthenticated(true); // Use setIsAuthenticated here


            if (authToken) {
            navigate("/pie");
            alert("Login successful!");
            }
        } catch (error) {
            console.error("API error:", error);

            if (error.response && error.response.data) {
                console.error("API error data:", error.response.data);
                setErrorMessage("Credentials incorrect.");
            }
        }
    }


    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" id="username" name="username" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <button type="submit">Log In</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}


            </form>

            <p>Don't have an account? <Link to="/register">Register here.</Link></p>
        </div>
    );


}

export default Login;


