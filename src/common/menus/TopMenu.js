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



const useStyles = makeStyles((theme) => ({
	small: {
		width: 25,
		height: 25,
	  },
	}));


const TopMenu = (props) => {
    let {pageTitle, back, current} = props;
    const classes = useStyles();
	return (
		<>
			<div className="col-md-11 row ml-3 my-0">
				<Icomoon icon="arrow" size={20} className="align-self-center mb-3" onClick={() => {this.props.history.goBack()}}/>
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a className="text-secondary" href="#" >{props.back}</a></li>
						<li className="breadcrumb-item active" aria-current="page">{props.current}</li>
					</ol>
				</nav>
			</div>
			<div className="pt-0 my-0 py-0 ml-2 row" style={{overflowY:0}} id="content">
				<Navbar expand="lg" className="flex-grow-1 py-0">
					<span
						style={{ fontSize: "30px", cursor: "pointer" }}
						className="openToggle"
						onClick={props.toggleOpen}
					>
						&#9776;
					</span>
					<div className="col-md-10 ml-2 my-0 py-0">
						<p className="gigaText font-weight-bold pt-2">{pageTitle}</p>
					</div>	
					<Nav className="menuItems flex-row flex-grow-1 justify-content-end">
						<Nav.Link className="mr-2">
							<NotificationTop />
						</Nav.Link>
						<Nav.Link className="mr-2">
							<Icomoon icon="setting" size={20} className="align-self-center"/>
						</Nav.Link>
						<Link className="btn mx-2 normalText" to="/">
							<Avatar alt="Avtar" src={Avtar} className={classes.small}  style={{ alignSelf:'center' }}/>	
						</Link>
					</Nav>
				</Navbar>
				
			</div>
		</>
	);

	
};

	/*-------------------------
    Notification function
---------------------------*/
	function NotificationTop() {
		const [show, setShow] = useState(false);
		const [target, setTarget] = useState(null);
		const ref = useRef(null);

		const handleClick = (event) => {
			setShow(!show);
			setTarget(event.target);
		};

		return (
			<>
				<div ref={ref}>
					<Icomoon
						icon="bell"
						size={20}
						onClick={handleClick}
					/>
					{/* <sup>
						<span className="badge badge-pill badge-danger ml-n2">3</span>
					</sup> */}
					<Overlay
						
						show={show}
						target={target}
						placement="bottom"
						container={ref.current}
						containerPadding={20}
					>
						<Popover className="p-2  lightBorderColor shadow borderStyle" id="popover-contained">
							<Notification />
						</Popover>
					</Overlay>
				</div>
			</>
		);
	}
export default TopMenu;

