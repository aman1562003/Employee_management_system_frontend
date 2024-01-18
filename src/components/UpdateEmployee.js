import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router";

const UpdateEmployee = () => {

    const {id} = useParams();

    const [employee, setEmployee] = useState({
        id: id,
        firstname: "",
        lastname: "",
        email: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    };

    useEffect(() => {
        const fetchData = async() => { 
        try{
            const response = await EmployeeService.getEmployeeById(employee.id);
            setEmployee(response.data);
        }catch(error) {
            console.log(error);
        }
    };
    fetchData();
    },[]);

    const UpdateEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id).then((response) => {
            console.log(response);
            navigate("/employeelist");
        }).catch((error) => {
            console.log(error);
        });
       
    }

    

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1 className="text-2xl font-bold">Update Employee</h1>
                </div>
                <div className=" items-center justify-center h-14 w-full my-4">
                    <label className="text-lg font-bold my-1 mx-2 text-gray-600"> First Name </label>
                    <input type="text"
                        name="firstname"
                        value={employee.firstname}
                        onChange={
                            (e) => handleChange(e)
                        }
                        className="border-2 border-gray-400 rounded-lg w-full px-4 py-2" placeholder="Enter First Name" />

                </div>
                <div className=" items-center justify-center h-14 w-full my-4">
                    <label className="text-lg font-bold my-1 mx-2 text-gray-600"> Last Name </label>
                    <input type="text"
                        name="lastname"
                        value={employee.lastname}
                        onChange={
                            (e) => handleChange(e)
                        }
                        className="border-2 border-gray-400 rounded-lg w-full px-4 py-2" placeholder="Enter Last Name" />

                </div>
                <div className=" items-center justify-center h-14 w-full my-4">
                    <label className="text-lg font-bold my-1 mx-2 text-gray-600"> Email </label>
                    <input type="email"
                        name="email"
                        value={employee.email}
                        onChange={
                            (e) => handleChange(e)
                        }
                        className="border-2 border-gray-400 rounded-lg w-full px-4 py-2" placeholder="Enter Email" />

                </div>

                <div className=" items-center justify-center h-14 w-full my-4 p-3 space-x-5">

                    <button onClick={UpdateEmployee} className=" rounded text-white font-semibold bg-blue-950  hover:bg-blue-200  px-4 py-2  hover:text-black"  >
                        Update
                    </button>

                    <button onClick={() => navigate("/employeelist")} className=" rounded text-white font-semibold bg-red-700   hover:bg-blue-200  px-4 py-2  hover:text-black"  >
                        Clear
                    </button>

                </div>
            </div>

        </div>
    )
};
export default UpdateEmployee;