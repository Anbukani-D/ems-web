// Employee Profile
// 12-02-2021

import React from 'react';
import "../../../css/common.css";
import { Layout } from '../../../common/Components';
import Avtar from "../../../assets/images/avtar.png"
import Avatar from '@material-ui/core/Avatar';
import CreateEmployee from './CreateEmployee';
import EditEmployee from './EditEmployee';
import Summary from "./Summary";
import Team from "./Team";
import Document from "./Document";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class EmployeeProfile extends React.Component {
    state={
        menu:'summary'
    }

    render() {
        return (
            <Layout  back="Admin" current="Employee" pageTitle="Employee Profile">
                <div className="mx-4 my-0 py-0">
                    <CreateEmployee/>
                </div>
                <div className="row mx-2">
                    {this.renderEmployeeProfileDetails()}
                    {this.renderProfileTabs()}
                    
                </div>
            </Layout>
        )
    }

    // Render tabs
    renderProfileTabs(){
        return (
            <div className="col-md-8 borderStyle bg-white px-3 m-3">
                <div className="col-md-12 smallText pt-2">
                    <Tabs 
                        defaultActiveKey="summary"
                        id="controlled-tab-example"
                        onSelect={(menu) => this.setState({menu})}>
                        <Tab eventKey="summary" title="Summary"/>
                        <Tab eventKey= "team" title="Team" />
                        <Tab eventKey="document" title="Document"/>
                    </Tabs>
                </div>
                {this.renderPage()}
            </div>
        );
    }

    // Render Pages
    renderPage = () => {
        if (this.state.menu === "team") {
            return <Team />;
        } else if (this.state.menu === "document") {
            return <Document />;
        } else{
            return<Summary/>
        }
    };

    // Render employee profile details function
    renderEmployeeProfileDetails() {
        return(
            <div className="col-md-3 bg-white px-3 py-1 borderStyle m-3">
                <div className="d-flex justify-content-end pt-1">
                    <EditEmployee/>
                </div>
                <div className="d-flex justify-content-center">
                    <Avatar alt="Avtar" src={Avtar}/>
                </div>
                <p className="fontStyle text-center megaText py-0 my-0">{this.state.userName ? this.state.userName:'Anbu David' }</p>
                <p className="text-center themeActiveFont normalText">{this.state.designation ? this.state.designation:'Software Developer'}</p>
                <p className="smallText text-secondary">Email <br/>
                    <span className="normalText text-dark">{this.state.email ? this.state.email:'anbu@kpdigiteers.com'}</span>
                </p>
                <p className="smallText text-secondary">Contact No.<br/>
                    <span className="normalText text-dark">{this.state.contactNumber ? this.state.contactNumber:'+91 9889876543'}</span>
                </p>
                <p className="smallText text-secondary">Present Address<br/>
                    <span className="normalText text-dark">{this.state.address ? this.state.address:'# 41/1, 1st cross magadi road 14th main k.p agrahara bangalore-560023'}</span>
                </p>
                <div className="col-md-12 pl-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.784315453984!2d77.75704701526998!3d12.985642618082496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e0fce86ff1d%3A0x9a769d0e3300b8d8!2sMARVEL%20SEQUOIA%20Apartments!5e0!3m2!1sen!2sin!4v1613451372467!5m2!1sen!2sin" width="250" className="border-none rounded"  title="map" frameBorder="0"></iframe>
                </div>
            </div>
        )
    }
    
}
export default EmployeeProfile;



  