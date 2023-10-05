import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function AdminHome() {

  function showSideBar(event) {
    event.preventDefault();
  }

  return <div>
    <Menu>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <a onClick={showSideBar} className="menu-item--small" href="/admin">Settings</a>
    </Menu>
  </div>;
}

export default AdminHome;
