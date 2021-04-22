// Create Employee page

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput, CustomSelect,  CustomDatePicker} from "../../../common/Components";
import {CheckUserName, CheckPassword, CheckPhone, DropDownCheck, CheckEmail, CheckDob} from "../../../common/Validation";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import { createEmployee } from '../../../common/Apis/admin/Employee';
import LoadingBar from 'react-top-loading-bar'


let departmentOptions = [    
    {label:"IT", value:"it"},
    {label:"Operations", value:"operations"},
    {label:"HR", value:"hr"},
]
let designationOptions = [    
    {label:"Manager", value:"manager"},
    {label:"Software Developer", value:"softwareDeveloper"},
    {label:"Software Tester", value:"softwareTester"},
]
let userTypeOptions = [    
    {label:"Arun", value:"arun"},
    {label:"Priya", value:"priya"},
    {label:"Reena", value:"reena"},
]

class CreateEmployee extends React.Component {
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
        createEmployeeModal:false,
        designation:'',
        progress:''
    }

    render() {
        return (
            <>
                <LoadingBar
                    color='#DF5A14'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                />
                <ThemeButton type="button" wrapperClass="btn themeActiveColor text-white px-3 fontStyle  py-2 smallText" type="button" label="Create Employee" onClick={()=>{this.setState({createEmployeeModal:true})}}/>        
                {this.renderCreateEmployeeModal()}
            </>
        )
    }

    // Render user employee modal function

    // renderCreateEmployeeModal() {
    //     return(
    //         <Modal
    //             size="md"
    //             aria-labelledby="contained-modal-title-vcenter"
    //             centered
    //             show={this.state.createEmployeeModal}
    //         >    
    //             <div className="m-3">
    //                 <div className="d-flex justify-content-between border-bottom colorBorder  mx-3">
    //                     <div className="underLineStyle">
    //                         <span className="fontStyle themeActiveFont gigaText font-weight-bold">
    //                             Create Employee
    //                         </span>
    //                     </div>
    //                    <Icomoon icon="close" size={20} style={{cursor:'pointer'}} onClick={()=>{this.setState({createEmployeeModal:false})}}/>
    //                 </div>
    //                 <Modal.Body>
    //                     <form onSubmit={this.onSubmitCreateEmployee}>
    //                         <div className="mr-2">
    //                             <CustomInput  
    //                                 placeholder="Employee Name*" 
    //                                 value={this.state.employeeName}
    //                                 onChange={(e)=>this.setState({employeeName:e.target.value})}
    //                                 customError={this.state.employeeNameErr}
    //                                 onFocus={() =>
    //                                     this.setState({
    //                                         employeeNameErr: '',
    //                                     })
    //                                 }
    //                                 error
    //                             />
    //                         </div>
    //                         <div className="mr-2">
    //                             <CustomInput  
    //                                 placeholder="Contact Number*" 
    //                                 value={this.state.contactNumber}
    //                                 onChange={(e)=>this.setState({contactNumber:e.target.value})}
    //                                 customError={this.state.contactNumberErr}
    //                                 onFocus={() =>
    //                                     this.setState({
    //                                         contactNumberErr: '',
    //                                     })
    //                                 }
    //                                 error
    //                             />
    //                         </div>
    //                         <div className="mr-2">
    //                             <CustomInput  
    //                                 placeholder="Email*" 
    //                                 value={this.state.email}
    //                                 onChange={(e)=>this.setState({email:e.target.value})}
    //                                 customError={this.state.emailErr}
    //                                 onFocus={() =>
    //                                     this.setState({
    //                                         emailErr: '',
    //                                     })
    //                                 }
    //                                 error
    //                             />
    //                         </div>
    //                         <div className="mr-2">
    //                             <CustomInput  
    //                                 placeholder="Address*" 
    //                                 value={this.state.address}
    //                                 onChange={(e)=>this.setState({address:e.target.value})}
    //                                 customError={this.state.addressErr}
    //                                 onFocus={() =>
    //                                     this.setState({
    //                                         addressErr: '',
    //                                     })
    //                                 }
    //                                 error
    //                             />
    //                         </div>
    //                         <div className="mr-2">
    //                             <CustomInput  
    //                                 placeholder="Employee Qualification*" 
    //                                 value={this.state.employeeQualification}
    //                                 onChange={(e)=>this.setState({employeeQualification:e.target.value})}
    //                                 customError={this.state.employeeQualificationErr}
    //                                 onFocus={() =>
    //                                     this.setState({
    //                                         employeeQualificationErr: '',
    //                                     })
    //                                 }
    //                                 error
    //                             />
    //                         </div>
    //                         <div className="mt-3 ml-2">
    //                             <CustomSelect
    //                                 className="selectStyle smallText"
    //                                 placeholder="Department*"
    //                                 value={this.state.department}
    //                                 options ={departmentOptions}
    //                                 onChange={(e)=> this.setState({department:e.target.value})}
    //                                 error
    //                             />
    //                         </div>
    //                         <div className="mt-3 ml-2">
    //                             <CustomSelect
    //                                 className="selectStyle smallText"
    //                                 placeholder="Designation*"
    //                                 value={this.state.designation}
    //                                 options ={designationOptions}
    //                                 onChange={(e)=> this.setState({designation:e.target.value})}
    //                                 error
    //                             />
    //                         </div>
    //                         <div className="mt-3 ml-2">
    //                             <CustomSelect
    //                                 className="selectStyle smallText"
    //                                 placeholder="User Type*"
    //                                 value={this.state.userType}
    //                                 options ={userTypeOptions}
    //                                 onChange={(e)=> this.setState({userType:e.target.value})}
    //                                 error
    //                             />
    //                         </div>
    //                         <div className="mr-2">
    //                             <CustomInput  
    //                                 placeholder="Password*"
    //                                 value={this.state.password}
    //                                 onChange={(e)=>this.setState({password:e.target.value})}
    //                                 type={this.state.showPassword ? 'text' : 'password'}
    //                                 iconName = {this.state.showPassword ? 'eyeslash':"eye"}
    //                                 iconSize={30}
    //                                 onFocus={() =>
    //                                     this.setState({
    //                                         passwordErr: '',
    //                                     })
    //                                 }
    //                                 onClick={()=>this.setState({
    //                                     showPassword: !this.state
    //                                         .showPassword
    //                                 })}
    //                                 customError={this.state.passwordErr}
    //                                 error
    //                             />
    //                         </div>
    //                         <div className="mr-2">
    //                             <CustomInput  
    //                                 placeholder="Confirm Password*"
    //                                 value={this.state.confirmPassword}
    //                                 onChange={(e)=>this.setState({confirmPassword:e.target.value})}
    //                                 type={this.state.showConfirmPassword ? 'text' : 'password'}
    //                                 iconName = {this.state.showConfirmPassword ? 'eyeslash':"eye"}
    //                                 iconSize={30}
    //                                 onFocus={() =>
    //                                     this.setState({
    //                                         confirmPasswordErr: '',
    //                                     })
    //                                 }
    //                                 onClick={()=>this.setState({
    //                                     showConfirmPassword: !this.state
    //                                         .showConfirmPassword
    //                                 })}
    //                                 customError={this.state.confirmPasswordErr}
    //                                 error
    //                             />
    //                         </div>
    //                         <div className="ml-2">
    //                             <CustomDatePicker
    //                                 label="Joining Date"
    //                                 selected={this.state.joiningDate}
    //                                 onChange={(value) => {
    //                                     this.setState({ joiningDate: value });
    //                                 }}
    //                                 value={this.state.joiningDate}
    //                                 onSelect={this.joiningDateHandleChange}
    //                                 customError={this.state.joiningDateErr}
    //                                 error
    //                             />
    //                         </div>
    //                         <ThemeButton type="submit"  wrapperClass="btn themeActiveColor col-md-12 fontStyle mt-3 py-2 megaText text-white" label="SAVE" />
    //                     </form> 
    //                 </Modal.Body>
    //             </div>
    //         </Modal>  
    //     )    
    // } 
    renderCreateEmployeeModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.createEmployeeModal}
            >    
                <div className="m-3">
                    <div className="d-flex justify-content-between border-bottom colorBorder  mx-3">
                        <div className="underLineStyle">
                            <span className="fontStyle themeActiveFont gigaText font-weight-bold ">
                                Create Employee
                            </span>
                        </div>
                       <Icomoon icon="close" size={20} style={{cursor:'pointer'}} onClick={()=>{this.setState({createEmployeeModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitCreateEmployee}>
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
                                error
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
                                    error
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
                                    error
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
                                    error
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
                            <ThemeButton type="submit" wrapperClass="btn themeActiveColor col-md-12 fontStyle mt-3 py-2 megaText text-white" label="SAVE" />
                        </form> 
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    } 
    



    //Handle change function for department
    
    departmentHandleChange = department => {
        this.setState({ department, departmentErr: '' });
    }

    // Handle change function for desigantion
    designationHandleChange = designation => {
        this.setState({ designation, designationErr: '' });
    }

    // Handle change function for user type
    userTypeHandleChange = userType => {
        this.setState({ userType, userTypeErr: '' });
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
    // Validation for Address
    validateAddress = () => {
        const addressError = CheckUserName(this.state.address);
        if (addressError === 1) {
            this.setState({ addressErr: 'Address empty' });
            return false;
        } else if (addressError === 2) {
            this.setState({ addressErr: 'Invalid Address' });
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
        const joiningDateError = CheckDob(this.state.joiningDate);
        if (joiningDateError === 1) {
            this.setState({ joiningDateErr: 'joining date empty' });
            return false;
        } else return true;
    };

    // Empty user input validation 
    ValidateAll = ( ) => {
        const employeeNameInput = this.validateEmployeeName();
        const contactNumberInput = this.validateContactNumber();
        const emailInput = this.validateEmail();
        const addressInput = this.validateAddress();
        const employeeQualificationInput = this.validateEmployeeQualification();
        const departmentInput = this.validateDepartment();
        const passwordInput = this.validatePassword();
        const confirmPasswordInput =this.validateConfirmPassword();
        const joiningDateInput =this.validateJoiningDate();
        console.log('validation',employeeNameInput, contactNumberInput, emailInput,employeeQualificationInput, departmentInput,  passwordInput, joiningDateInput )
        if (employeeNameInput && contactNumberInput && emailInput && addressInput && employeeQualificationInput && departmentInput && passwordInput && confirmPasswordInput && joiningDateInput) {
            return true;
        } else {
            return false;   
        }
    }
    // onsubmit function for create user inputs

    onSubmitCreateEmployee = async(e) =>{
        e.preventDefault();
        const allValidation = this.ValidateAll()
        if (allValidation) {
            let requestBody = {
                employeeName: this.state.employeeName,
                contactNumber:this.state.contactNumber,
                email:this.state.email,
                address:this.state.address,
                employeeQualification:this.state.employeeQualification,
                department:this.state.department,
                password:this.state.password,
                joiningDate:this.state.joiningDate,
                designation:this.state.designation, 
            };
            let result = false
            result = await createEmployee(requestBody);
            this.setState({progress:100 , 
                // error:result.errorCode ? result.errorCode : result.message
            });
            if (result && result.status) {
                alert('Employee created Successfully! ')
                this.props.history.push('/employee');
            }
        } 
    }   
}
export default CreateEmployee;
