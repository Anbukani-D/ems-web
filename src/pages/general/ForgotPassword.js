// Forgot passsword Page

import React from 'react';
import "../../css/common.css";
import {ThemeButton, CustomInput} from "../../common/Components";
import {CheckEmail} from "../../common/Validation";
import Toast from 'react-bootstrap/Toast';
// import {initPasswordReset} from "../../common/apis/Auth";
// import { AesUtil } from "../../libraries/Secure";
// import { observer } from "mobx-react";
import LoadingBar from 'react-top-loading-bar'

// const AES = new AesUtil(128, 168);
class ForgotPassword extends React.Component {
    state={
        userName:'',
        userNameErr:'',
        toastMessage:false,
        progress:''
    }

    render() {
        return (
            <div className="themeBgColor py-5  screenHeight d-flex justify-content-center">
                 <LoadingBar
                    color='#DF5A14'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                />
                <div className="container-fluid py-5 my-5 d-flex justify-content-center">
                    <div className="col-md-5 my-5 bg-white rounded-lg">
                        {this.renderForgetPassword()}
                    </div>
                </div>             
            </div>
        )
    }

    // Render Forget password function

    renderForgetPassword() {
        return(
            <div className="col-md-12 py-5">
                <form onSubmit={this.onSubmitForgotPassword}>
                    <div className="my-5">
                        <p className="mediumText font-weight-bold text-center">Please Enter your Email ID</p>
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
                            error
                        />
                    </div>
                    {this.renderToastMessage()}   
                    <div className="my-5 col-md-12">
                        <ThemeButton type="submit" wrapperClass="btn themeActiveColor col-md-12 fontStyle font-weight-bold gigaText mt-3 text-white" label="Submit" />
                    </div>
                </form> 
            </div>
        )
    }

    // Empty input validation
    ValidateAll = ( ) => {
        const userNameInput = this.validateUsername();
        if (userNameInput ) {
            return true;
        } else {
            return false;   
        }
    }
    // Validation for username
    validateUsername = () => {
        const usernameError = CheckEmail(this.state.userName);
        if (usernameError === 1) {
            this.setState({ userNameErr: 'Email empty' });
            return false;
        } else if (usernameError === 2) {
            this.setState({ userNameErr: 'Invalid user name' });
            return false;
        } else return true;
    };

     renderToastMessage = () =>{
        return (
            <div className="borderStyle borderColor">
              <Toast onClose={() => this.props.history.replace('/login')} show={this.state.toastMessage} delay={3000} autohide>
                <Toast.Body>Check your Mail</Toast.Body>
              </Toast>
            </div>
        );
      }

    
    // onsubmit function for forget password

    onSubmitForgotPassword = async (e) =>{
        e.preventDefault();
        const allValidation = this.ValidateAll()
        if (allValidation) {
            // this.setState({ error: "", loading: true });
            // let requestBody = {
            // userName: await AES.encrypt(this.state.userName),
            // };
            // const response = await initPasswordReset(requestBody);
            // if (response && response.status && response.result) {
                this.setState({progress:100, toastMessage:true}) 
            //     } else if (response && !response.status) {
            //     this.setState({ error: response.message, loading: false });
            //     }
            //     return false;
             }; 
        }
}




export default ForgotPassword