import axios from 'axios';
import * as React from 'react'
import Example from './Example';
import Update from './Update';

import employeeService from '../services/EmployeeService';
import { Button } from 'react-bootstrap';
export default class Employee extends React.Component<any, any> {
    readonly url = "http://localhost:8090/api/Employee/GetEmployees";
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false,
            employees: [],
            id:""
        };
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        this.refreshData();
    }
    handleUpdate = (id: any) => {
        alert(id);
     <Update/>
       
    };
    handleDelete = (id: any) => {
       employeeService.delete(id)
       .then(emp=>{
        this.refreshData();
        this.setState({employess:emp,isLoading:false})
       })
       .catch(error=>console.log(error));
       
    };
    refreshData = () => {
        employeeService.getEmployeeList()
     .then(d=>{
        this.setState({employees:d, isLoading: false})
     })
     .catch(error=>console.log(error));
    
    };
    render() {
        const { employees, isLoading } = this.state;
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <div>
                <table className='table table-bordered'>
                    <thead className='text-lg-center'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Date</th>
                            <th>Options</th>
                       </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(emp =>
                                <tr>
                                    <td key={emp.employeeId}>{emp.employeeId}</td>
                                    <td>{emp.employeeName}</td>
                                    <td>{emp.companyName}</td>
                                    <td>{emp.month}</td>
                                    <td>
                                        <Button variant='primary'  onClick={()=>this.handleUpdate(emp.employeeId)} >Update</Button>
                                        <Button variant='danger'  onClick={()=>this.handleDelete(emp.employeeId)} >Delete</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}