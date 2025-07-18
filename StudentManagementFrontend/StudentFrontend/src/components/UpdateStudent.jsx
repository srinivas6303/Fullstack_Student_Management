import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../Styles/UpdateStudent.css';
import { useLocation } from 'react-router-dom';

function UpdateStudent() {

  const location =useLocation();
  const passedStudent =location.state?.student;

  const [id, setId] = useState('');
  const [student, setStudent] = useState(null);
  const [msg, setMsg] = useState('');

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [course, setCourse] = useState('');

  useEffect(()=>{
    if (passedStudent) {
      setStudent(passedStudent);
      setId(passedStudent.id);
      setName(passedStudent.name);
      setMail(passedStudent.mail);
      setCourse(passedStudent.course);
    }
  },[passedStudent])

  async function handleSearch(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/getById/${id}`);
      const student = response.data;
      if (student && student.id != null) {
        setStudent(student);
        setName(student.name);
        setMail(student.mail);
        setCourse(student.course);
        setMsg('Student found!');
      } else {
        setStudent(null);
        toast.error('Student not found with that ID');
      }
    } catch (error) {
      console.error('Error occurred while fetching student:', error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const updatedStudent = {
      id: student.id,
      name: name,
      mail: mail,
      course: course,
    };

    try {
      await axios.put(`http://localhost:8080/updateStudent`, updatedStudent);
      toast.success('Student updated successfully!');
      setId('');
      setStudent(null);
      setMsg('');
      setName('');
      setMail('');
      setCourse('');
    } catch (error) {
      console.error('Error occurred while updating student:', error);
      toast.error('Update failed!');
    }
  }

  return (
    <div className="update-student-container">
      <form className="update-student-form" onSubmit={handleSearch}>
  <h1 className="update-student-title">UPDATE STUDENT BY ID</h1>
  
  <input
    className="update-student-input"
    name="studentId"
    id="studentId"
    value={id}
    type="number"
    onChange={(e) => setId(e.target.value)}
    placeholder="Enter student ID"
    required
  />
  <button className="update-student-button" type="submit">Search</button>
</form>

{student && (
  <form className="update-student-edit-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label className="update-student-label" htmlFor="id">ID:</label>
      <input
        className="update-student-input"
        name="id"
        id="id"
        type="number"
        value={student.id}
        readOnly
      />
    </div>

    <div className="form-row">
      <label className="update-student-label" htmlFor="name">Name:</label>
      <input
        className="update-student-input"
        name="name"
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>

    <div className="form-row">
      <label className="update-student-label" htmlFor="mail">Email:</label>
      <input
        className="update-student-input"
        name="mail"
        id="mail"
        type="email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        required
      />
    </div>

    <div className="form-row">
      <label className="update-student-label" htmlFor="course">Course:</label>
      <input
        className="update-student-input"
        name="course"
        id="course"
        type="text"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />
    </div>

    <button className="update-student-button" type="submit">Update</button>
  </form>
)}

    </div>
  );
}

export default UpdateStudent;
