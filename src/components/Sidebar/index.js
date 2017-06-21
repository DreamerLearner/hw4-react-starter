import React from 'react';
import { Link } from 'react-router-dom';
import s from '../../Container';
import './style.css';

const Sidebar = () => <s.Sidebar>
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
</s.Sidebar>;

export default Sidebar;
