import React from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import AdminHome from "../admin/AdminHome";
import StudentHome from "../students/StudentHome";
import TeacherHome from "../teachers/TeacherHome";
import ManageStudents from "../admin/ManageStudents";
import ManageTeachers from "../admin/ManageTeachers";
import { slide as Menu } from 'react-burger-menu';


/** Site-wide routes.
 *
 * Visiting a non-existant route navigates to the homepage.
 */

function RoutesList() {
  return (
    <div className="routes-list">
      {/* TODO: Write conditional logic to render different sidebar links based on login status
      <Menu>
        <NavLink className="menu-item" to="/admin"> Dashboard</NavLink>
        <NavLink className="menu-item" to="/students"> Students</NavLink>
        <NavLink className="menu-item" to="/teachers"> Teachers</NavLink>
        <NavLink className="menu-item" to="/reports"> Meeting Reports</NavLink>
        <NavLink className="menu-item" to="/billing"> Billing </NavLink>
        {/* <a onClick={showSideBar} className="menu-item--small" href="/admin">Settings</a> */}
      {/* </Menu> */}
      <Routes>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/students" element={<ManageStudents />} />
        <Route path="/teachers" element={<ManageTeachers />} />
        <Route path="/reports" element={<MeetingReports />} />
        <Route path="/teacher" element={<TeacherHome />} />
        <Route path="/student" element={<StudentHome />} />
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
