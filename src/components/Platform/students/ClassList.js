import React from 'react';
import styles from './Student.module.css';
import { FileEarmark } from 'react-bootstrap-icons';

/** Show page with list of classes
 *
 * authorization: student only?
 *
 * props: TODO:
 * state: TODO:
 *
 * StudentHome -> ClassList -> ClassCard (TODO:)
 *
 */

function ClassList() {
  return <div>
    <table className={styles.studentTable}>
      <thead>
        <tr className={styles.studentTableCell}>
          <th>Teacher First</th>
          <th>Teacher Last</th>
          <th>Class Type</th>
          <th>Class</th>
          <th>Meeting Day</th>
          <th>Meeting Time(PST)</th>
          <th>Report</th>
        </tr>
        <tr className={styles.studentTableCell}>
          <td>Mother </td>
          <td>Theresa</td>
          <td>Humanities</td>
          <td>Charity</td>
          <td>Wednesday(Need date?)</td>
          <td>10:00 AM?</td>
          <td><FileEarmark /></td>
        </tr>
        <tr className={styles.studentTableCell}>
          <td>Justin</td>
          <td>Bieber</td>
          <td>Language</td>
          <td>Spanish</td>
          <td>Monday(Need date?)</td>
          <td>3:00 PM?</td>
          <td><FileEarmark /></td>
        </tr>
      </thead>
    </table>
  </div>;
}

export default ClassList;