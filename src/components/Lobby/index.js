import React, { Component } from 'react';
import { connect } from 'react-redux';
import Playerinfo from './Playerinfo';

class Lobby extends Component{

	render(){

		const { players } = this.props.settings;

		const playersView = players.map( player => <Playerinfo key={player.id} data={player} /> );

		return(
			<div>
				<h3>Dashboard</h3>
				{playersView}		
			</div>
		);
	}

}

const selected = state => {
	return { settings: state.settings }
}

export default connect(selected)(Lobby);