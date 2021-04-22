// Edit employee modal

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput, ToolTip} from "../../../common/Components";
import {CheckUserName,  CheckPhone, CheckEmail} from "../../../common/Validation";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import Avtar from "../../../assets/images/avtar.png"
import Avatar from '@material-ui/core/Avatar';
import {editEmployee} from '../../../common/Apis/admin/Employee';
import LoadingBar from 'react-top-loading-bar'

class EditEmployee extends React.Component {
    constructor(){
        super();
        this.state={
            employeeName:'',
            contactNumber:'',
            email:'',
            address:'',
            uploadImage:'',
            employeeQualification:'',
            editEmployeeModal:false,
            progress:'',
            file:'',
            imagePreviewUrl:'',
        }
    }
    
    render() {
        return (
            <>
            <LoadingBar
                color='#DF5A14'
                progress={this.state.progress}
                onLoaderFinished={() => this.setState({progress:100})}
            />
                <ToolTip title="Edit">
                    <Icomoon style={{cursor:'pointer'}} className="float-right " icon="edit" size={20}  onClick={()=>{this.setState({editEmployeeModal:true})}}/>
                </ToolTip>
                {this.renderEditEmployeeModal()}
            </>
        )
    }

    // Render user edit modal function

    renderEditEmployeeModal() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = (<Avatar alt="Avtar" className="h-25 w-25 rounded-circle" src={Avtar}   />);
        if (imagePreviewUrl) {
            $imagePreview = (<Avatar alt="Avtar" className="h-25 w-35 rounded-circle" src={imagePreviewUrl}  />);
        }
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.editEmployeeModal}
            >    
                <div className="m-3">
                    <div className="d-flex justify-content-between border-bottom colorBorder  mx-3">
                        <div className="underLineStyle">
                            <span className="fontStyle themeActiveFont gigaText font-weight-bold ">
                                Edit Employee
                            </span>
                        </div>
                       <Icomoon icon="close" size={20} style={{cursor:'pointer'}} onClick={()=>{this.setState({editEmployeeModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitEditEmployee}>
                            <div className="d-flex justify-content-center">
                                {$imagePreview}
                                <input
                                    type="file"
                                    ref={(ref) => this.upload = ref}
                                    id="uploadimage"
                                    accept=".jpg,.jpeg,.png"
                                    style={{display: 'none'}}
                                    onChange={(e)=>this._handleImageChange(e)}
                                />
                                <Icomoon icon="pencil" color="#DF5A14" size={20} type="button" onClick={this.handleFileSelect}/> 
                            </div>
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
                            <ThemeButton type="submit" wrapperClass="btn themeActiveColor col-md-12 fontStyle mt-3 py-2 megaText text-white" label="SAVE" />
                        </form> 
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    } 
    // onclick Profile pic Selected
    handleFileSelect = (e) => {
        e.preventDefault();
        const fileSelector = document.getElementById('uploadimage');
        fileSelector.click();
    }
    /* 
     Preview Image Profile and call Api
    */
   _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
        this.setState({
            file: file,
            imagePreviewUrl: reader.result
        });
        }
        reader.readAsDataURL(file)
    }

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

    // Empty user input validation 
    ValidateAllUser = ( ) => {
        const employeeNameInput = this.validateEmployeeName();
        const contactNumberInput = this.validateContactNumber();
        const emailInput = this.validateEmail();
        const employeeQualificationInput = this.validateEmployeeQualification();
        if (employeeNameInput && contactNumberInput && emailInput && employeeQualificationInput) {
            return true;
        } else {
            return false;   
        }
    }

    // onsubmit function for create user inputs

    onSubmitEditEmployee = async(e) =>{
        e.preventDefault();
        const allValidation = this.ValidateAllUser()
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
            result = await editEmployee(requestBody);
            this.setState({ 
                progress:100,
                // error:result.errorCode ? result.errorCode : result.message
            });
            if (result && result.status) {
                alert('Employee Updated Successfully! ')
                this.props.history.push('/employee');
            }
        } 
    }
}
export default EditEmployee;
