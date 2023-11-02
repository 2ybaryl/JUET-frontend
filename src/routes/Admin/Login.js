import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './stylesheets/login.css';

const Login = () => {
    const navigate = useNavigate();
    const submitLogin = (e) => {
        e.preventDefault();
        if(document.getElementById('username').value === '' || document.getElementById('password').value === ''){
            document.getElementById('neg').innerHTML = 'Username/password empty';
            document.getElementById('neg').style.display = 'block'
            setTimeout(()=>{
                document.getElementById('neg').style.display = 'none'
                // navigate("/JUET/CMS/dashboard");
            }, 3000);
            return false;
        }
        console.log(document.getElementById('username').value);
        console.log(document.getElementById('password').value);
        axios.post('http://localhost:8000/JUET/CMS/login', {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }).then((response)=>{
            console.log('123');
            console.log(response);
            if(response.status==200){
                document.getElementById('pos').innerHTML = response.data.message;
                document.getElementById('pos').style.display = 'block'
                setTimeout(()=>{
                    document.getElementById('pos').style.display = 'none'
                    navigate("/JUET/CMS/dashboard");
                }, 3000);
            } else {
                document.getElementById('neg').innerHTML = response.data.message;
                document.getElementById('neg').style.display = 'block'
                setTimeout(()=>{
                    document.getElementById('neg').style.display = 'none'
                    // navigate("/JUET/CMS/dashboard");
                }, 3000);
            }
        }).catch((error)=>{
            console.log(error.response.data.message);
            document.getElementById('neg').innerHTML = error.response.data.message;
            document.getElementById('neg').style.display = 'block';
            setTimeout(()=>{
                document.getElementById('neg').style.display = 'none'
            }, 3000);
        })
    }

  return (
    <>
    <div class="container">
        <h1 class="title">Welcome to JUET CMS</h1>
        <div class="card">
            <form>
                <input id='username' type="text" placeholder="Username" required></input>
                <input id='password' type="password" placeholder="Password" required></input>
                <div class="buttons">
                    <a href="#" class="register-link">Register</a>
                    <button onClick={submitLogin} type="submit" class="login-button">Login</button>
                </div>
            </form>
        </div>
        <div id='pos'></div>
        <div id='neg'></div>
    </div>
    </>
  )
}

export default Login
