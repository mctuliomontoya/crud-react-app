import React from 'react';
import ReactDOM from 'react-dom/client'
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/login.css';

const listaUsuarios = [
    {username: "santy", password: "santiago"},
    {username: "root", password: "admin"}
];

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            logged: false,
        }
    }

    setUsername(event){
        this.setState({
            username: event,
            errorMessage: '',
        })
    }

    setPassword(event){
        this.setState({
            password: event,
            errorMessage: '',
        })
    }

    handleEnter(event) {
        if(event.key == "Enter"){
            event.preventDefault();
            console.log(event.key);
        }
    }

    handleLogin(event) {
        event.preventDefault();
        this.setState({
            errorMessage: '',
        });
        for(let i = 0; i < listaUsuarios.length; i++){
            if (this.state.username === listaUsuarios[i]["username"] && this.state.password === listaUsuarios[i]["password"]) {
                this.setState({
                    logged: true,
                });
            }
        }
        this.setState({
            errorMessage: 'Bad username or password',
        });
    };

    render() {
        return(
            <div className="login-parent">
                <div className="form-signin container">
                {this.state.logged && (
                    <Navigate to="/app/products" replace={true}/>
                )}
                <form>
                    <h1>WELCOME TO SISWEB</h1>
                    <p>Please, sign in</p>
                    <label htmlFor="username">Username</label>
                    <br></br>
                    <input type="text" 
                    id="username"
                    onChange={(event) => this.setUsername(event.target.value)}
                    onKeyDown={(event) => this.handleEnter(event)}></input>
                    <br></br>
                    <label htmlFor="password">Password</label>
                    <br></br>
                    <input type="password"
                    id="password"
                    onChange={(event) => this.setPassword(event.target.value)}
                    onKeyDown={(event) => this.handleEnter(event)}></input>
                    <br></br>
                    <button className="btn btn-primary"
                    onClick={(event) => this.handleLogin(event)}>SIGN IN</button>
                    <p className="error-msg">{this.state.errorMessage}</p>
                </form>
             </div>
            </div>
        );
    }
}

export default Login;