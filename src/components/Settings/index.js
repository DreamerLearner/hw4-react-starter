import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onSettingsSubmit } from '../../actions';
import PlayerInfoForm from './PlayerInfoForm';

class Settings extends Component{

	render(){

		// const players = this.props.players;

		// const usersArr = ['User 1','User 2'];
		// const playersView = usersArr.map( (user,index) => <PlayerInfoForm key={index} data={user} onSettingsSubmit={this.props.onSettingsSubmit} /> );

		// const playersView = players.map( player => <PlayerInfoForm key={player.id} data={player} /> );

		return(
			<div>
				<h3>Settings Page</h3>
				<PlayerInfoForm onSettingsSubmit={this.props.onSettingsSubmit} />
			</div>
		);
	}

	onFormSubmit(e){
		e.preventDefault();
		console.log(this.refs.name);
	}

}

const selected = state => {
	return { players: state.settings.players }
}

export default connect(selected,{onSettingsSubmit})(Settings);