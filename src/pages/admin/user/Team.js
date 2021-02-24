import React from 'react';
import "../../../css/common.css";
import Avtar from "../../../assets/images/avtar.png"
import Avatar from '@material-ui/core/Avatar';

class Team extends React.Component {
    state = {team: []};
    componentDidMount() {
		let team = [
			{
                id: 1,
                experience:'2 yrs',
                name:'Bharathy',
                designation:'Software Tester'

			},
			{
                id: 2,
                experience:'1.6 yrs',
                name:'Anbu',
                designation:'Software Developer'
				
            },
            {
                id: 3,
                experience:'1 yrs',
                name:'Shubham',
                designation:'Back-end Developer'
                
            }
		];
		this.setState({team: team});
	}
    render(){
        return(
            <div className="col-md-12">
                <div className="row mt-3">
                    {this.state.team.map((team) => (
                        <div className="rounded col-md-3 border borderColor p-1 mr-3 " key={team.id}>
                            <div className="d-flex justify-content-end">
                                <span className="xSmallText">
                                    {team.experience}
                                </span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Avatar alt="Avtar" src={Avtar} className="w-25 h-25"/>
                            </div>
                            <p className="smallText font-weight-bold text-center mt-2 my-0">{team.name}</p>
                            <p className="themeActiveFont text-center text-uppercase xSmallText">{team.designation}</p>   
                        </div> 
                    ))}
                </div>
            </div>
        )
    }
}
export default Team;