import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../Styles/GetAllStudents.css'
import { Link } from 'react-router-dom';

function GetAllStudents() {
  const [list, setList] = useState([]);

  const [count,setCount]=useState(0);

  async function fetchStudents() {
    try {
      const response = await axios.get("http://localhost:8080/getAllStudents");
      const students=response.data;
      setList(students);
      setCount(students.length>0? students.length:0);
    } catch (error) {
      console.error("Getting all students failed!", error);
    }
  }

  async function handleDelete(id) {
  try {
    const response = await axios.delete(`http://localhost:8080/deleteById/${id}`);
    const data = response.data;

    if (data.includes('deleted')) {
      toast.success("Student deleted successfully!");
    } else {
      toast.error("Student not found or could not be deleted.");
    }

    fetchStudents(); 
  } catch (error) {
    toast.error("Error while deleting student.");
    console.error("Delete error:", error);
  }
}

function handleEdit(student){

}


  

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="students-container">
      <h1>ALL STUDENTS</h1>
      <div className='count'>Total Students: {count>9?count:"0"+count}</div>

      <table className="students-table">
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Student Mail</th>
            <th>Course Name</th>
            <th rowSpan={2} style={{textAlign:"center"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.mail}</td>
              <td>{student.course}</td>
              <td>
                <div className="button-group">
                      <Link to='/updateStudent' state={{student}} >
                        <button className="edit">Edit</button>
                      </Link>
                      <button className="delete" onClick={()=>handleDelete(student.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetAllStudents;
