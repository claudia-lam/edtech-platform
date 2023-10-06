import React from 'react';
import styles from './Student.module.css';
import { Upload, PencilSquare } from 'react-bootstrap-icons';

/** Show page with list of students
 *
 * authorization: admin and teachers?
 *
 * props: TODO:
 * state: TODO:
 *
 * {ManageStudents, TeacherHome} -> StudentList -> StudentCard(TODO:)
 *
 */

function StudentList() {
  return <div>
    <table className={styles.studentTable}>
      <thead>
        <tr className={styles.studentTableCell}>
          <th>Student First</th>
          <th>Student Last</th>
          <th>Class Type</th>
          <th>Class</th>
          <th>Meeting Day</th>
          <th>Meeting Time(PST)</th>
          <th>Report</th>
          <th>Edit</th>
        </tr>
        <tr className={styles.studentTableCell}>
          <td>Taylor</td>
          <td>Swift</td>
          <td>Music</td>
          <td>Vocal</td>
          <td>Wednesday(Need date?)</td>
          <td>10:00 AM?</td>
          <td><Upload /></td>
          <td><PencilSquare /></td>
        </tr>
        <tr className={styles.studentTableCell}>
          <td>Justin</td>
          <td>Bieber</td>
          <td>Language</td>
          <td>Spanish</td>
          <td>Monday(Need date?)</td>
          <td>3:00 PM?</td>
          <td><Upload /></td>
          <td><PencilSquare /></td>
        </tr>
      </thead>
    </table>
  </div>;
}

export default StudentList;