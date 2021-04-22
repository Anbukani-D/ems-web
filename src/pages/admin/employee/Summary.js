// Summary tab

import React from 'react';
import "../../../css/common.css";

class Summary extends React.Component {
    state={
        organization:'',
        businessTitle:'',
        employeeType:'',
        address:'',
    }
    render(){
        return(
            <div className="col-md-12">
                <p className="smallText text-secondary pt-3">Job Details</p>
                <div className="col-md-10 pl-0 py-0 my-0">
                    <div className="row my-0 py-0">
                        <div className="col-md-4">
                            <span className="text-dark normalText">Organization</span>
                        </div>
                        <div className="col-md-4">
                            <span className="themeActiveFont normalText">{this.state.organization ? this.state.organization:'K P Digiteers'}</span><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <span className="text-dark normalText">Business Title</span>
                        </div>
                        <div className="col-md-4">
                            <span className="themeActiveFont normalText">{this.state.businessTitle ? this.state.businessTitle:'Software Developer'}</span><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <span className="text-dark normalText">Employee Type</span>
                        </div>
                        <div className="col-md-4">
                            <span className="themeActiveFont normalText">{this.state.employeeType ? this.state.employeeType:'Permanent'}</span><br/>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <span className="text-dark mt-3 normalText">Address</span><br/>
                    <span className="text-dark normalText">{this.state.address ? this.state.address: '# 41/1, 1st cross magadi road 14th main k.p agrahara bangalore-460023'}</span>
                </div>
                <div className="col-md-12 pl-0 mt-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.784315453984!2d77.75704701526998!3d12.985642618082496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e0fce86ff1d%3A0x9a769d0e3300b8d8!2sMARVEL%20SEQUOIA%20Apartments!5e0!3m2!1sen!2sin!4v1613451372467!5m2!1sen!2sin"  width="100%" height="230" frameBorder="0" className="border-none rounded" title="map" ></iframe>
                </div>
            </div>
        )
    }
}
export default Summary;