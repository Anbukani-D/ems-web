// Create department modal

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput} from "../../../common/Components";
import {CheckUserName} from "../../../common/Validation";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import {createDepartment} from '../../../common/Apis/admin/Department';
import LoadingBar from 'react-top-loading-bar'

class CreateDepartment extends React.Component {
    state={
        createDepartmentModal:false,
        departmentName:'',
        departmentId:'',
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
                <ThemeButton type="button" wrapperClass="btn themeActiveColor text-white fontStyle  py-2 smallText mx-4 my-1" label="Create Department" onClick={()=>{this.setState({createDepartmentModal:true})}}/>            
                {this.renderDepartmentCreateModal()}
            </>
        )
    }

// Render create Department modal function

    renderDepartmentCreateModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.createDepartmentModal}
            >    
                <div className="m-3">
                    <div className="d-flex justify-content-between border-bottom colorBorder  mx-3">
                        <div className="underLineStyle">
                            <span className="fontStyle themeActiveFont gigaText font-weight-bold ">
                                Create Department
                            </span>
                        </div>
                        <Icomoon style={{cursor:'pointer'}} icon="close" size={20} onClick={()=>{this.setState({createDepartmentModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitCreateDepartment}>
                            <CustomInput  
                                placeholder="Department Name*" 
                                value={this.state.departmentName}
                                onChange={(e)=>this.setState({departmentName:e.target.value})}
                                customError={this.state.departmentNameErr}
                                onFocus={() =>
                                    this.setState({
                                        departmentNameErr: '',
                                    })
                                }
                                error
                            />
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Department ID*" 
                                    value={this.state.departmentId}
                                    onChange={(e)=>this.setState({departmentId:e.target.value})}
                                    customError={this.state.departmentIdErr}
                                    onFocus={() =>
                                        this.setState({
                                            departmentIdErr: '',
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

    // Validation for Department Name
    validateDepartmentName = () => {
        const departmentNameError = CheckUserName(this.state.departmentName);
        if (departmentNameError === 1) {
            this.setState({ departmentNameErr: 'Department name empty' });
            return false;
        } else if (departmentNameError === 2) {
            this.setState({ departmentNameErr: 'Invalid Department name' });
            return false;
        } else return true;
    };

    // Validation for Employee Name
    validateDepartmentId = () => {
        const departmentIdError = CheckUserName(this.state.departmentId);
        if (departmentIdError === 1) {
            this.setState({ departmentIdErr: 'Department id empty' });
            return false;
        } else if (departmentIdError === 2) {
            this.setState({ departmentIdErr: 'Invalid department id' });
            return false;
        } else return true;
    };


    // Empty department input validation
    ValidateAllDepartment = ( ) => {
        const departmentNameInput = this.validateDepartmentName();
        const departmentIdInput = this.validateDepartmentId();
        console.log('validation', departmentNameInput,  departmentIdInput )
        if ( departmentNameInput && departmentIdInput ) {
            return true;
        } else {
            return false;   
        }
    }


    // onsubmit function for create department inputs

    onSubmitCreateDepartment = async(e) =>{
        e.preventDefault();
        const allValidation = this.ValidateAllDepartment()
        if (allValidation) {
            // call API to create Department
            let requestBody = {
                departmentName: this.state.departmentName,
                departmentId: this.state.departmentId,
            };
            let result = false;
            result = await createDepartment(requestBody);
            this.setState({
                progress:100,
                // error: 
                //     result.errorCode ? result.errorCode : result.message
            });
            if (result && result.status) {
                alert('Department created Successfully! ')
                this.props.history.push('/department');
            }
        } 
    }
}
export default CreateDepartment;
