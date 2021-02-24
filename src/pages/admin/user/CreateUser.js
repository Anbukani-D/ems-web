import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput, CustomSelect,  CustomDatePicker, ProgressBar, ToolTip} from "../../../common/Components";
import {CheckUserName, CheckPassword, CheckPhone, DropDownCheck, CheckEmail, CheckDob} from "../../../common/Validation";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';


let departmentOptions = [    
    {label:"IT", value:"it"},
    {label:"Operations", value:"operations"},
    {label:"HR", value:"hr"},
]

class CreateUser extends React.Component {
    state={
        employeeName:'',
        contactNumber:'',
        email:'',
        address:'',
        employeeQualification:'',
        department:'',
        password:'',
        confirmPassword:'',
        joiningDate:null,
        showPassword:true,
        showConfirmPassword:true,
        createDepartmentModal:false,
        progress:'',
        designation:'',

    }

render() {
    return (
       <>
        <ThemeButton wrapperClass="btn themeActiveColor text-white col-md-2 fontStyle  py-2 smallText m-2" type="button" label="Create User" onClick={()=>{this.setState({createUserModal:true})}}/>        
            {this.renderCreateUserModal()}
        </>
    )
}

 // Render user create modal function

renderCreateUserModal() {
    return(
        <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.state.createUserModal}
        >    
            <div className="m-3">
                <div className="d-flex justify-content-between">
                    <h3 className="fontStyle themeActiveFont pl-3">Create User</h3>
                    <Icomoon style={{cursor:'pointer'}} icon="close" size={20} onClick={()=>{this.setState({createUserModal:false})}}/>
                </div>
                <ProgressBar/>
                <Modal.Body>
                    <form onSubmit={this.onSubmitCreateUser}>
                        <CustomInput  
                            placeholder="Employee Name*" 
                            value={this.state.employeeName}
                            onChange={(e)=>this.setState({employeeName:e.target.value})}
                            customError={this.state.employeeNameErr}
                            onFocus={() =>
                                this.setState({
                                    employeeNameErr: '',
                                })
                            }
                        />
                        <div className="mt-3">
                            <CustomInput  
                                placeholder="Contact Number*" 
                                value={this.state.contactNumber}
                                onChange={(e)=>this.setState({contactNumber:e.target.value})}
                                customError={this.state.contactNumberErr}
                                onFocus={() =>
                                    this.setState({
                                        contactNumberErr: '',
                                    })
                                }
                            />
                        </div>
                        <div className="mt-3">
                            <CustomInput  
                                placeholder="Email*" 
                                value={this.state.email}
                                onChange={(e)=>this.setState({email:e.target.value})}
                                customError={this.state.emailErr}
                                onFocus={() =>
                                    this.setState({
                                        emailErr: '',
                                    })
                                }
                            />
                        </div>
                        <div className="mt-3">
                            <CustomInput  
                                placeholder="Address*" 
                                value={this.state.address}
                                onChange={(e)=>this.setState({address:e.target.value})}
                                customError={this.state.addressErr}
                                onFocus={() =>
                                    this.setState({
                                        addressErr: '',
                                    })
                                }
                            />
                        </div>
                        <div className="mt-3">
                            <CustomInput  
                                placeholder="Employee Qualification*" 
                                value={this.state.employeeQualification}
                                onChange={(e)=>this.setState({employeeQualification:e.target.value})}
                                customError={this.state.employeeQualificationErr}
                                onFocus={() =>
                                    this.setState({
                                        employeeQualificationErr: '',
                                    })
                                }
                            />
                        </div>
                        <div className="mt-3">
                            <CustomSelect
                                wapperClass="inputWrapper"
                                className="selectStyle smallText"
                                placeholder="Department*"
                                value={this.state.department}
                                options ={departmentOptions}
                                onChange = {this.departmentHandleChange}
                            />
                        </div>
                        <p>{this.state.department}</p>
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
                            />
                        </div>
                        <div className="mt-3">
                            <CustomInput  
                                placeholder="Confirm Password*"
                                value={this.state.confirmPassword}
                                onChange={(e)=>this.setState({confirmPassword:e.target.value})}
                                type={this.state.showConfirmPassword ? 'text' : 'confirmPassword'}
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
                            />
                        </div>
                        <div className="mt-3">
                            <CustomDatePicker
                                label="Joining Date"
                                selected={this.state.joiningDate}
                                onChange={(value) => {
                                    this.setState({ joiningDate: value });
                                }}
                                value={this.state.joiningDate}
                                onSelect={this.joiningDateHandleChange}
                                customError={this.state.joiningDateErr}
                            />
                        </div>
                        <p>{this.state.joiningDate}</p>
                        <button type="submit" className="btn themeActiveColor text-white col-md-12 fontStyle mt-3 py-2 megaText">
                            SAVE
                        </button>
                    </form> 
                </Modal.Body>
            </div>
        </Modal>  
    )    
} 

    // Handle change function for department
    
    departmentHandleChange = department => {
        this.setState({ department, departmentErr: '' });
    }

    // Handle change function for joining date
    joiningDateHandleChange = joiningDate => {
        this.setState({joiningDate, joiningDateErr:''});
    };

    // Validation for Employee Name
    validateEmployeeName = () => {
        const employeeNameError = CheckUserName(this.state.employeeName);
        if (employeeNameError === 1) {
            this.setState({ employeeNameErr: 'Employee name empty' });
            return false;
        } else if (employeeNameError === 2) {
            this.setState({ employeeNameErr: 'Invalid Employee name' });
            return false;
        } else return true;
    };

    // Validation for Contact Number
    validateContactNumber = () => {
        const contactNumberError = CheckPhone(this.state.contactNumber);
        if (contactNumberError === 1) {
            this.setState({ contactNumberErr: 'Contact Number empty' });
            return false;
        } else if (contactNumberError === 2) {
            this.setState({ contactNumberErr: 'Invalid Contact' });
            return false;
        } else return true;
    };

    // Validation for email
    validateEmail = () => {
        const emailError = CheckEmail(this.state.email);
        if (emailError === 1) {
            this.setState({ emailErr: 'Email empty' });
            return false;
        } else if (emailError === 2) {
            this.setState({ emailErr: 'Invalid email' });
            return false;
        } else return true;
    };

    // Validation for Employee Qualification
    validateEmployeeQualification = () => {
        const employeeQualificationError = CheckUserName(this.state.employeeQualification);
        if (employeeQualificationError === 1) {
            this.setState({ employeeQualificationErr: 'Employee qualification empty' });
            return false;
        } else if (employeeQualificationError === 2) {
            this.setState({ employeeQualificationErr: 'Invalid Employee qualification' });
            return false;
        } else return true;
    };

    // Validation for department
    validateDepartment = () => {
        const departmentError = DropDownCheck(this.state.department);
        if (departmentError === 1) {
            this.setState({ departmentErr: 'Department empty' });
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

    // Validation for joining date
    validateJoiningDate = () => {
        const joiningDateError = DropDownCheck(this.state.joiningDate);
        if (joiningDateError === 1) {
            this.setState({ joiningDateErr: 'joining date empty' });
            return false;
        } else return true;
    };

    // Empty user input validation 
    ValidateAllUser = ( ) => {
        const employeeNameInput = this.validateEmployeeName();
        const contactNumberInput = this.validateContactNumber();
        const emailInput = this.validateEmail();
        const employeeQualificationInput = this.validateEmployeeQualification();
        const departmentInput = this.validateDepartment();
        const passwordInput = this.validatePassword();
        const confirmPasswordInput =this.validateConfirmPassword();
        const joiningDateInput =this.validatejoiningDate();
        console.log('validation',employeeNameInput, contactNumberInput, emailInput,employeeQualificationInput, departmentInput,  passwordInput, joiningDateInput )
        if (employeeNameInput && contactNumberInput && emailInput && employeeQualificationInput && departmentInput && passwordInput && confirmPasswordInput && joiningDateInput) {
            return true;
        } else {
            return false;   
        }
    }
    // onsubmit function for create user inputs

    onSubmitCreateUser = (e) =>{
        console.log('here');
        e.preventDefault();
        const allValidation = this.ValidateAllUser()
            if (allValidation) {
                alert('User created Successfully! ')
            } 
    }
}
export default CreateUser;
