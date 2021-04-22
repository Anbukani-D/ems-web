// Apply leave Page
// 16-02-2021

import React from 'react';
import "../../css/common.css";
import {CustomSelect, CustomDatePicker, CustomInput, ThemeButton} from "../../common/Components";
import {CheckUserName, CheckPhone, DropDownCheck, CheckDob} from "../../common/Validation";
import {leaveTypeOptions,sessionTypeOptions } from '../../common/DropDownList'
import { applyLeave } from '../../common/Apis/hr/Leave';

class ApplyLeave extends React.Component {
    state={
        typeOfLeave:'',
        fromDate:null,
        toDate:null,
        fromSession:'',
        toSession:'',
        reason:'',
        contactNumber:'',
        show:false,
        target:false,
        ref:null,
        current:null,
        progress:'',
        loading:false
    }
    render(){
        return(
            <>
                {this.renderApplyLeave()}  
            </>
                    
        )
    }

    // Render Apply leave 
    renderApplyLeave() {
        return(    
            <div>   
                <form onSubmit={this.onSubmitApplyLeave}>
                    <div className="mt-2">
                        <CustomSelect
                            placeholder="Type of Leave*"
                            value={this.state.typeOfLeave}
                            options ={leaveTypeOptions}
                            onChange={(e)=>this.setState({typeOfLeave:e.target.value})}
                            customError={this.state.typeOfLeaveErr}
                            onFocus={() =>
                                this.setState({
                                    typeOfLeaveErr: '',
                                })
                            }
                            error
                        />
                    </div>
                    <div className="row">
                        <div className="col">
                            <div>
                                <CustomDatePicker
                                    label="From Date*"
                                    selected={this.state.fromDate}
                                    onChange={(value) => {
                                        this.setState({ fromDate: value });
                                    }}
                                    value={this.state.fromDate}
                                    onSelect={this.fromDateHandleChange}
                                    customError={this.state.fromDateErr}
                                    onFocus={() =>
                                        this.setState({
                                            fromDateErr: '',
                                        })
                                    }
                                    error
                                />
                            </div>
                            <div>
                                <CustomDatePicker
                                    label="To Date*"
                                    selected={this.state.toDate}
                                    onChange={(value) => {
                                        this.setState({ toDate: value });
                                    }}
                                    value={this.state.toDate}
                                    onSelect={this.toDateHandleChange}
                                    customError={this.state.toDateErr}
                                    onFocus={() =>
                                        this.setState({
                                            toDateErr: '',
                                        })
                                    }
                                    error
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <CustomSelect
                                    placeholder="From Session*"
                                    value={this.state.fromSession}
                                    options ={sessionTypeOptions}
                                    onChange={(e)=>this.setState({fromSession:e.target.value})}
                                    customError={this.state.fromSessionErr}
                                    onFocus={() =>
                                        this.setState({
                                            fromSessionErr: '',
                                        })
                                    }
                                    error
                                    
                                />
                                <CustomSelect
                                    placeholder="To Session*"
                                    value={this.state.toSession}
                                    options ={sessionTypeOptions}
                                    onChange={(e)=>this.setState({toSession:e.target.value})}
                                    customError={this.state.toSessionErr}
                                    onFocus={() =>
                                        this.setState({
                                            toSessionErr: '',
                                        })
                                    }
                                    error
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <CustomInput  
                            placeholder="Reason *" 
                            value={this.state.reason}
                            multiline
                            rows={4}
                            fieldStyle="outlined"
                            onChange={(e)=>this.setState({reason:e.target.value})}
                            customError={this.state.reasonErr}
                            onFocus={() =>
                                this.setState({
                                    reasonErr: '',
                                })
                            }
                            error
                        />
                    </div>
                    <div className="mt-2">
                        <CustomSelect
                            placeholder="Approval"
                            value={this.state.approval}
                            options ={leaveTypeOptions}
                            onChange={(e)=>this.setState({approval:e.target.value})}
                            customError={this.state.approvalErr}
                            error
                        />
                    </div>
                    <div className="mt-2">
                        <CustomInput  
                            placeholder="Contact *" 
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
                    { this.state.loading ?
                    <>
                    <span
                        className="spinner-border spinner-border-sm themeActiveFont"
                        role="status"
                        aria-hidden="false"
                        loading="false"
                    >
                    </span>
                    <span className="smallText themeActiveFont">Loading</span>
                    </>
                    :
                    null
                    }
                    <ThemeButton type="submit" wrapperClass="btn themeActiveColor col-md-12 text-white fontStyle normalText mt-3" label="Apply Leave"/> 
                </form> 
            </div>
        )
    }
    
