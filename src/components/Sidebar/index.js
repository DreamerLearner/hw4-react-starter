import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import s from '../../Container';
import './style.css';


class Sidebar extends PureComponent{

	constructor(props) {
	    super(props);
	    this.state = {
	      mins: 0,
	      secs: 0,
	    };
	}

	componentDidMount() {
	    setInterval(() => {
	      const secs = this.state.secs + 1;
	      const mins = secs >= 60 ? this.state.mins + 1 : this.state.mins;
	      this.setState({ mins, secs: secs % 60 });
	    }, 1000);
	}

	render(){
		return(
			<s.Sidebar>
				<div className="timerWrap">	
					<p>mm:ss</p>
					<p>{this.state.mins < 10 ? `0${this.state.mins}` : this.state.mins}:{this.state.secs < 10 ? `0${this.state.secs}` : this.state.secs}</p>
				</div>
				<Link className="sidebar_link" to={'/'}>Lobby</Link>
				<br />
				<br />
				<Link className="sidebar_link" to={'/game'}>Tic tac toe</Link>
				<br />
				<br />
				<Link className="sidebar_link" to={'/todo'}>Todo</Link>
				<br />
				<br />
				<Link className="sidebar_link" to={'/settings'}>Settings</Link>
				<br />
				<br />
				<Link className="sidebar_link" to={'/settings/multiselect'}>Settings Multiselect</Link>
				<br />
				<br />
			</s.Sidebar>
		);
	}
}

export default Sidebar;
