// Events Page
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput} from "../../../common/Components";
import {CheckUserName} from "../../../common/Validation";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import {createEmployeeType} from '../../../common/Apis/admin/EmployeeType';
import LoadingBar from 'react-top-loading-bar'


class CreateEmployeeType extends React.Component {
    state={
        name:'',
        code:'',
        createEmployeeTypeModal:false,
        progress:'',
    }

    render() {
        return (
            <>
                <LoadingBar
                    color='#DF5A14'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                />
                <ThemeButton type="button"  wrapperClass="btn themeActiveColor text-white px-3 fontStyle mx-4 my-1 smallText" type="button" label="Create Employee Type" onClick={()=>{this.setState({createEmployeeTypeModal:true})}}/> 
                {this.renderCreateEmployeeTypeModal()}
            </>
        )
    }
    
    // Render  create employee type modal function

    renderCreateEmployeeTypeModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.createEmployeeTypeModal}
            >    
                <div className="m-3">
                    <div className="d-flex justify-content-between border-bottom colorBorder mx-3">
                        <div className="underLineStyle">
                            <span className="fontStyle themeActiveFont gigaText font-weight-bold ">
                                Create Employee Type
                            </span>
                        </div>
                        <Icomoon style={{cursor:'pointer'}} icon="close" size={20} onClick={()=>{this.setState({createEmployeeTypeModal:false})}}/>
                    </div>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitCreateEmployeeType}>
                            <CustomInput  
                                placeholder="Name*" 
                                value={this.state.name}
                                onChange={(e)=>this.setState({name:e.target.value})}
                                customError={this.state.nameErr}
                                onFocus={() =>
                                    this.setState({
                                        nameErr: '',
                                    })
                                }
                                error
                            />
                            <div className="mt-3">
                                <CustomInput
                                    placeholder="Code*" 
                                    value={this.state.code}
                                    onChange={(e)=>this.setState({code:e.target.value})}
                                    customError={this.state.codeErr}
                                    onFocus={() =>
                                        this.setState({
                                            codeErr: '',
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

    
    // Validation for Holiday Name
    validateName = () => {
        const nameError = CheckUserName(this.state.name);
        if (nameError === 1) {
            this.setState({ nameErr: 'Name empty' });
            return false;
        } else if (nameError === 2) {
            this.setState({ nameErr: 'Invalid Name' });
            return false;
        } else return true;
    };

    // Validation for from code
    validateCode = () => {
        const codeError = CheckUserName(this.state.code);
        if (codeError === 1) {
            this.setState({ codeErr: 'Code empty' });
            return false;
        } else return true;
    };

    // Empty holiday input validation 
    ValidateAll = ( ) => {
        const nameInput = this.validateName();
        const codeInput = this.validateCode();
        console.log('validation',nameInput, codeInput )
        if (nameInput && codeInput) {
            return true;
        } else {
            return false;   
        }
    }

    // onsubmit function for create holiday inputs

    onSubmitCreateEmployeeType = async(e) =>{
        e.preventDefault();
        const allValidation = this.ValidateAll()
            if (allValidation) {
            let requestBody = {
                name: this.state.name,
                code:this.state.code, 
            };
            let result = false
            result = await createEmployeeType(requestBody);
            this.setState({ 
                progress:100,
                // error:result.errorCode ? result.errorCode : result.message
            });
            if (result && result.status) {
                alert('Employee type created Successfully! ')
                this.props.history.push('/employeeType');
            }
        } 
    }


    
}
export default CreateEmployeeType;

    

  