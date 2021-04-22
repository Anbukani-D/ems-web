// Calendar 

import React from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../../css/common.css";
import Icomoon from '../../../libraries/Icomoon';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import EventPopup from './EventPopup';
import Popover from 'react-bootstrap/Popover';

const localizer = momentLocalizer(moment);
const formats = {
	weekdayFormat: (date, culture, localizer) => localizer.format(date, 'ddd', culture),
}
  
class EventCalendar extends React.Component {
  	state = {
    	todayLeave:[],
		events: [
			{
				title:"Tap to View the Leaves",
				start: new Date(2021, 0, 14),
				end: new Date(2021, 0, 14)
			},
			{
				title:"Tap to View the Leaves",
				start: new Date(2021, 0, 26),
				end: new Date(2021,0, 26)
			},
			{
				title:"Tap to View the Leaves",
				start: new Date(2021, 2, 5),
				end: new Date(2021, 2, 5) 
			},
		],
		views:{ week: false, day: false, agenda: false }
	};
  
	render() {
		return (
			<div className="bg-white p-4 borderStyle">
				<Calendar
					localizer={localizer}
					defaultView="month"
					views
					formats={formats}
					events={this.state.events}
					style={{ height: "55vh" }}
					components={{ 
						event: Event 
					}}
				/>
			</div>
		);
	}
}

	// Event calendar popup
	const popover =(
		<Popover  id="popover-contained" style={{maxWidth:600}}>
			<EventPopup/>
		</Popover>
	)

	// Event icon onclick function 
	function Event({ events }) {
		return (
			<div className="border-0 no-outline">
				<OverlayTrigger trigger="click" placement="top" overlay={popover}>
					<Icomoon icon="info" size={20}/>
				</OverlayTrigger>
			</div>
		)
	}
  
export default EventCalendar;