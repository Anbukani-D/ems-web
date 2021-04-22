// Careers Page
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import {Link} from 'react-router-dom'; 
import {Layout, ThemeButton, CustomSelect} from "../../../common/Components";
import { jobTypeOptions, specializationOptions, locationOptions } from '../../../common/DropDownList';
import moment from 'moment';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CreateJobPost from './CreateJobPost'
import TablePagination from '@material-ui/core/TablePagination';
import Icomoon from '../../../libraries/Icomoon' 
import {createCareer} from '../../../common/Apis/hr/Career';
import LoadingBar from 'react-top-loading-bar'

class Careers extends React.Component {

    state={
        // Apply 
        location:'',
        specialization:'',
        jobType:'',
        jobContent:[],
        progress:''
    }

    componentDidMount() {
		let jobContent = [
			{
                id: 1,
                designation:'UI/UX Designer',
                company:'Aiknow Labs',
                city:'Bangalore',
                state: 'Karnataka',
                jobType:'Part Time',
                salary:'350.00 - 360.00',
                duration:'Hourly',
                content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
                date:'2020-04-20 14:20:35',	
			},
			{
                id: 2,
                designation:'UI/UX Designer',
                company:'Aiknow Labs',
                city:'Bangalore',
                state: 'Karnataka',
                jobType:'Part Time',
                salary:'350.00 - 360.00',
                duration:'Hourly',
                content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
                date:'2020-04-20 14:20:35',	
            },
            {
                id: 3,
                designation:'UI/UX Designer',
                company:'Aiknow Labs',
                city:'Bangalore',
                state: 'Karnataka',
                jobType:'Part Time',
                salary:'350.00 - 360.00',
                duration:'Hourly',
                content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
                date:'2020-04-20 14:20:35',	
            }
		];
		this.setState({jobContent: jobContent});
	}

    render() {
        return (
            <Layout back="HR Management" current="Career" pageTitle="Career">
                <LoadingBar
                    color='#DF5A14'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:100})}
                />
                <div className="container-fluid py-0 my-0">
                    <div className="row mx-2  py-0 my-0">
                        <div className="border col-md-3 bg-white rounded border-secondary d-flex justify-content-between py-2">
                            <input type="search" className="no-outline input-style smallText"
                                placeholder="Job Title, Skills, or Keywords..."
                            />
                            <Icomoon className="align-self-center" icon="search" size={15}/>
                        </div>                             
                        <CreateJobPost/>
                    </div>   
                    <div className="mx-1 mt-1 row">
                        {this.renderCareers()}
                        {this.renderCareerContent()}
                    </div>
                </div>          
            </Layout>
        )
    }

    // Render Careers function

    renderCareers() {
        return(
            <div className="col-md-3 bg-white p-4 mx-2 borderStyle my-2">
                <form onSubmit={this.onSubmitApplyJob}>
                    <p className="xSmallText">Narrow your results</p>
                    <p className="themeActiveFont" style={{cursor:'pointer'}}>Clear</p>
                    <FormControlLabel
                        value="Remote Job Only"
                        control={<Switch color= "secondary" />}
                        label="Remote Job Only"
                        labelPlacement="start"
                        className="pl-0 ml-0"
                    />
                    <div className="mt-3">
                        <CustomSelect
                            placeholder="Location*"
                            value={this.state.location}
                            options ={locationOptions}
                            onChange = {(e)=>this.setState({location:e.target.value})}
                        />
                    </div>
                    <div className="mt-3">
                        <CustomSelect
                            placeholder="Specialization*"
                            value={this.state.specialization}
                            options ={specializationOptions}
                            onChange = {(e)=>this.setState({specialization:e.target.value})}
                        />
                    </div>
                    <div className="mt-3">
                        <CustomSelect
                            placeholder="Job Type*"
                            value={this.state.jobType}
                            options ={jobTypeOptions}
                            onChange = {(e)=>this.setState({jobType:e.target.value})}
                        />
                    </div>
                    <div className="d-flex align-items-end">
                        <ThemeButton type="button" wrapperClass="btn themeActiveColor col-md-12 fontStyle mt-3 py-2 normalText text-white" label="Apply" />
                    </div>
                </form>
            </div>
        )
    }
     
    // Render career content
    renderCareerContent(){
        return(
            <>
            <div className="col-md-8 borderStyle bg-white mx-2 p-3 my-2">
                <div className="scrollStyle" style={{height:420}}>
                {this.state.jobContent.map((jobContent) => (
                    <Link to="/careersDescription" className="text-decoration-none">
                        <div key={jobContent.id}>
                            <h6 className="fontStyle">{jobContent.designation}</h6> 
                            <p className="xSmallText text-secondary">{jobContent.company}, {jobContent.city}, {jobContent.state} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {jobContent.jobType} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{jobContent.salary} / {jobContent.duration}</p>
                            <p className="xSmallText">{jobContent.content}</p>
                            <p className="themeActiveFont xSmallText">{moment(jobContent.date).format('DD-MM-YYYY HH:mm:ss a')}</p>
                            <hr className="line"></hr>
                        </div>  
                    </Link>
                ))
                }
                </div>
                <div className="d-flex justify-content-between">
                    <p className="normalText text-uppercase pt-3">EXPORT AS: <span className="themeActiveFont" style={{cursor:'pointer'}}>CSV</span></p>
                    <Pagination/>
                </div>  
            </div>
            </>
        )
    }

    onSubmitApplyJob = async(e)=>{
        console.log('here hello')
        e.preventDefault();
        const allValidation = this.ValidateAllJobPost()
            if (allValidation) {  
                let requestBody = {
                    location: this.state.location,
                    specialization:this.state.specialization,
                    jobType:this.state.jobType,
                    
                };
            let result = false
            result = await createCareer(requestBody);
            
            this.setState({progress:100,
                // error:result.errorCode ? result.errorCode : result.message
            });
            if (result && result.status) {
                this.props.history.push('/career');
            } 
        }       
    }
   
    // Handle change function for location
    
    locationHandleChange = location => {
        this.setState({ location, locationErr: '' });
    }

    // Handle change function for specialization
    
    specializationHandleChange = specialization => {
        this.setState({ specialization, specializationErr: '' });
    }
    // Handle change function for jobType
    
    jobTypeHandleChange = jobType => {
        this.setState({ jobType, jobTypeErr: '' });
    }
}
    
    // Render pagination
    function Pagination() {
        const [page, setPage] = React.useState(2);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
            setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
    };

    return (
            <TablePagination
                component='div'
                count={100}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        );
    }

    
    

export default Careers;

    

  