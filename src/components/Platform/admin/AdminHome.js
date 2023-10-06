import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../routes-nav/SideBar.css';
import { NavLink } from 'react-router-dom';

/** Admin Homepage
 *
 * props: TODO:
 * state: TODO:
 *
 * RoutesList -> AdminHome
 *
 */
function AdminHome() {

  return <div>
    <h1>Admin Dashboard</h1>
    <Menu>
      <NavLink className="menu-item" to="/admin"> Dashboard</NavLink>
      <NavLink className="menu-item" to="/students"> Students</NavLink>
      <NavLink className="menu-item" to="/teachers"> Teachers</NavLink>
      <NavLink className="menu-item" to="/reports"> Meeting Reports</NavLink>
      <NavLink className="menu-item" to="/billing"> Billing </NavLink>
    </Menu>
    <div>A search bar</div>
    <br></br>
    <div>Some stats here...</div>
  </div>;
}

export default AdminHome;
