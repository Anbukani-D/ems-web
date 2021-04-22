// Change password modal

import React from 'react';
import "../../css/common.css";
import {ThemeButton, CustomInput, Layout} from "../../common/Components";
import {CheckPassword} from "../../common/Validation";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../libraries/Icomoon';
// import {initPasswordReset} from '../../common/Apis/Auth';
import LoadingBar from 'react-top-loading-bar'


class ChangePassword extends React.Component {
    state={
        oldPassword:'',
        password:'',
        confirmPassword:'',
        showOldPassword:true,
        showPassword:true,
        showConfirmPassword:true,
        changePasswordModal:false,
        progress:'',
    }

    render() {
        return (
            <Layout back="Settings" current="Change Passsword" pageTitle="Change Password">
                <LoadingBar
                    color='#DF5A14'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                />
                {this.renderChangePasswordModal()}
            </Layout>
        )
    }

    // Render change password modal function

    renderChangePasswordModal() {
        return(
           <div className="d-flex justify-content-center pt-5 mt-5">
               <div className="col-md-5 bg-white  p-4 borderStyle borderRadius">  
                    <form onSubmit={this.onSubmitChangePassword}>
                        <div className="mt-3">
                            <CustomInput  
                                placeholder="Old Password*"
                                value={this.state.oldPassword}
                                onChange={(e)=>this.setState({oldPassword:e.target.value})}
                                type={this.state.showOldPassword ? 'text' : 'password'}
                                iconName = {this.state.showOldPassword ? 'eyeslash':"eye"}
                                iconSize={30}
                                onFocus={() =>
                                    this.setState({
                                        oldPasswordErr: '',
                                    })
                                }
                                onClick={()=>this.setState({
                                    showOldPassword: !this.state
                                        .showOldPassword
                                })}
                                customError={this.state.oldPasswordErr}
                                error
                            />
                        </div>
                        <div className="mt-3">
                            <CustomInput  
                                placeholder="Password*"
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
                                error
                            />
                        </div>
                        <div className="mt-3">
                            <CustomInput  
                                placeholder="Confirm Password*"
                                value={this.state.confirmPassword}
                                onChange={(e)=>this.setState({confirmPassword:e.target.value})}
                                type={this.state.showConfirmPassword ? 'text' : 'password'}
                                iconName = {this.state.showConfirmPassword ? 'eyeslash':"eye"}
                                iconSize={30}
                                onFocus={() =>
                                    this.setState({
                                        confirmPasswordErr: '',
                                    })
                                }
                                onClick={()=>this.setState({
                                    showConfirmPassword: !this.state
                                        .showConfirmPassword
                                })}
                                customError={this.state.confirmPasswordErr}
                                error
                            />
                        </div>
                        <ThemeButton type="button" wrapperClass="btn themeActiveColor col-md-12 fontStyle mt-3 py-2 megaText text-white" label="SAVE" onClick={this.onSubmitChangePassword} />
                    </form> 
                </div>
            </div> 
        )    
    } 

    // Validation for old password
    validateOldPassword = () => {
        const oldPasswordError = CheckPassword(this.state.oldPassword);
        if (oldPasswordError === 1) {
            this.setState({ oldPasswordErr: 'Old password empty' });
            return false;
        } else if (oldPasswordError === 2) {
            this.setState({ oldPasswordErr: 'Invalid old password' });
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

    // Validation for confirm password
    validateConfirmPassword = () => {
        const confirmPasswordError = CheckPassword(this.state.confirmPassword);
        if (confirmPasswordError === 1) {
            this.setState({
                confirmPasswordErr: 'Empty confirm password'
            });
            return false;
        } else if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                confirmPasswordErr: 'Confirm password is not same as password'
            });
            return false;
        }
        return true;
    };

    // Empty  input validation 
    ValidateAllInputs = ( ) => {
        const oldPasswordInput = this.validateOldPassword();
        const passwordInput = this.validatePassword();
        const confirmPasswordInput =this.validateConfirmPassword();
        
        console.log('validation', oldPasswordInput, passwordInput, confirmPasswordInput )
        if (oldPasswordInput && passwordInput && confirmPasswordInput ) {
            return true;
        } else {
            return false;   
        }
    }

    //onsubmit function for change password inputs
    onSubmitChangePassword = async(e) =>{
        console.log('here')
        e.preventDefault();

        const allValidation = this.ValidateAllInputs()
        if (allValidation) {
            // let requestBody = {
            //     oldPassword:this.state.oldPassword,
            //     password:this.state.password
            // };
            // let result = false
            // result = await initPasswordReset(requestBody);
            this.setState({progress:100, 
                // error:result.errorCode ? result.errorCode : result.message
            });
            // if (result && result.status) {
            //     alert('Password changed Successfully! ')
            // this.props.history.replace('/employeeProfile')
                // this.props.history.push('/employeeProfile');
            // }
        } 
    }
}
export default ChangePassword;
