import axios from "axios";
import EmployeeModel from "../Employee/EmployeeModel";



class EmployeeService {

  readonly APIUrl = 'http://localhost:8090/api/Employee';
  readonly auth_token = localStorage.getItem("access_token");
  readonly header = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  }
  async getEmployeeList() {

    let emp = axios.get(this.APIUrl + '/GetEmployees', {
      method: 'GET',
      headers: this.header
    });
    return emp = emp.then(e => e.data);
  }

  async create(emp: EmployeeModel) {
    let result = await fetch(this.APIUrl + '/AddEmployee', {
      method: 'POST',
      headers: this.header,
      body: JSON.stringify(emp)
    })
    return result = await result.json();
  }
  async update(emp: EmployeeModel) {
    let result = await fetch(this.APIUrl + '/UpdateEmployee', {
      method: 'PUT',
      headers: this.header,
      body: JSON.stringify(emp)
    });
    return result = await result.json();
  }
  async delete(id: any) {
    let result = await fetch(this.APIUrl + '/DeleteEmployee/' + `${id}`, {
      method: 'DELETE',
      headers: this.header,
    });
    return result = await result.json();
  }
  async getById(id: any) {
    let result = await fetch(this.APIUrl + '/GetEmployee/' + `${id}`, {
      method: 'GET',
      headers: this.header,
    });
    return result = await result.json();
  }
}

export default new EmployeeService()