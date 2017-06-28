import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onSettingsSubmit } from '../../actions';
// import PlayerInfoForm from './PlayerInfoForm';
import SettingsForm from './SettingsForm';

class Settings extends Component{

	render(){
		return(
			<div>
				<h3>Settings Page</h3>
				<SettingsForm onSettingsSubmit={this.props.onSettingsSubmit} />
			</div>
		);
	}

}

const selected = state => {
	return { players: state.settings.players }
}

export default connect(selected,{onSettingsSubmit})(Settings);