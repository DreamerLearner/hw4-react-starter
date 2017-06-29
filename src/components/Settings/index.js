import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onSettingsSubmit, lookupData } from '../../actions';
// import PlayerInfoForm from './PlayerInfoForm';
import SettingsForm from './SettingsForm';
import SettingsFormMulti from './SettingsFormMulti';

class Settings extends Component{

	constructor(props){
		super(props);

		this.state = {
			countryList : '',
		}

		// const lookupData = this.props.lookupData();

		// lookupData.payload.then(response =>{
		// 	this.setState({countryList : response.data.data.partner_preference.country});
		// });

	}

	componentWillMount(){
		// console.log('componentWillMount');
		const lookupData = this.props.lookupData();

		lookupData.payload.then(response =>{
			this.setState({countryList : response.data.data.partner_preference.country});
		});		

	}

	render(){
		if( this.props.location.pathname === '/settings/multiselect' ){
			return(
				<div>
					<h3>Settings Page</h3>
					<SettingsFormMulti onSettingsSubmit={this.props.onSettingsSubmit} />
				</div>
			);
		}else{
			return(
				<div>
					<h3>Settings Page</h3>
					<SettingsForm onSettingsSubmit={this.props.onSettingsSubmit} countryList={this.state.countryList} />
				</div>
			);
		}
		
	}

	

}

const selected = state => {
	return { players: state.settings.players }
}

export default connect(selected,{onSettingsSubmit,lookupData})(Settings);