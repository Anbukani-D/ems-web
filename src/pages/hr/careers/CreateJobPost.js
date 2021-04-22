// Create job post modal
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import { ThemeButton, CustomInput, CustomSelect,  CustomDatePicker} from "../../../common/Components";
import {CheckUserName, CheckDob, DropDownCheck, CheckAddress, CheckAmount, CheckPincode} from "../../../common/Validation";
import Modal from 'react-bootstrap/Modal'
import Icomoon from '../../../libraries/Icomoon';
import { jobTypeOptions, durationOptions } from '../../../common/DropDownList';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {createCareer} from '../../../common/Apis/hr/Career';
import LoadingBar from 'react-top-loading-bar'


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
                <ThemeButton wrapperClass="btn themeActiveColor text-white px-5  fontStyle ml-2 smallText" label="Post Job" onClick={()=>{this.setState({createJobPostModal:true})}}/>
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
                    <div className="d-flex justify-content-between border-bottom colorBorder  mx-3">
                        <div className="underLineStyle">
                            <span className="fontStyle themeActiveFont gigaText font-weight-bold ">
                                Create Job Post
                            </span>
                        </div>
                        <Icomoon style={{cursor:'pointer'}} icon="close" size={20} onClick={()=>{this.setState({createJobPostModal:false})}}/>
                    </div>
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
                                error
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
                                    error
                                />
                            </div>
                            <div className="mt-3">
                                <CustomSelect
                                    placeholder="Job Type*"
                                    value={this.state.jobType}
                                    options ={ jobTypeOptions }
                                    onChange={(e)=> this.setState({jobType:e.target.value})}
                                    // onBlur = {() => this.validateJobType()}
                                    customError={this.state.jobTypeErr}
                                    onFocus={() =>
                                        this.setState({
                                            jobTypeErr: '',
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
                                    onBlur = {() => this.validateAddress()}
                                    onFocus={() =>
                                        this.setState({
                                            addressErr: '',
                                        })
                                    }
                                    error
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
                                        error
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
                                        error
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
                                        error
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
                                        error
                                    />
                                </div>
                                <div className="col-md-4">
                                    <CustomSelect
                                        placeholder="Hourly"
                                        value={this.state.duration}
                                        options ={ durationOptions }
                                        onChange={(e)=> this.setState({duration:e.target.value})}
                                        // onBlur = {() => this.validateDuration()}
                                        customError={this.state.durationErr}
                                        onFocus={() =>
                                            this.setState({
                                                durationErr: '',
                                            })
                                        } 
                                        error   
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
                                    error
                                />
                            </div>
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
                    <Modal.Body>
                        <form onSubmit={this.onSubmitEditor}>
                            <div className="mt-3">
                                <span className="smallText text-=secondary">
                                    Description
                                </span>
                                <CKEditor
                                    // value={this.state.jobDescription}
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
                                    // value={this.state.jobRequirement}
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
                                    //  value={this.state.aboutCompany}
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

    // Validation for city
    validateCity =() => {
        const cityError = CheckUserName(this.state.city);
        if (cityError === 1) {
            this.setState({ cityErr: 'City empty' });
            return false;
        } else if (cityError === 2) {
            this.setState({ cityErr: 'Invalid city' });
            return false;
        } else return true;
    }

    // Validation for state
    validateState =() => {
        const stateError = CheckUserName(this.state.state);
        if (stateError === 1) {
            this.setState({ stateErr: 'State empty' });
            return false;
        } else if (stateError === 2) {
            this.setState({ stateErr: 'Invalid State ' });
            return false;
        } else return true;
    }

     // Validation for pincode
     validatePincode =() => {
        const pincodeError = CheckPincode(this.state.pincode);
        if (pincodeError === 1) {
            this.setState({ pincodeErr: 'Pincode  empty' });
            return false;
        } else if (pincodeError === 2) {
            this.setState({ pincodeErr: 'Invalid State name' });
            return false;
        } else return true;
    }

    // Validation for from duration
    validateDuration = () => {
        const durationError = DropDownCheck(this.state.duration);
        if (durationError === 1) {
            this.setState({ durationErr: 'Duration empty' });
            return false;
        } else return true;
    };

    // Empty job post input validation 
    ValidateAllJobPost = ( ) => {
        const jobTitleInput = this.validateJobTitle();
        const companyNameInput = this.validateCompanyName();
        const jobDescriptionInput = this.validateJobDescription();
        const addressInput = this.validateAddress();
        const jobTypeInput = this.validateJobType();
        const salaryInput = this.validateSalary();
        const dateInput = this.validateDate();
        const cityInput = this.validateCity();
        const stateInput = this.validateState();
        const pincodeInput = this.validatePincode();
        const durationInput = this.validateDuration();


        console.log('validation',jobTitleInput, companyNameInput, jobDescriptionInput , addressInput ,salaryInput,  dateInput  )
        if (jobTitleInput && companyNameInput && jobTypeInput && addressInput  && salaryInput && dateInput, cityInput, stateInput, pincodeInput, durationInput) {
            return true;
        } else {
            return false;   
        }
    }

    // onsubmit function for create job post inputs

    onSubmitJobPost = (e) => {
        e.preventDefault();
        const allValidation = this.ValidateAllJobPost()
        if (allValidation) {
            this.setState({createJobPostModal:false, editorModal:true})
        }
    }

    onSubmitEditor = async(e) =>{
        console.log('here hello')
        e.preventDefault();
        const allValidation = this.ValidateAllJobPost()
            if (allValidation) {  
                let requestBody = {
                    jobTitle: this.state.jobTitle,
                    date:this.state.date,
                    companyName:this.state.companyName,
                    jobDescription:this.state.jobDescription,
                    jobType:this.state.jobType,
                    address:this.state.address,
                    city:this.state.city,
                    state:this.state.state,
                    pincode:this.state.pincode,
                    duration:this.state.duration,
                    salary:this.state.salary,
                    aboutCompany:this.state.aboutCompany,
                    jobRequirement:this.state.jobRequirement
                };
            let result = false
            result = await createCareer(requestBody);
            
            this.setState({progress:100,
                // error:result.errorCode ? result.errorCode : result.message
            });
            if (result && result.status) {
                alert('Job Posted Successfully! ')
                this.props.history.push('/career');
            } 
        }       
    } 
}
export default CreateJobPost;


