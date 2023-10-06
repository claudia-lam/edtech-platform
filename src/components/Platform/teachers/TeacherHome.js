import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import StudentList from '../students/StudentList';


function TeacherHome() {
  return <div>
    <h1>Teacher Dashboard</h1>
    <Menu>
      <NavLink className="menu-item" to="/teacher"> Dashboard</NavLink>
      <NavLink className="menu-item" to="/students"> Edit Profile </NavLink>
    </Menu>
    <StudentList />
  </div>;
}

export default TeacherHome;