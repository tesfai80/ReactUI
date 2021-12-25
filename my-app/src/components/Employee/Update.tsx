
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { render } from "react-dom";
import employeeService from "../services/EmployeeService";


export default function Update(props) {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [month, setMonth] = useState(new Date());
    const [filter, setFilter] = useState("");


    const handleLoad = () => {
        employeeService.getById(filter)
            .then(res => {
                setName(res.employeeName);
                setCompany(res.companyName);
                setMonth(res.month);

            })
            .catch(error => console.log(error));
    }
    const handleDate = (date:any) => {
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
        employeeService.update(emp)
            .then(d => {
                alert('data updated successfulyy!');
                window.location.href = '/employee';
            }).catch(error => { console.log(error) });

    }
    const handleText = (value) => {
        setFilter(value);
    }

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-4">
                    <input type='text' placeholder="ID" onChange={(e) => handleText(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <Button variant='primary' onClick={handleLoad}>Load</Button>
                </div>
            </div>
            <hr/>
            <form onSubmit={handleSubmit} style={{width:700}}>
                <div className="form-group">
                    <input type='text' className="form-control" placeholder="Name" value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <input type='text' className="form-control mt-2" placeholder="Company" value={company}
                        onChange={(e) => { setCompany(e.target.value) }} />
                </div>
                <div className="form-group">
                    <input type='date' className="form-control mt-2" placeholder="Date" value={month.toString().slice(0,10)}
                        onChange={(e) => handleDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type='submit' className="btn btn-success mt-2" value='Save' />
                </div>
            </form>
        </div>
    )
}

