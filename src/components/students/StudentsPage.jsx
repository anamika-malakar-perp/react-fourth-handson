import React from 'react';
import './StudentsPage.css';
import StudentsTable from './StudentsTable';
import { Link } from 'react-router-dom';

const StudentsPage = () => {

    return (
        <div className='students-page'>
            <div className="student-page-header">
                <div className='details-heading'>
                    Student Details
                </div>

                <div>
                    <Link to="/students-desc"><button className='add-btn'>Add new student</button></Link>
                </div>
            </div>

            <div>
                <StudentsTable/>
            </div>
        </div>
    )
}

export default StudentsPage