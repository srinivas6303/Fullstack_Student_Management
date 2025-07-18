import axios from 'axios';
import React, { useState } from 'react';
import '../Styles/FindByName.css';

export default function FindByName() {

  const [name,setName]=useState('');
  const [student,setStudent]=useState([]);
  const [msg,setMsg]=useState("");

  async function handleSubmit(e){
    e.preventDefault();
    const response=await axios.get(`http://localhost:8080/findByName/${name}`)
    if(response.data && response.data.length > 0){
      setStudent(response.data)
      if(response.data.length===1){
        setMsg("Student Found!")
      }else{
        setMsg("Students Found!")
      }
      setName("")
    }else{
      setStudent([])
      setMsg("Student not found with that name!")
      setName("")
    }
  }

  return (
    <div className="findbyname-container">
      <h1 className="title">FIND BY NAME</h1>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">Enter Student Name</label>
        <input
          type='text'
          placeholder='Enter student name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
          className="input"
        />
        <button type='submit' className="button">Search</button>

        {msg && <p className="message">{msg}</p>}

        {student.length > 0 && (
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
              {student.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.mail}</td>
                  <td>{student.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </form>
    </div>
  )
}
