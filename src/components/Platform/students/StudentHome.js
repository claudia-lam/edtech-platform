import React from 'react';
import ClassList from './ClassList';
import { Link } from "react-router-dom";

function StudentHome() {
  return (
    <>
      <h1>Student Dashboard</h1>
      <Link>Edit Profile</Link>
      <ClassList />
    </>
  );
}

export default StudentHome;