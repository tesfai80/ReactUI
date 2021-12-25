
import React, { useState } from "react";
import employeeService from "../services/EmployeeService";


export default function CreateEmployee() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [month, setMonth] = useState(new Date());

    const handleDate = date => {
        setMonth(date);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        var emp = {
            employeeId: 0,
            employeeName: name,
            companyName: company,
            month: month,
        };
        employeeService.create(emp)
            .then(d => {
                alert('data created successfulyy!');
                window.location.href='/employee';
            }).catch(error => { console.log(error) });

    }

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit} style={{width:700}} className="card mt-4">
                <div className="form-group">
                    <input type='text' className="form-control" placeholder="Name"
                        onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <input type='text' className="form-control mt-2" placeholder="Company"
                        onChange={(e) => { setCompany(e.target.value) }} />
                </div>
                <div className="form-group">
                    <input type='date' className="form-control mt-2" placeholder="Date"
                        onChange={(e) => handleDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type='submit' className="btn btn-primary mt-2" value='Save' />
                </div>
            </form>
        </div>
    )
}

