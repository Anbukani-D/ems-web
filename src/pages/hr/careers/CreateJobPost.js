// Careers Page
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import { ThemeButton, CustomInput, CustomSelect,  CustomDatePicker, ProgressBar} from "../../../common/Components";
import {CheckUserName, CheckDob, DropDownCheck, CheckAddress, CheckAmount} from "../../../common/Validation";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import { jobTypeOptions, specializationOptions, locationOptions, durationOptions } from '../../../common/DropDownList';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CreateJobPost extends React.Component {
    state={
        jobTitle:'',
        companyName:'',
        jobDescription:'',
        jobType:'',
        address:'',
        city:'',
        state:'',
        pincode:'',
        duration:'',
        salary:'',
        date:null,
        createJobPostModal:false,
        editorModal:false,
    }

    render() {
        return (
            <>
                <ThemeButton wrapperClass="btn themeActiveColor text-white col-md-1 fontStyle ml-5 py-2 smallText" label="Post Job" onClick={()=>{this.setState({createJobPostModal:true})}}/>
                {this.renderCreateJobPostModal()}
                {this.renderEditorModal()}
            </>
        )
        
    }
    // Render create job post modal function

    renderCreateJobPostModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.createJobPostModal}
            >    
                <div className="m-3">
                    <div className="d-flex justify-content-between p-3">
                        <h3 className="fontStyle themeActiveFont">Create Job Post</h3>
                        <Icomoon style={{cursor:'pointer'}} icon="close" size={20} onClick={()=>{this.setState({createJobPostModal:false})}}/>
                    </div>
                    <ProgressBar/>
                    <Modal.Body>
                        <form onSubmit={this.onSubmitJobPost}>
                            <CustomInput  
                                placeholder="Job Title*" 
                                value={this.state.jobTitle}
                                onChange={(e)=>this.setState({jobTitle:e.target.value})}
                                customError={this.state.jobTitleErr}
                                onBlur = {() => this.validateJobTitle()}
                                onFocus={() =>
                                    this.setState({
                                        jobTitleErr: '',
                                    })
                                }
                            />
                             <div className="mt-3">
                                <CustomInput  
                                    placeholder="Company Name*" 
                                    value={this.state.companyName}
                                    onChange={(e)=>this.setState({companyName:e.target.value})}
                                    customError={this.state.companyNameErr}
                                    onBlur = {() => this.validateCompanyName()}
                                    onFocus={() =>
                                        this.setState({
                                            companyNameErr: '',
                                        })
                                    }
                                />
                            </div>
                            <div className="mt-3">
                                <CustomInput  
                                    placeholder="Job Description*" 
                                    value={this.state.jobDescription}
                                    onChange={(e)=>this.setState({jobDescription:e.target.value})}
                                    customError={this.state.jobDescriptionErr}
                                    onBlur = {() => this.validateJobDescription()}
                                    multiline
                                    rows={4}
                                    onFocus={() =>
                                        this.setState({
                                            jobDescriptionErr: '',
                                        })
                                    }
                                />
                            </div>
                            <div className="mt-3">
                                <CustomSelect
                                    placeholder="Job Type*"
                                    value={this.state.jobType}
                                    options ={ jobTypeOptions }
                                    onChange = {this.jobTypeHandleChange}
                                    onBlur = {() => this.validateJobType()}
                                    customError={this.state.jobTypeErr}
                                    onFocus={() =>
                                        this.setState({
                                            jobTypeErr: '',
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
                                        onBlur = {() => this.validateAddress()}
                                        onFocus={() =>
                                            this.setState({
                                                addressErr: '',
                                            })
                                        }
                                    />
                                </div>
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <CustomInput  
                                        placeholder="City" 
                                        value={this.state.city}
                                        onChange={(e)=>this.setState({city:e.target.value})}
                                        customError={this.state.cityErr}
                                        onBlur = {() => this.validateCity()}
                                        onFocus={() =>
                                            this.setState({
                                                cityErr: '',
                                            })
                                        }
                                    />
                                </div>
                                <div className="col-md-4">
                                    <CustomInput  
                                        placeholder="State" 
                                        value={this.state.state}
                                        onChange={(e)=>this.setState({state:e.target.value})}
                                        customError={this.state.stateErr}
                                        onBlur = {() => this.validateState()}
                                        onFocus={() =>
                                            this.setState({
                                                stateErr: '',
                                            })
                                        }
                                    />
                                </div>
                                <div className="col-md-4">
                                    <CustomInput  
                                        placeholder="Pincode" 
                                        value={this.state.pincode}
                                        onChange={(e)=>this.setState({pincode:e.target.value})}
                                        customError={this.state.pincodeErr}
                                        onBlur = {() => this.validatePincode()}
                                        onFocus={() =>
                                            this.setState({
                                                stateErr: '',
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-8">
                                    <CustomInput  
                                        placeholder="Salary( *eg: $340 - $450)" 
                                        value={this.state.salary}
                                        onChange={(e)=>this.setState({salary:e.target.value})}
                                        customError={this.state.salaryErr}
                                        onBlur = {() => this.validateSalary()}
                                        onFocus={() =>
                                            this.setState({
                                                salaryErr: '',
                                            })
                                        }
                                    />
                                </div>
                                <div className="col-md-4">
                                    <CustomSelect
                                        placeholder="Hourly"
                                        value={this.state.duration}
                                        options ={ durationOptions }
                                        onChange = {this.durationHandleChange}
                                        onBlur = {() => this.validateduration()}
                                        customError={this.state.durationErr}
                                        onFocus={() =>
                                            this.setState({
                                                durationErr: '',
                                            })
                                        }    
                                    />
                                </div>
                            </div>
                            <div className="mt-3">
                                <CustomDatePicker
                                    label="Date *"
                                    selected={this.state.date}
                                    onChange={(value) => {
                                        this.setState({ date: value, dateErr:'' });
                                    }}
                                    value={this.state.date}
                                    onSelect={this.dateHandleChange}
                                    onBlur = {() => this.validateDate()}
                                    customError={this.state.dateErr}
                                />
                            </div>
                            <p>{this.state.joiningDate}</p>
                            <div className="d-flex justify-content-between">
                                <ThemeButton type="button" wrapperClass="btn outLineButton col-md-5 fontStyle mt-3 py-2 megaText" label="Cancel" onClick={()=>{this.setState({createJobPostModal:false})}}/>
                                <ThemeButton type="submit" wrapperClass="btn themeActiveColor text-white col-md-5 fontStyle mt-3 py-2 megaText" label="Next"/>
                            </div>
                        </form> 
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    }

    // Render create Editor modal function

    renderEditorModal() {
        return(
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.editorModal}
            >    
                <div className="m-3">
                    <div className="d-flex justify-content-end p-3">
                        <Icomoon style={{cursor:'pointer'}} icon="close" size={20} onClick={()=>{this.setState({editorModal:false})}}/>
                    </div>
                    <ProgressBar/>
                    
                    <Modal.Body>
                        <form onSubmit={this.onSubmitEditor}>
                            <div className="mt-3">
                                <span className="smallText text-=secondary">
                                    Description
                                </span>
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data="<p>Job Description...*</p>"
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                            </div>
                            <div className="mt-3">
                                <span className="smallText text-=secondary">
                                    Requirements
                                </span>
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data="<p>Job Requirements...*</p>"
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                            </div>
                            <div className="mt-3">
                                <span className="smallText text-=secondary">
                                    About Company
                                </span>
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data="<p>About Company...*</p>"
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <ThemeButton type="button" wrapperClass="btn outLineButton col-md-5 fontStyle mt-3 py-2 megaText" label="Back" onClick={()=>{this.setState({editorModal:false,createJobPostModal:true})}}/>
                                <ThemeButton type="submit" wrapperClass="btn themeActiveColor text-white col-md-5 fontStyle mt-3 py-2 megaText" label="Save" />
                            </div>
                        </form> 
                    </Modal.Body>
                </div>
            </Modal>  
        )    
    }

    // Handle change function for job type
    jobTypeHandleChange = jobType => {
        this.setState({jobType, jobTypeErr:''});
    };

    // Handle change function for date
    dateHandleChange = date => {
        this.setState({date, dateErr:''});
    };

    // Validation for job title
    validateJobTitle = () => {
        const jobTitleError = CheckUserName(this.state.jobTitle);
        if (jobTitleError === 1) {
            this.setState({ jobTitleErr: 'Job title empty' });
            return false;
        } else if (jobTitleError === 2) {
            this.setState({ jobTitleErr: 'Invalid job title' });
            return false;
        } else return true;
    };

    // Validation for company name
    validateCompanyName = () => {
        const companyNameError = CheckUserName(this.state.companyName);
        if (companyNameError === 1) {
            this.setState({ companyNameErr: 'Company name empty' });
            return false;
        } else if (companyNameError === 2) {
            this.setState({ companyNameErr: 'Invalid company name' });
            return false;
        } else return true;
    };

    // Validation for job description
    validateJobDescription = () => {
        const jobDescriptionError = CheckUserName(this.state.jobDescription);
        if (jobDescriptionError === 1) {
            this.setState({ jobDescriptionErr: 'Job description empty' });
            return false;
        } else if (jobDescriptionError === 2) {
            this.setState({ jobDescriptionErr: 'Invalid job description' });
            return false;
        } else return true;
    };

    // Validation for address
    validateAddress = () => {
        const addressError = CheckAddress(this.state.address);
        if (addressError === 1) {
            this.setState({ addressErr: 'Address empty' });
            return false;
        } else if (addressError === 2) {
            this.setState({ addressErr: 'Invalid Address' });
            return false;
        } else return true;
    };

    // Validation for from date
    validateJobType = () => {
        const jobTypeError = DropDownCheck(this.state.jobType);
        if (jobTypeError === 1) {
            this.setState({ jobTypeErr: 'Job type empty' });
            return false;
        } else return true;
    };

    // Validation for salary
    validateSalary = () => {
        const salaryError = CheckAmount(this.state.salary);
        if (salaryError === 1) {
            this.setState({ salaryErr: 'Salary empty' });
            return false;
        } else if (salaryError === 2) {
            this.setState({ salaryErr: 'Invalid salary'});
        } else return true;
    };

    // Validation for date
    validateDate = () => {
        const dateError = CheckDob(this.state.date);
        if (dateError === 1) {
            this.setState({ dateErr: 'Date empty' });
            return false;
        } else return true;
    };

    // Empty user input validation 
    ValidateAllJobPost = ( ) => {
        const jobTitleInput = this.validateJobTitle();
        const companyNameInput = this.validateCompanyName();
        const jobDescriptionInput = this.validateJobDescription();
        const addressInput = this.validateAddress();
        // const jobTypeInput = this.validateJobType();
        const salaryInput = this.validateSalary();
        const dateInput = this.validateDate();

        console.log('validation',jobTitleInput, companyNameInput, jobDescriptionInput , addressInput ,salaryInput,  dateInput  )
        if (jobTitleInput && companyNameInput && jobDescriptionInput && addressInput  && salaryInput && dateInput) {
            return true;
        } else {
            return false;   
        }
    }

    // onsubmit function for create job post inputs

    onSubmitJobPost = (e) =>{
        console.log('here');
        e.preventDefault();
        const allValidation = this.ValidateAllJobPost()
            if (allValidation) {
                this.setState({createJobPostModal:false, editorModal:true})
            } 
            
    } 
}
export default CreateJobPost;


