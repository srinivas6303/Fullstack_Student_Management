import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../Styles/DeleteById.css';

export default function DeleteById() {
  const [student, setStudent] = useState(null);
  const [id, setId] = useState("");
  const [msg, setMsg] = useState("");
  const [deletes, setDeletes] = useState(false);

  async function handleFetch(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/getById/${id}`);
      const data = response.data;

      if (data && data.id !== null) {
        setStudent(data);
        setMsg("Student found successfully!");
        setDeletes(true);
      } else {
        setStudent(null);
        setMsg("");
        toast.error("No student found with the provided ID.");
        setDeletes(false);
      }
    } catch (error) {
      setMsg("An error occurred while fetching the student.");
      setStudent(null);
      setDeletes(false);
      console.error("Fetch error:", error);
    }
  }

  async function handleDelete() {
    try {
      const response = await axios.delete(`http://localhost:8080/deleteById/${id}`);
      const data = response.data;

      if (data.includes("deleted")) {
        setMsg("");
        toast.success("Student deleted successfully!");
        setStudent(null);
        setDeletes(false);
        setId("");
      } else {
        toast.error("Student not found. Deletion failed.");
        setMsg("Deletion failed: student not found.");
      }
    } catch (error) {
      setMsg("An error occurred while deleting the student.");
      console.error("Delete error:", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleFetch} className='hh'>
        <h2>Delete Student by ID</h2>
        <label>Enter Student ID</label>

        <div className='con'>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter student ID"
            required
          />
          <button className="search-btn" type="submit">&#8594;</button>
        </div>

        {msg && <p>{msg}</p>}

        {deletes && student && (
          <div className="student-info">
            <p><strong>ID:</strong> {student.id}</p>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.mail}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
          </div>
        )}
      </form>
    </div>
  );
}
