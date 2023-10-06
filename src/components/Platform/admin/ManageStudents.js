import React from 'react';
import StudentList from '../students/StudentList';

/** Manage Students
 *
 * authorization: admin and teacher?
 *
 * props: TODO:
 * state: TODO:
 *
 * RoutesList -> ManageStudents -> StudentList
 *
 */

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