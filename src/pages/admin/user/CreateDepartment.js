import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput,  ProgressBar} from "../../../common/Components";
import {CheckUserName} from "../../../common/Validation";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';

class CreateDepartment extends React.Component {
    state={
        createDepartmentModal:false,
        departmentName:'',
        departmentId:'',
        progress:'',
        designation:'',

    }

render() {
    return (
       <>
        <ThemeButton wrapperClass="btn themeActiveColor text-white col-md-2 fontStyle  py-2 smallText m-2" label="Create Department" onClick={()=>{this.setState({createDepartmentModal:true})}}/>            
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
                <div className="d-flex justify-content-between">
                    <h3 className="fontStyle themeActiveFont pl-3">Create Department</h3>
                    <Icomoon style={{cursor:'pointer'}} icon="close" size={20} onClick={()=>{this.setState({createDepartmentModal:false})}}/>
                </div>
                <ProgressBar className="themeActiveColor"/>
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
                            />
                        </div>
                        <button type="submit" className="btn themeActiveColor text-white col-md-12 fontStyle mt-3 py-2 megaText">
                            SAVE
                        </button>
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

onSubmitCreateDepartment = (e) =>{
    console.log('here');
    e.preventDefault();
    const allValidation = this.ValidateAllDepartment()
        if (allValidation) {
            alert('Department created Successfully! ')
        } 
}
}
export default CreateDepartment;
