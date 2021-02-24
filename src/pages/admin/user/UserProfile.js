// User Profile with create user modal Page
// 12-02-2021

import React from 'react';
import "../../../css/common.css";
import {ToolTip} from "../../../common/Components";
import { Layout } from '../../../common/Components';
import Icomoon from '../../../libraries/Icomoon';
import Avtar from "../../../assets/images/avtar.png"
import Avatar from '@material-ui/core/Avatar';
import ApplyLeave from '../../general/ApplyLeave';
import UserProfileTabs from './UserProfileTabs';
import CreateUser from './CreateUser';
import CreateDepartment from './CreateDepartment';

class UserProfile extends React.Component {
    state={
    }

    render() {
        return (
            <Layout  pageTitle="User Profile" back="Admin" current="User">
                <div className="container-fluid">
                    <div className="row mx-3">
                        <CreateUser/>
                        <CreateDepartment/>
                    </div>
                    <div className="col-md-12 mt-3">
                        <div className="row mx-1">
                            {this.renderUserProfileDetails()}
                            <div className="col-md-8 borderStyle bg-white ml-4 p-3">
                               <UserProfileTabs/>
                               <div className="d-flex justify-content-end">
                                    <ApplyLeave/>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

    // Render user profile details function
    renderUserProfileDetails() {
        return(
            <div className="col-md-3 bg-white p-4 borderStyle">
                <div className="d-flex justify-content-end">
                    <ToolTip title="Edit">
                        <Icomoon style={{cursor:'pointer'}} className="float-right " icon="edit" size={20} onClick={()=>{this.setState({createUserModal:false})}}/>
                    </ToolTip>
                </div>
                <div className="d-flex justify-content-center">
                    <Avatar alt="Avtar" src={Avtar} className="w-25 h-25"/>
                </div>
                <h5 className="fontStyle text-center mt-2">{this.state.userName ? this.state.userName:'Anbu David' }</h5>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.784315453984!2d77.75704701526998!3d12.985642618082496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e0fce86ff1d%3A0x9a769d0e3300b8d8!2sMARVEL%20SEQUOIA%20Apartments!5e0!3m2!1sen!2sin!4v1613451372467!5m2!1sen!2sin" width="250" frameborder="0" className="border-none rounded" allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>
                </div>
            </div>
        )
    }
    
}
export default UserProfile;



  