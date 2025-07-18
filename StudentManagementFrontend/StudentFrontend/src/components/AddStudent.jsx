import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/AddStudent.css'; 
import { toast } from 'react-toastify';

function AddStudent() {
  const [student, setStudent] = useState({
    id: '',
    name: '',
    mail: '',
    course: '',
  });

  function handleData(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  async function addStudent(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/addStudent", student);
      const message= (response.data || "Student added successfully!");
      if(message.toLowerCase().includes('already')){
        toast.error(message);
      }else{
        toast.success(message);
      setStudent({
        id: '',
        name: '',
        mail: '',
        course: '',
      });
    }
    } catch (error) {
      console.error("Failed to add student.", error);
      toast.error("Failed to add student.");
    }
  }

  return (
    <div className="add-student-container">
      <h1>ADD STUDENT</h1>

      <form onSubmit={addStudent}>
        <label>Student ID</label>
        <input type="number" name="id" value={student.id} placeholder="Enter Student ID" onChange={handleData} required />

        <label>Student Name</label>
        <input type="text" name="name" value={student.name} placeholder="Enter Student Name" onChange={handleData} required />

        <label>Student Mail</label>
        <input type="email" name="mail" value={student.mail} placeholder="Enter Student Mail" onChange={handleData} required />

        <label>Student Course</label>
        <input type="text" name="course" value={student.course} placeholder="Enter Student Course" onChange={handleData} required />

        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default AddStudent;
