import React from 'react';
import axios from 'axios';
import './stylesheets/login.css';

const Login = () => {

    const submitLogin = (e) => {
        e.preventDefault();
        
        console.log(document.getElementById('username').value);
        console.log(document.getElementById('password').value);
    }

  return (
    <>
    <div class="container">
        <h1 class="title">Welcome to JUET CMS</h1>
        <div class="card">
            <form>
                <input id='username' type="text" placeholder="Username"></input>
                <input id='password' type="password" placeholder="Password"></input>
                <div class="buttons">
                    <a href="#" class="register-link">Register</a>
                    <button onClick={submitLogin} type="submit" class="login-button">Login</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login
