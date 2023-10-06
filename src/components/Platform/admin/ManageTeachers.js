import React from 'react';
import TeacherList from '../teachers/TeacherList';

/** Manage Teachers
 *
 * authorization: admin only
 *
 * props: TODO:
 * state: TODO:
 *
 * RoutesList -> ManageTeachers -> TeacherList
 *
 */

function ManageTeachers() {
  return (
    <>
      <h1>Manage Teachers</h1>
      <div>A search bar</div>
      <button>Add Teacher</button>
      <TeacherList />
    </>
  );

}

export default ManageTeachers;