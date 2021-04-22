// Events Page
// 18-02-2021

import React from 'react';
import "../../../css/common.css";
import "../../../css/calendar.css";
import { Layout } from '../../../common/Components';
import CreateHoliday from './CreateHoliday';
import EventCalendar from '../events/EventCalendar';

class Events extends React.Component {
    state={
        events:[]
    }
    
    componentDidMount() {
		let events = [
			{
                id: 1,
                events:'Makara Shankranthi',
                date: '14 Jan, 2021',	
			},
			{
                id: 2,
                events:'Republic Day',
                date: '26 Jan, 2021',
            },
            {
                id: 3,
                events:'Republic Day',
                date: '26 Jan, 2021',
            },
            {
                id: 4,
                events:'Republic Day',
                date: '26 Jan, 2021',
            },
            {
                id: 5,
                events:'Republic Day',
                date: '26 Jan, 2021',
            },
            {
                id: 6,
                events:'Makara Shankranthi',
                date: '14 Jan, 2021',
				
			},
            {
                id: 7,
                events:'Makara Shankranthi',
                date: '14 Jan, 2021',
				
			},
            {
                id: 8,
                events:'Makara Shankranthi',
                date: '14 Jan, 2021',
				
			},
            {
                id: 9,
                events:'Makara Shankranthi',
                date: '14 Jan, 2021',
				
			},
            {
                id: 10,
                events:'Makara Shankranthi',
                date: '14 Jan, 2021',
				
			},
            
		];
		this.setState({events: events});
	}

    render() {
        return (
            <Layout back="Admin" current="Events"  pageTitle="Events">
                {this.renderEvents()}
            </Layout>
        )
    }

    // Render Events function

    renderEvents() {
        return(
            <>
                <div className="mx-3">
                    <CreateHoliday/>
                </div>
                <div className="d-flex justify-content-between mx-3 my-2">
                    <div className="col-md-8 mb-3">
                        {this.renderCalendar()}
                    </div>
                    <div className="col-md-4">
                        {this.renderUpcomingEvents()}
                    </div>
                </div> 
            </>
        )    
    }

    // Render calendar function
    renderCalendar () {
        return(
            <>
                <EventCalendar/>
            </>
        )
    }

    // Render upcoming events function
    renderUpcomingEvents () {
        return(
            <div className="bg-white p-4 borderStyle scrollStyle" style={{height:480}}>
                {this.state.events.map((events) => (
                    <div key={events.id}>
                        <p className="smallText themeActiveFont">{events.events}
                        <span className="xSmallText themeActiveFont"><br/>{events.date}</span></p>
                    </div>
                ))}
            </div>
        )
    }   
}

export default Events;

    

  