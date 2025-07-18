import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navigator.css';

function Navigator() {
  const topRowLinks = [
    {
      to: '/getAllStudents',
      text: 'GET ALL STUDENTS',
      img: 'https://img.icons8.com/color/96/classroom.png',
    },
    {
      to: '/getById',
      text: 'GET BY ID',
      img: 'https://img.icons8.com/color/96/search.png',
    },
    {
      to: '/findByName',
      text: 'FIND BY NAME',
      img: 'https://img.icons8.com/color/96/find-user-male.png',
    },
  ];

  const bottomRowLinks = [
    {
      to: '/findBySubString',
      text: 'FIND BY SUBSTRING',
      img: 'https://img.icons8.com/?size=100&id=7695&format=png&color=000000',
    },
    {
      to: '/deleteById',
      text: 'DELETE BY ID',
      img: 'https://img.icons8.com/color/96/delete-user-data.png',
    },
    {
      to: '/updateStudent',
      text: 'UPDATE STUDENT',
      img: 'https://img.icons8.com/?size=100&id=OYbFh7PuEW4n&format=png&color=000000',
    },
  ];

  return (
    <div className="navigator-container">
      <h1 className="navigator-title">🎓 Student Management System</h1>
      <div className="layout">
        <div className="add-student-card">
          <Link to="/addStudent" className="card-link">
            <div className="card large">
              <img src="https://img.icons8.com/color/96/add-user-group-man-man.png" alt="Add Student" />
              <p className="card-text">ADD STUDENT</p>
            </div>
          </Link>
        </div>

        <div className="right-section">
          <div className="card-row">
            {topRowLinks.map((link, index) => (
              <Link to={link.to} key={index} className="card-link">
                <div className="card">
                  <img src={link.img} alt={link.text} />
                  <p className="card-text">{link.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="card-row">
            {bottomRowLinks.map((link, index) => (
              <Link to={link.to} key={index} className="card-link">
                <div className="card">
                  <img src={link.img} alt={link.text} />
                  <p className="card-text">{link.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigator;
