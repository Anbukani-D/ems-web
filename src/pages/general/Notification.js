// Notiofication popup data

import React from 'react';
import '../../css/common.css';
import moment from 'moment';
import Icomoon from '../../libraries/Icomoon';

class Notification extends React.Component{
    state = {notifications: [], show:false};
    componentDidMount() {
		let notifications = [
			{
                id: 1,
                title:'Wood Block',
                content:'You have initiated transaction of dummy text will dummy text update you soon.',
                name:'Arun Kumar',
                date: '2020-04-20 14:20:35',
                phone:'+91 9887656787'
				
			},
			{
                id: 2,
                title:'Wood Block',
                content:'You have initiated transaction of dummy text INR will dummy text  update you soon.',
                name:'Arun Kumar',
                date: '2020-04-20 14:20:35',
                phone:'+91 9887656787'
            },
            {
                id: 3,
                title:'Wood Block',
                content:'You have initiated transaction of dummy text INR will update you soon.',
                name:'Arun Kumar',
                date: '2020-04-20 14:20:35',
                phone:'+91 9887656787'
            }
		];
		this.setState({notifications: notifications});
	}
    render() {
        return(
            <div>
                <div className="p-2 d-flex justify-content-between">
                    <span className="xSmallText activeColor">Recent Notifications</span>
                    <Icomoon icon="close" size="15" onClick={()=>{this.setState({show:false})}}/>
                </div>
                <div className="p-2 scrollStyle notificationHeight">
                    {this.state.notifications.map((notifications) => (
                        <div className="bg-light my-2 p-2" key={notifications.id}>
                           <span className="themeActiveFont my-0">{notifications.title} </span>
                            <p className="smallText my-0 py-0 text-dark">{notifications.content}</p>
                            <p className="smallText themeActiveFont text-right my-0 py-0">{notifications.name}</p>
                            <div className='d-flex justify-content-between'>
                                <p className="xSmallText themeActiveFont">{moment(notifications.date).format('DD-MM-YYYY HH:mm:ss a')}</p>
                                <p className="xSmallText themeActiveFont">{notifications.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-2 d-flex justify-content-between">
                    <p className="smallText themeActiveFont font-weight-bold" style={{cursor:'pointer'}}>All Read</p>
                    <p className="smallText themeActiveFont font-weight-bold" style={{cursor:'pointer'}}>Clear All</p>
                </div>

            </div>
        )
    }
}
export default Notification;