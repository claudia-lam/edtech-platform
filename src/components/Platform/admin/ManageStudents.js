import React from 'react';
import StudentList from '../students/StudentList';

function ManageStudents() {
  return (
    <>
      <h1>Manage Students</h1>
      <div>A search bar</div>
      <button>Add Student</button>
      <StudentList />
    </>
  );

}

export default ManageStudents;