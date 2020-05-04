import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegFile, FaRegNewspaper } from 'react-icons/fa';
import { FiSettings, FiUsers } from 'react-icons/fi';
import { MdPersonalVideo } from 'react-icons/md';
import { GoSettings } from 'react-icons/go';

import './index.scss';

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__logo"><GoSettings color="#5E81F4" size="4.2em" /></div>
      <ul>
        <li className="menu__item">
          <NavLink to="/dashboard/" activeClassName="active" exact>
            <MdPersonalVideo className="menu__icon" size="1.3em" /> Dashboard
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/dashboard/articles" activeClassName="active">
            <FaRegNewspaper className="menu__icon" size="1.3em" /> Articles
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/dashboard/pages" activeClassName="active">
            <FaRegFile className="menu__icon" size="1.3em" /> Pages
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/dashboard/users" activeClassName="active">
            <FiUsers className="menu__icon" size="1.3em" /> Users
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/dashboard/settings" activeClassName="active">
            <FiSettings className="menu__icon" size="1.3em" /> Settings
          </NavLink>
          <ul className='submenu'>
            <li className='submenu__item'>
              <NavLink to='/dashboard/settings/seo' activeClassName='active'>
                SEO
              </NavLink>
            </li>
            <li className='submenu__item'>
              <NavLink to='/dashboard/settings/social' activeClassName='active'>
                Social
              </NavLink>
            </li>
            <li className='submenu__item'>
              <NavLink to='/dashboard/settings/advanced' activeClassName='active'>
                Advanced
              </NavLink>
            </li>
            <li className='submenu__item'>
              <NavLink to='/dashboard/settings/custom' activeClassName='active'>
                Custom
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
