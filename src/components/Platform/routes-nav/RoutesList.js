import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminHome from "../admin/AdminHome";
import StudentHome from "../students/StudentHome";
import TeacherHome from "../teachers/TeacherHome";
import ManageStudents from "../admin/ManageStudents";

/** Site-wide routes.
 *
 * Visiting a non-existant route navigates to the homepage.
 */

function RoutesList() {
  return (
    <div className="routes-list">
      <Routes>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/students" element={<ManageStudents />} />
        <Route path="/teacher" element={<TeacherHome />} />
        <Route path="/student" element={<StudentHome />} />
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
