// Careers Page
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import {Layout} from "../../../common/Components";
import ApplyLeave from '../../general/ApplyLeave';

import moment from 'moment';
import Icomoon from '../../../libraries/Icomoon';


class CareersDescription extends React.Component {

    state={
        jobContent:[ ]
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
            },
            {
                id: 4,
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
                id: 5,
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
            <Layout back="Admin" current="Careers">
                <div className="container-fluid">
                    <div className="row mx-2 mt-3">
                        <div className="col-md-3 mt-4">
                            {this.renderCareersView()}
                        </div>
                        <div className="col-md-7">
                            <div className='col-md-12 d-flex justify-content-between'>
                                <div>
                                    <Icomoon icon="previous" size={13}/>
                                    <span className="smallText px-3 text-secondary">Previous</span>
                                </div>
                                <div>
                                <span className="smallText px-3">Next</span>
                                    <Icomoon icon="next" size={13}/>
                                    
                                </div>
                                
                            </div>
                            {this.renderCareersDescription()}
                        </div>
                        <div className="col-md-2 mt-4">
                            {this.renderSimilarJobs()}
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <ApplyLeave/>
                    </div>
                </div>          
            </Layout>
        )
    }

    // Render Careers function

    renderCareersView() {
        return(
            <div className="bg-white p-4 borderStyle" style={{height:620}}>
                <div key={this.state.id}>
                    <h5 className="fontStyle themeActiveFont">{this.state.designation ? this.state.designation:'UI/UX Designer'}</h5> 
                    <p className="smallText text-dark">{this.state.company? this.state.company:'Aiknow Labs'}, 
                        <br/>{this.state.city? this.state.city:'Bangalore'}, 
                        {this.state.state ? this.state.state:'Karnataka'} <br/>
                        <span className="text-secondary">{this.state.jobType ? this.state.jobType:'Part Time'} </span><br/>
                        {this.state.salary ? this.state.salary:'350.00 - 360.00'} / {this.state.duration ? this.state.duration:'Hourly'}
                    </p>
                    <p className="themeActiveFont smallText">{this.state.date ? moment(this.state.date).format('DD-MM-YYYY HH:mm:ss a'):'2020-04-20 14:20:35' }</p>
                    <div className="my-5 pb-5">
                        <p className="xSmallText text-secondary">Information</p>
                        <p className="smallText">
                            <span className="themeActiveFont">Job Reference</span><br/>
                            03930-0011693125
                        </p>
                        <p className="smallText">
                            <span className="themeActiveFont">Staffing Area</span><br/>
                            {this.state.staffingArea ? this.state.staffingArea :'Creative & Marketing'}
                        </p>
                    </div>
                    <p className="xSmallText text-secondary mt-5 pt-5">Questions?</p>
                        <p className="smallText">
                            <span className="themeActiveFont">Call us at our branch office at</span><br/>
                            03930-0011693125
                        </p>
                </div>  
            </div>
        )
    }

     // Render Careers Description

     renderCareersDescription() {
        return(
            <>
            <div className="bg-white p-4 borderStyle scrollStyle" style={{height:620}}>
                <p className="smallText">
                    <span className="themeActiveFont">Description</span><br/>
                    {this.state.description ? this.state.description :'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'}
                </p>
                <p className="smallText">
                    <span className="themeActiveFont">Requirements</span><br/>
                    {this.state.requirements ? this.state.requirements : <p>2+ years in a design focused UI/UX Designer.<br/>2+ years in a design focused UI/UX Designer.</p>}
                </p>
                <p className="smallText">
                    <span className="themeActiveFont">About Us</span><br/>
                    {this.state.aboutUs ? this.state.aboutUs :'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'}
                </p>
            </div>
            </>
        )
    }


     // Render Careers function 
    renderSimilarJobs(){
        return(
            <>
            <div className="borderStyle bg-white p-3 scrollStyle" style={{height:620}}>
                {this.state.jobContent.map((jobContent) => (
                    <div key={jobContent.id}>
                        <h6 className="fontStyle themeActiveFont">{jobContent.designation}</h6> 
                        <p className="xSmallText text-dark">{jobContent.company}, 
                            <br/>{jobContent.city}, {jobContent.state} <br/>
                            <span className="text-secondary">{jobContent.jobType}</span> 
                            <br/>{jobContent.salary} / {jobContent.duration}
                        </p>
                        <p className="themeActiveFont xSmallText">{moment(jobContent.date).format('DD-MM-YYYY HH:mm:ss a')}</p>
                        <hr/>

                    </div>  
                    
                ))
                }  
                </div>              
            </>
        )
    }

    
}
    

 

    
    

export default CareersDescription;

    

  