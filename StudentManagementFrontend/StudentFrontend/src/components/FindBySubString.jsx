import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/FindBySubString.css';

export default function FindBySubString() {
  const [students, setStudents] = useState([]);
  const [msg, setMsg] = useState('');
  const [value, setValue] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:8080/findBySubString/${value}`
      );
      if (data.length > 0) {
        setStudents(data);
        setMsg(data.length === 1 ? 'Student found!' : 'Students found!');
      } else {
        setStudents([]);
        setMsg("Student doesn't match with provided sub-string");
      }
      setValue('');
    } catch (error) {
      console.error('Find by name error:', error);
      setMsg('Something went wrong. Please try again.');
    }
  }

  return (
    <div className="find-container">
      <form onSubmit={handleSubmit}>
        <h2>FIND BY SUB-STRING</h2>

        <label>Enter your sub-string</label>
        <input
          type="text"
          value={value}
          placeholder="Enter your sub-string"
          onChange={(e) => setValue(e.target.value)}
          required
        />

        <button type="submit">Search</button>

        {msg && <p>{msg}</p>}

        {students.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Student Id</th>
                  <th>Student Name</th>
                  <th>Student Mail</th>
                  <th>Student Course</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.mail}</td>
                    <td>{s.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        )}
      </form>
    </div>
  );
}
