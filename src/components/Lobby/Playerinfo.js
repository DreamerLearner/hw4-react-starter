import React, { PureComponent } from 'react';
import s from '../../Container';

class Playerinfo extends PureComponent{
	render(){
		const { name, bio, city } = this.props.data;
		return(
			<s.PlayerInfoBox>
				<div>
					<p>Name : {name}</p>
					<p>About me : {bio}</p>
					<p>City : {city}</p>
				</div>
			</s.PlayerInfoBox>
		);
	}
}

export default Playerinfo;