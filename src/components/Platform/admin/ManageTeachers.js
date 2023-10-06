import React from 'react';
import TeacherList from '../teachers/TeacherList';

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