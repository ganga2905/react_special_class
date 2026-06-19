import { useState } from "react";

const Attendance=()=>{
    const[employee,setEmployee]= useState([
        {id:1,name:"Ganga",status:"pending"},
         {id:2,name:"Gayathri",status:"pending"},
          {id:3,name:"Harish",status:"pending"},
           {id:4,name:"Hashini",status:"pending"}
    ]);

    const updateStatus=(id,)=>{

    }


    return(
        <>
        <h1>Attendance</h1>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>STATUS</th>
                    <th>ATTENDANCE</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map((emp,index)=>(
                        <tr key={index}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.status}</td>
                            <td><button onClick={()=>updateStatus(emp.id,"present")}>present</button></td>
                             <td><button onClick={()=>updateStatus(emp.id,"absent")}>absent</button></td>

                        </tr>
        
                    ))
                }
            </tbody>

        </table>
        </>
    )
}
export default Attendance;