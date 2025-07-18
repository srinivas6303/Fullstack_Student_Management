import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/GetById.css'


function GetById() {
  const [id, setId] = useState('');
  const [student, setStudent] = useState(null);
  const [msg,setMsg]=useState();

  async function getById(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/getById/${id}`);
      if(response.data && response.data.id){
      setStudent(response.data);
      setId('')
      setMsg('Student found!');
      }
      else{
        setStudent(null)
        setMsg("Student Not found with that Id")
      }

    } catch (error) {
      setStudent(null);
      console.error("fetching student failed based on id")
      setId('')
      setMsg("Student Not found with that Id");
    }
  }

  return (
    <div className="get-by-id-container">
      <h1>SEARCH BY STUDENT ID</h1>
      <form onSubmit={getById}>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Student ID"
        required
      />
      <button type='submit'>Search</button><br />

      {msg && <p className='msg'>{msg}</p>}

      {student && (
        <table>
          <thead>
            <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Student Mail</th>
                <th>Student Course</th>
              </tr>
          </thead>
          <tbody>
           
                <tr>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.mail}</td>
                  <td>{student.course}</td>
                </tr>
    
          </tbody>
        </table>
      )}
      
      </form>

      
    </div>
  );
}

export default GetById;
