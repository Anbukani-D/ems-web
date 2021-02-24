import React, { Component } from "react";
import "../../css/common.css";
import Sidebar from "react-sidebar";
import "./LeftMenu.css";
import Menu from "./Menu";
import TopMenu from "./TopMenu";
import Icomoon from "../../libraries/Icomoon";

const mql = window.matchMedia(`(min-width: 800px)`) 
const sidebarStyles = {
	sidebar: {
		backgroundColor: "#fff",
	},
};

export default class LeftMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarDocked: mql.matches,
			sidebarOpen: false,
		};

		this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
		this.overlayClicked = this.overlayClicked.bind(this);
	}

	componentDidMount() {
		mql.addListener(this.mediaQueryChanged);
	}

	onSetSidebarOpen(open) {
		this.setState({ sidebarOpen: open });
	}

	mediaQueryChanged() {
		this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
	}
	overlayClicked() {
		if (this.props.open) {
			this.props.onSetOpen(false);
		}
	}

	render() {
		return (
            <Sidebar
                sidebar={<Menu />}
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
                onClick={this.overlayClicked}
                styles={sidebarStyles}
            >
				<div className="themeBgColor screenHeight">
					<TopMenu toggleOpen={() => this.onSetSidebarOpen(true)}  />
						{this.props.children}
						{console.log('this',this.props.children)}
				</div>
			</Sidebar>
				
            
			
		);
	}
}
