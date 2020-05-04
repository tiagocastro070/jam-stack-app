import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export default function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Dashboard</h1>
			<button className="header__user">
				Tiago Castro
        <img src="https://via.placeholder.com/30x30" alt="" className="header__avatar" />
        <ul className="header__menu">
          <li><span>Welcome admin</span></li>
          <li><Link to="/users">Change password</Link></li>
          <li className='list-divider' />
          <li><Link to="/logout">Logout</Link></li>
        </ul>
			</button>
    </div>
  );
}
