// Login Page
// 10-02-2021

import React from 'react';
import "../css/common.css";
import Logo from "../assets/images/logo.png";
import LoginImg from "../assets/LoginImg.svg";
import {ThemeButton, CustomInput} from "../common/Components";
import {CheckEmail, CheckPassword} from "../common/Validation";


class Login extends React.Component {
    state={
        userName:'',
        password:'',
        userNameErr:'',
        showPassword:true,
    }

    render() {
        return (
            <div className="loginBgColor screenSize">
                <div className="container-fluid">
                    <div className="col-md-12 row pt-4">
                        <div className="col-md-7 ">
                            <div className="col-md-12">
                                <img className="mt-5 pt-5" alt="Login" src={LoginImg} width="100%" />
                            </div> 
                        </div>
                        <div className="col-md-5">
                        {this.renderLogin()}
                        </div>
                    </div>
                </div>                    
            </div>
        )
    }

    // Render login function

    renderLogin() {
        console.log('here login')
        return(
            <div className="col-md-12 rounded-lg bg-white d-flex justify-content-center my-4">
                <form onSubmit={this.onSubmitLogin}>
                    <div className="col-md-12">
                        <div className="col-md-12 mt-2">
                            <img alt="Logo" src={Logo} width="80%" />
                        </div>
                        <h4 className="activeColor text-center gigaText">Welcome</h4>
                        <p className="text-center normalText">Please enter your login details.</p>  
                        <div className="col-md-12">
                            <div className="my-3">
                                <CustomInput  
                                    placeholder="Email" 
                                    fieldStyle="outlined"
                                    value={this.state.userName}
                                    onChange={(e)=>this.setState({userName:e.target.value})}
                                    customError={this.state.userNameErr}
                                    onFocus={() =>
                                        this.setState({
                                            userNameErr: '',
                                        })
                                    }
                                    iconName="mail"
                                    iconSize={30}
                                />
                            </div>
                            <div className="my-3">
                                <CustomInput  
                                    placeholder="Password"
                                    fieldStyle="outlined"
                                    value={this.state.password}
                                    onChange={(e)=>this.setState({password:e.target.value})}
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    iconName = {this.state.showPassword ? 'eyeslash':"eye"}
                                    iconSize={30}
                                    onFocus={() =>
                                        this.setState({
                                            passwordErr: '',
                                        })
                                    }
                                    onClick={()=>this.setState({
                                        showPassword: !this.state
                                            .showPassword
                                    })}
                                    customError={this.state.passwordErr}
                                />
                            </div>
                            <p className="smallText cursor-pointer">Forgot Password?</p>
                            <div className="mt-4 col-md-12 px-0">
                                <ThemeButton type="submit" wrapperClass="btn col-md-12 text-white fontStyle normalText mt-3" label="LOGIN"/>
                            </div>
                            <p className="smallText mt-5">
                                <span className="font-weight-bold ">WARNING:</span> 
                                    This EMS application is available only for authorized users of "IOS Integra Office Solutions". 
                                    If you are not an authorized user, Please disconnect the session by closing the browser immediately. 
                                    By accessing this system, you agree that your actions may be monitored if unauthorized user is suspected.  
                            </p>
                        </div> 
                    </div>  
                </form> 
            </div>
        )
    }
    // Validation for username
    validateUsername = () => {
        const usernameError = CheckEmail(this.state.userName);
        if (usernameError === 1) {
            this.setState({ userNameErr: 'Username empty' });
            return false;
        } else if (usernameError === 2) {
            this.setState({ userNameErr: 'Invalid user name' });
            return false;
        } else return true;
    };

    // Validation for password
    validatePassword = () => {
        const passwordError = CheckPassword(this.state.password);
        if (passwordError === 1) {
            this.setState({ passwordErr: 'Password empty' });
            return false;
        } else if (passwordError === 2) {
            this.setState({ passwordErr: 'Invalid password' });
            return false;
        } else return true;
    };

    // Empty input validation
    ValidateAll = ( ) => {
        const userNameInput = this.validateUsername();
        const passwordInput = this.validatePassword();
        console.log('validation',userNameInput,  passwordInput )
        if (userNameInput  && passwordInput) {
            return true;
        } else {
            return false;   
        }
    }

    // onsubmit function for login inputs

    onSubmitLogin = (e) =>{
        console.log('here',this.props.history.replace);
        e.preventDefault();
        const allValidation = this.ValidateAll()
            if (allValidation) {
                this.props.history.push("/dashboard");  
            }
            
    }
}




export default Login