    // Handle change function for leave type
    leaveTypeHandleChange = (typeOfLeave) => {
        this.setState({ typeOfLeave, typeOfLeaveErr: '' });
    }

    // Handle change function for from session
    fromSessionHandleChange = (fromSession )=> {
        this.setState({ fromSession, fromSessionErr: '' });
    }

    // Handle change function for to session
    toSessionHandleChange = (toSession) => {
        this.setState({ toSession, toSessionErr: '' });
    }

    // Handle change function for from date
    fromDateHandleChange = (fromDate) => {
        this.setState({fromDate, fromDateErr:''});
    };

    // Handle change function for to date
    toDateHandleChange = toDate => {
        this.setState({toDate, toDateErr:''});
    };

    // Empty apply leave input validation 
    ValidateAllApplyLeave = ( ) => {
        const typeOfLeaveInput = this.validateTypeOfLeave();
        const fromDateInput = this.validateFromDate();
        const toDateInput = this.validateToDate();
        const fromSessionInput = this.validateFromSession();
        const toSessionInput = this.validateToSession();
        const contactNumberInput = this.validateContactNumber();
        const reasonInput = this.validateReason();        
        console.log('validation',typeOfLeaveInput, contactNumberInput, fromSessionInput,toSessionInput, fromDateInput, toDateInput, reasonInput )
        if (typeOfLeaveInput && contactNumberInput && fromSessionInput && toSessionInput && fromSessionInput && fromDateInput && toDateInput && reasonInput ) {
            return true;
        } else {
            return false;   
        }
    }

    // Validation for type of leave
    validateTypeOfLeave = () => {
        const typeOfLeaveError = DropDownCheck(this.state.typeOfLeave);
        if (typeOfLeaveError === 1) {
            this.setState({ typeOfLeaveErr: 'From session empty' });
            return false;
        } else return true;
    };

    // Validation for fromSession
    validateFromSession = () => {
        const fromSessionError = DropDownCheck(this.state.fromSession);
        if (fromSessionError === 1) {
            this.setState({ fromSessionErr: 'From session empty' });
            return false;
        } else return true;
    };
    // Validation for toSession
    validateToSession = () => {
        const toSessionError = DropDownCheck(this.state.toSession);
        if (toSessionError === 1) {
            this.setState({ toSessionErr: 'To session empty' });
            return false;
        } else return true;
    };
    // Validation for from date
    validateFromDate = () => {
        const fromDateError = CheckDob(this.state.fromDate);
        if (fromDateError === 1) {
            this.setState({ fromDateErr: 'From date empty' });
            return false;
        } else return true;
    };
    // Validation for to date
    validateToDate = () => {
        const toDateError = CheckDob(this.state.toDate);
        if (toDateError === 1) {
            this.setState({ toDateErr: 'To date empty' });
            return false;
        } else return true;
    };
    // Validation for Reason
    validateReason = () => {
        const reasonError = CheckUserName(this.state.reason);
        if (reasonError === 1) {
            this.setState({ reasonErr: 'Reason empty' });
            return false;
        } else if (reasonError === 2) {
            this.setState({ reasonErr: 'Invalid reason' });
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

    // onsubmit function for apply leave inputs

    onSubmitApplyLeave = async(e) =>{
        e.preventDefault();
        const allValidation = this.ValidateAllApplyLeave()
        if (allValidation) {
            let requestBody = {
                typeOfLeave: this.state.typeOfLeave,
                fromDate:this.state.fromDate,
                toDate:this.state.toDate,
                fromSession:this.state.fromSession,
                toSession:this.state.toSession,
                reason:this.state.reason,
                contactNumber:this.state.contactNumber,
            };
            let result = false
            result = await applyLeave(requestBody);
            this.setState({
                // error:result.errorCode ? result.errorCode : result.message
            });
            if (result && result.status) {
                alert('Leave Applied Successfully! ')
                this.props.history.push('/employeeProfile');
            }
        } 
    }

    
}
export default ApplyLeave;





  


