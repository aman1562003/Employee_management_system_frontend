import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import EmployeeService from '../services/EmployeeService';

const EmployeeList = () => {
    
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [employees, setEmployee]= useState(null);

    useEffect (() =>{
        const fetchData = async () =>{
            setLoading(true);
            try{
                const response = await EmployeeService.getEmployee();
                setEmployee(response.data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();  
    }, []);
    const deleteEmployee = (e,id) =>{
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((response) => {
            if(response){
                setEmployee((prevElement)=>{
                    return prevElement.filter((employee) => employee.id !== id);
                });
            }
        });
    };

    const editEmployee = (e,id) =>{
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    };


    return (
        <>
            <div className="container mx-auto my-8">
                <div className="h-12">
                    <button 
                    onClick={() => navigate('/addnewemployee')}
                     className="rounded bg-slate-500 text-white px-6 py-3 font-semibold ">
                        Add New Employee
                    </button>

                </div>
            </div>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Employee List</h1>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left font-medium tracking-wider ">ID</th>
                            <th className="py-2 px-4 border-b text-left font-medium tracking-wider"> First Name</th>
                            <th className="py-2 px-4 border-b text-left font-medium tracking-wider">Last Name</th>
                            <th className="py-2 px-4 border-b text-left font-medium tracking-wider">Email</th>
                            <th className="py-2 px-5 border-b text-right font-medium tracking-wider">Actions</th>
                        </tr>
                    </thead>

                    {!loading && (    
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td className="py-2 px-4 border-b text-left whitespace-nowrap">{employee.id}</td>
                                <td className="py-2 px-4 border-b text-left whitespace-nowrap">{employee.firstname}</td>
                                <td className="py-2 px-4 border-b text-left whitespace-nowrap">{employee.lastname}</td>
                                <td className="py-2 px-4 border-b text-left whitespace-nowrap">{employee.email}</td>
                                <td className="py-2 px-4 border-b text-right whitespace-nowrap space-x-3">
                                    <a 
                                        onClick={(e,id) => editEmployee(e, employee.id)}
                                    className=' text-blue-500 hover:text-black hover:cursor-pointer ' > Edit</a>
                                    
                                    <a 
                                    onClick={(e,id) => deleteEmployee(e,  employee.id)}  
                                    className=' text-red-500 hover:text-black hover:cursor-pointer ' > Delete</a>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                    )}
                </table>
            </div>







        </>
    );
};

export default EmployeeList;

// Path: esa-frontend/src/components/EmployeeList.js

{/* <div className="container mx-auto">
<h1 className="text-2xl font-bold mb-4">Employee List</h1>
<table className="min-w-full bg-white">
    <thead>
        <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Position</th>
        </tr>
    </thead>
    <tbody>
        {employees.map((employee) => (
            <tr key={employee.id}>
                <td className="py-2 px-4 border-b">{employee.id}</td>
                <td className="py-2 px-4 border-b">{employee.name}</td>
                <td className="py-2 px-4 border-b">{employee.position}</td>
                <td className="py-2 px-4 border-b">{employee.position}</td>
            </tr>
        ))}
    </tbody>
</table>
</div> */}