// Apply leave Page
// 16-02-2021

import React from 'react';
import "../../css/common.css";
import Icomoon from "../../libraries/Icomoon";
import {CustomSelect, CustomDatePicker, CustomInput, ToolTip, ThemeButton} from "../../common/Components";
import Alert from 'react-bootstrap/Alert'
import {CheckUserName, CheckPhone, DropDownCheck, CheckDob} from "../../common/Validation";
import {leaveTypeOptions,sessionTypeOptions } from '../../common/DropDownList'

class ApplyLeave extends React.Component {
    state={
        typeOfLeave:'',
        fromDate:null,
        toDate:null,
        fromSession:'',
        toSession:'',
        reason:'',
        contactNumber:'',
        showPopup:false,
        target:null,
        ref:null,


    }
    render(){
        console.log('kjhjk')
        return(
            <>
                { !this.state.showPopup &&
                <>
                <ToolTip title="Apply Leave"> 
                    <Icomoon style={{cursor:'pointer'}} icon="floatBtn" size={50} onClick={()=>{this.setState({showPopup:true})}}/>
                </ToolTip>
                    </>
                }
            {this.renderApplyLeave()}
            </>

        )
    }

    renderApplyLeave() {
        return(
            <Alert className="col-md-4  borderStyle  borderColor bg-white" show={this.state.showPopup} >
                <div className="d-flex justify-content-between">
                    <p className="smallText font-weight-bold">Apply Leave</p>
                    <Icomoon icon="cirBtn" size={30} onClick={()=>this.setState({showPopup:false})}/>
                </div>
                <form onSubmit={this.onSubmitApplyLeave}>
                    <div className="mt-2">
                        <CustomSelect
                            placeholder="Type of Leave*"
                            value={this.state.typeOfLeave}
                            options ={leaveTypeOptions}
                            onChange = {this.leaveTypeHandleChange}
                            customError={this.state.typeOfLeaveErr}
                            onFocus={() =>
                                this.setState({
                                    typeOfLeaveErr: '',
                                })
                            }
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
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <CustomSelect
                                    placeholder="From Session*"
                                    value={this.state.fromSession}
                                    options ={sessionTypeOptions}
                                    onChange = {this.fromSessionHandleChange}
                                    customError={this.state.fromSessionErr}
                                    onFocus={() =>
                                        this.setState({
                                            fromSessionErr: '',
                                        })
                                    }
                                    
                                />
                                <CustomSelect
                                    placeholder="To Session*"
                                    value={this.state.toSession}
                                    options ={sessionTypeOptions}
                                    onChange = {this.toSessionHandleChange}
                                    customError={this.state.toSessionErr}
                                    onFocus={() =>
                                        this.setState({
                                            toSessionErr: '',
                                        })
                                    }
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
                        />
                    </div>
                    <div className="mt-2">
                        <CustomSelect
                            placeholder="Approval"
                            // value={this.state.approval}
                            // options ={leaveTypeOptions}
                            // onChange = {this.leaveTypeHandleChange}
                            // customError={this.state.approvalErr}
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
                        />
                    </div>
                    <ThemeButton type="submit" wrapperClass="btn themeActiveColor col-md-12 text-white fontStyle normalText mt-3" label="Apply Leave"/> 
                </form> 
            </Alert>
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

    onSubmitApplyLeave = (e) =>{
        console.log('here');
        e.preventDefault();
        const allValidation = this.ValidateAllApplyLeave()
        if (allValidation) {
            alert('Leave Applied Successfully! ')
        } 
    }

    
}
export default ApplyLeave;


// export default function ApplyLeave() {
//     const [show, setShow] = useState(false);
//     const [target, setTarget] = useState(null);
//     const ref = useRef(null);
  
//     const handleClick = (event) => {
//       setShow(!show);
//       setTarget(event.target);
//     };
  
//     return (
//       <div ref={ref}>
//         <Icomoon icon="floatBtn" size={50}  onClick={handleClick}/>
//         <Overlay
//           show={show}
//           target={target}
//           placement={"top","left"}
//           container={ref.current}
//           containerPadding={20}
//         >
//         <Popover className="col-md-4  borderStyle  borderColor">
//                 <div className="col-md-12 p-3">
//                     <div className="d-flex justify-content-between">
//                         <p className="smallText font-weight-bold">Apply Leave</p>
//                         <div className="">
//                             <Icomoon icon="bell" size={20}/>
//                         </div>
//                         <Icomoon icon="cirBtn" size={30}/>
                    
//                     </div>
//                     <div className="mt-2">
//                         <CustomSelect
//                             className="smallText"
//                             placeholder="Department*"
                           
//                             options ={leaveTypeOptions}
//                             // onChange = {this.leaveTypeHandleChange}
//                             // customError={this.state.typeOfLeaveErr}
//                         />
//                     </div>
//             </div>
//             </Popover>
//         </Overlay>
//       </div>
//     );
//   }
  


