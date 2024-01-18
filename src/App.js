import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addnewemployee from './components/Addnewemployee';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmpoyeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    // Add a valid expression here
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />}></Route>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeelist" element={<EmployeeList />}></Route>
          <Route path="/addnewemployee" element={<Addnewemployee />}></Route>
          <Route path="/editEmployee/:id" element={<UpdateEmployee/>}></Route>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
