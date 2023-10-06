import React from 'react';
import styles from './Teacher.module.css';
import { PencilSquare } from 'react-bootstrap-icons';

/** Show page with list of teachers
 *
 * authorization: admin only
 *
 * props: TODO:
 * state: TODO:
 *
 * ManageTeachers -> TeacherList -> TeacherCard(TODO:)
 *
 */

function TeacherList() {
  return <div>
    <table className={styles.teacherTable}>
      <thead>
        <tr className={styles.teacherTableCell}>
          <th>Teacher First</th>
          <th>Teacher Last</th>
          <th>Meeting ID?(need zoom ID instead?)</th>
          <th>Phone Number</th>
          <th>Time Zone</th>
          <th>Level</th>
          <th>Edit</th>
        </tr>
        <tr className={styles.teacherTableCell}>
          <td>Mother</td>
          <td>Theresa</td>
          <td>123456</td>
          <td>(573)578-4836</td>
          <td>PST</td>
          <td>3</td>
          <td><PencilSquare /></td>
        </tr>
        <tr className={styles.teacherTableCell}>
          <td>Bill</td>
          <td>Nye</td>
          <td>67890</td>
          <td>(513)578-4830</td>
          <td>PST</td>
          <td>10</td>
          <td><PencilSquare /></td>
        </tr>
      </thead>
    </table>
  </div>;
}

export default TeacherList;