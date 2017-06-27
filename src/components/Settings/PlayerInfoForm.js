import React, { PureComponent } from 'react';
import s from '../../Container';

class Playerinfo extends PureComponent{

	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	render(){
		return(
			<form onSubmit={this.onSubmit}>
				<s.SettingPgBox>
					<p>User 1</p>
					<p>Name : <input type="text" ref="name1" placeholder="Name" /></p>
					<p>Bio : <input type="text" ref="bio1" placeholder="Add a little info about yourself" /></p>
					<p>City : <input type="text" ref="city1" placeholder="City" /></p>
				</s.SettingPgBox>
				<s.SettingPgBox>
					<p>User 2</p>
					<p>Name : <input type="text" ref="name2" placeholder="Name" /></p>
					<p>Bio : <input type="text" ref="bio2" placeholder="Add a little info about yourself" /></p>
					<p>City : <input type="text" ref="city2" placeholder="City" /></p>
				</s.SettingPgBox>
				<button type="submit">Submit</button>
			</form>
		);
	}

	onSubmit(e){
		e.preventDefault();
		
		const formObj = [{'name':this.refs.name1.value, 'bio':this.refs.bio1.value, 'city':this.refs.city1.value}, {'name':this.refs.name2.value, 'bio':this.refs.bio2.value, 'city':this.refs.city2.value}];
		this.props.onSettingsSubmit(formObj);

		this.refs.name1.value = this.refs.bio1.value = this.refs.city1.value = this.refs.name2.value = this.refs.bio2.value = this.refs.city2.value = '';

	}
}

export default Playerinfo;