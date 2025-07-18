import { Route, Routes } from "react-router-dom";
import Navigator from "./Navigator/Navigator";
import AddStudent from "./components/AddStudent";
import DeleteById from "./components/DeleteById";
import FindByName from "./components/FindByName";
import FindBySubString from "./components/FindBySubString"; 
import GetAllStudents from "./components/GetAllStudents";
import GetById from "./components/GetById";
import UpdateStudent from "./components/UpdateStudent";
import NotFound from "./components/NotFound";
import './App.css'; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigator />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/deleteById" element={<DeleteById />} />
        <Route path="/findByName" element={<FindByName />} />
        <Route path="/findBySubString" element={<FindBySubString />} /> 
        <Route path="/getAllStudents" element={<GetAllStudents />} />
        <Route path="/getById" element={<GetById />} />
        <Route path="/updateStudent" element={<UpdateStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
