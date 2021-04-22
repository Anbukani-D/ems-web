// Top menu

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Nav from "react-bootstrap/Nav";
import Icomoon from "../../libraries/Icomoon";
import Avtar from "../../assets/images/avtar.png"
import Notification from "../../pages/general/Notification";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/common.css'
import Settings  from '../../pages/general/Settings';
import {useHistory} from "react-router-dom";
import {ToolTip} from '../../common/Components';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../../css/common.css';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ChangePassword from '../../pages/general/ChangePassword';



const useStyles = makeStyles((theme) => ({
	small: {
		width: 25,
		height: 25,
	  },
	}));


const TopMenu = props => {
    let {pageTitle, back, current} = props;
    
    const classes = useStyles();
    const history = useHistory();
	return (
        
		<>
		{pageTitle!=="Dashboard"?
			<div className="col-md-11 row ml-3 my-0">
                <ToolTip title="Back" direction="bottom">
				    <Icomoon icon="arrow"  size={20} className="align-self-center mb-3" style={{cursor:'pointer'}}  onClick={()=>history.goBack()} />
                </ToolTip>
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item normalText text-secondary text-decoration-none">{back}</li>
						<li className="breadcrumb-item active normalText" aria-current="page">{current}</li>
					</ol>
				</nav>
			</div>
			:null}
			<div className="my-0 py-0 ml-2" style={{overflowY:0}} id="content">
				<Navbar expand="lg" className="d-flex justify-content-between py-0">
					<div className="ml-2 my-0 py-0">
						<p className="gigaText font-weight-bold pt-2">{pageTitle}</p>
					</div>	
                    <div className="ml-2 my-0 py-0">
                        <Nav className="menuItems flex-row flex-grow-1 justify-content-end">
                            <Nav.Link className="mr-2">
                                <NotificationTop />
                            </Nav.Link>
                            <Nav.Link className="mr-2">
                                <SettingsTop />
                            </Nav.Link>
                            <Link className="btn normalText" to="/employeeProfile">
                                <Avatar alt="Avtar" src={Avtar} className={classes.small}  style={{ alignSelf:'center' }}/>	
                            </Link>
                        </Nav>
                    </div>
				</Navbar>
			</div>
		</>
	);	
};

	/*-------------------------
    Notification function
---------------------------*/
function NotificationTop() {
    const [showNotification, setShowNotification] = useState(false);
    const [targetNotification, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShowNotification(!showNotification);
        setTarget(event.target);
    };

    return (
        <>
            <div ref={ref}>
                <ToolTip title="Notification" direction="bottom">
                    <Icomoon
                        icon="bell"
                        size={20}
                        onClick={handleClick}
                        style={{cursor:'pointer'}}
                    />
                </ToolTip>
                {/* <sup>
                    <span className="badge badge-pill badge-danger ml-n2">3</span>
                </sup> */}
                <Overlay
                    show={showNotification}
                    target={targetNotification}
                    placement="bottom"
                    container={ref.current}
                    containerPadding={20}
                >
                    <Popover className="p-2 lightBorderColor shadow borderStyle" id="popover-contained">
                        <Notification />
                    </Popover>
                </Overlay>
            </div>
        </>
    );
}

/*-------------------------
Settings function
---------------------------*/
function SettingsTop() {
const [show, setShow] = useState(false);
const [target, setTarget] = useState(null);
const ref = useRef(null);

const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
};

return (
    <>
        <div>
            <ToolTip title="Settings" direction="bottom">
                <Icomoon
                    icon="setting"
                    size={20}
                    onClick={handleClick}
                    style={{cursor:'pointer'}}
                />
            </ToolTip>
            <Overlay
                show={show}
                target={target}
                placement="bottom"
               
                containerPadding={20}
            >
                <Popover className="p-2 lightBorderColor shadow borderStyle" id="popover-contained" >
                    <Settings />
                </Popover>
            </Overlay>
            
        </div>
    </>
);
}

// function SettingsTop() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
    
//     return (
//         <>
//             <div>
//                 <ToolTip title="Settings" direction="bottom">  
//                     <Icomoon icon="setting" className="pointer"  size={25}  color="white" onClick={handleClick}/>
//                 </ToolTip>
//             </div>
       
//             <Menu
//                 className="mt-5 p-2 lightBorderColor shadow borderStyle"
//                 id="simple-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//             >
//                 <MenuItem onClick={handleClose}><ChangePassword/></MenuItem>
//                 <MenuItem onClick={handleClose}>
//                 <FormControlLabel
//                     value="notification"
//                     control={<Switch color= "secondary" />}
//                     label="Turn on / off Notification"
//                     labelPlacement="start"
//                     className="pl-0 ml-0"
//                 />
//                 </MenuItem>
//                 <MenuItem onClick={handleClose}>
//                     <Link className="row pl-3 text-decoration-none" to="/login">
//                         <Icomoon icon="logout" size={20} color="#DF5A14"/>
//                         <p className="smallText font-weight-bold pl-3"  style={{cursor:'pointer'}}>Logout</p>
//                     </Link>
//                     </MenuItem>
//                 {/* <Settings onClick={handleClose} /> */}
//             </Menu>
//         </>
//     );
// }


export default TopMenu;
