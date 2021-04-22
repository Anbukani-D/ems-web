// Events Page
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import {ThemeButton, CustomInput,  CustomDatePicker} from "../../../common/Components";
import {CheckUserName,   CheckDob} from "../../../common/Validation";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import {createHoliday} from '../../../common/Apis/admin/Event';
import LoadingBar from 'react-top-loading-bar'


class CreateHoliday extends React.Component {
    state={
        createHolidayModal:false,
        holidayName:'',
        date:null,
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
                <ThemeButton wrapperClass="btn themeActiveColor text-white  fontStyle mx-4 py-2 my-2 smallText" type="button" label="Create Holiday" onClick={()=>{this.setState({createHolidayModal:true})}}/> 
                {this.renderCreateHolidayModal()}
            </>
        )
    }

    renderCreateHolidayModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.createHolidayModal}
            >    
                <div className="m-3">
                    <div className="d-flex justify-content-between border-bottom colorBorder  mx-3">
                        <div className="underLineStyle">
                            <span className="fontStyle themeActiveFont gigaText font-weight-bold ">
                                Create Holiday
                            </span>
                        </div>
                        <Icomoon style={{cursor:'pointer'}} icon="close" size={20} onClick={()=>{this.setState({createHolidayModal:false})}}/>
                    </div>
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
                                error
                            />
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Date*" 
                                    type='date'
                                    value={this.state.date}
                                    onChange={(e)=>this.setState({date:e.target.value})}
                                    customError={this.state.dateErr}
                                    onFocus={() =>
                                        this.setState({
                                            dateErr: '',
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

    onSubmitCreateHoliday = async(e) =>{
        e.preventDefault();
        const allValidation = this.ValidateAllHoliday()
        if (allValidation) {
            let requestBody = {
                holidayName: this.state.holidayName,
                date:this.state.date,
            };
            let result = false
            result = await createHoliday(requestBody);
            this.setState({ 
                progress:100,
                // error:result.errorCode ? result.errorCode : result.message
            });
            if (result && result.status) {
                alert('Holiday created Successfully! ')
                // this.props.history.push('/event');
            }
        } 
    }
}

export default CreateHoliday;

 