import React, { PureComponent } from 'react';

class Todolist extends PureComponent{
	render(){
		console.log('ssdsdsd');
		console.log(this.props.data);
		return(
			<div>
				lists
			</div>
		);
	}
}

export default Todolist;