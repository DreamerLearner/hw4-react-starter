import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Settings extends PureComponent{

	render(){
		return(
			<div>
				<h3>Settings Page</h3>				
			</div>
		);
	}

}

const selected = state => {
	return { settings: state.settings }
}

export default connect(selected)(Settings);