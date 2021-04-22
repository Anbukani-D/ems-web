// Settings popup menus

import React from 'react';
import '../../css/common.css';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icomoon from '../../libraries/Icomoon';
import {Link} from 'react-router-dom';

class Settings extends React.Component{
    state = {};
    
    render() {
        return(
            <div className="p-3">
                <div>
                <Link className="row pl-3 text-decoration-none" to="/changePassword">
                    <p className="smallText  font-weight-bold"  style={{cursor:'pointer'}} >Change Password</p>  
                </Link> 
                </div>
                <FormControlLabel
                    value="notification"
                    control={<Switch color= "secondary" />}
                    label="Turn on / off Notification"
                    labelPlacement="start"
                    className="pl-0 ml-0"
                />
            </div>
        )
    }
}
export default Settings;