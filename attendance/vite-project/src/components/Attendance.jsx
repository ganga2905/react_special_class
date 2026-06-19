import { useState } from "react";
import './Attendance.css';


const Attendance=()=>{
    const[employee,setEmployee]= useState([
        {id:1,name:"Ganga",status:"pending"},
         {id:2,name:"Gayathri",status:"pending"},
          {id:3,name:"Harish",status:"pending"},
           {id:4,name:"Hashini",status:"pending"}
    ]);

    const updateStatus=(id,newStatus)=>{
        
        const updateEmployee=employee.map((e)=>(
            e.id===id?
            {...e,status:newStatus}:e

        ))
        setEmployee(updateEmployee)
    }

    const presentCount= employee.filter((e)=>e.status=="present").length

    const absentCount=employee.filter((e)=>e.status=="absent").length


    return(
        <>
        <h1>Attendance</h1>

        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>STATUS</th>
                    <th colSpan={2}>ATTENDANCE</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map((emp,index)=>(
                        <tr key={index}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.status === "present"?"✅ Present": emp.status ==="absent"?  "❌ Absent" : "pending"}</td>
                            <td><button  className="present"onClick={()=>updateStatus(emp.id,"present")}>present</button></td>
                             <td><button className="absent" onClick={()=>updateStatus(emp.id,"absent")}>absent</button></td>

                        </tr>
        
                    ))
                }
            </tbody>

        </table>
        <div className="summary">
            <h3>present:{presentCount} </h3>
        <h3>absent:{absentCount}</h3>

        </div>
        
        </>
    )
}
export default Attendance;