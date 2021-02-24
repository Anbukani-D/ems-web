// Events Page
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput,  CustomDatePicker, ProgressBar} from "../../../common/Components";
import {CheckUserName,   CheckDob} from "../../../common/Validation";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';


class CreateHoliday extends React.Component {
    state={
        holidayName:'',
        date:null,
        createHolidayModal:false,
    }

    render() {
        return (
            <>
            <ThemeButton wrapperClass="btn themeActiveColor text-white col-md-2 fontStyle mx-4 py-2  smallText" type="button" label="Create Holiday" onClick={()=>{this.setState({createHolidayModal:true})}}/> 
                {this.renderCreateHolidayModal()}
            </>
        )
    }
    // Render Holiday create modal function

    renderCreateHolidayModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.createHolidayModal}
            >    
                <div className="m-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fontStyle themeActiveFont pl-3">Create Holiday</h3>
                        <Icomoon style={{cursor:'pointer'}} icon="close" size={20} onClick={()=>{this.setState({createHolidayModal:false})}}/>
                    </div>
                    <ProgressBar/>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitCreateHoliday}>
                            <CustomInput  
                                placeholder="Holiday Name*" 
                                value={this.state.holidayName}
                                onChange={(e)=>this.setState({holidayName:e.target.value})}
                                customError={this.state.holidayNameErr}
                                onFocus={() =>
                                    this.setState({
                                        holidayNameErr: '',
                                    })
                                }
                            />
                            <div className="mt-3">
                                <CustomDatePicker
                                    label="Date"
                                    selected={this.state.date}
                                    onChange={(value) => {
                                        this.setState({ date: value });
                                    }}
                                    value={this.state.date}
                                    onSelect={this.dateHandleChange}
                                    customError={this.state.dateErr}
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

// Handle change function for to date
dateHandleChange = date => {
    this.setState({date, dateErr:''});
};

    

    // Validation for Holiday Name
    validateHolidayName = () => {
        const holidayNameError = CheckUserName(this.state.holidayName);
        if (holidayNameError === 1) {
            this.setState({ holidayNameErr: 'Holiday name empty' });
            return false;
        } else if (holidayNameError === 2) {
            this.setState({ holidayNameErr: 'Invalid holiday name' });
            return false;
        } else return true;
    };

    // Validation for from date
    validateDate = () => {
        const dateError = CheckDob(this.state.date);
        if (dateError === 1) {
            this.setState({ dateErr: 'Date empty' });
            return false;
        } else return true;
    };

    // Empty holiday input validation 
    ValidateAllHoliday = ( ) => {
        const holidayNameInput = this.validateHolidayName();
        const dateInput = this.validateDate();
        console.log('validation',holidayNameInput, dateInput )
        if (holidayNameInput && dateInput) {
            return true;
        } else {
            return false;   
        }
    }

    // onsubmit function for create holiday inputs

    onSubmitCreateHoliday = (e) =>{
        console.log('here');
        e.preventDefault();
        const allValidation = this.ValidateAllHoliday()
            if (allValidation) {
                alert('Holiday created Successfully! ')
            } 
    }


    
}
export default CreateHoliday;

    

  