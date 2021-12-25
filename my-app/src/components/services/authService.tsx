
import axios from "axios";
import User from '../Login/User';
const API_URL = "http://localhost:8090/api/auth";
const head=new Headers().set('Content-Type', 'application/json');

class AuthService {
  async login(user: User) {
    
    var data = JSON.stringify(user);
  var  head: { 
      'Content-Type': 'application/json'
    };
    const response = await axios
      .post(API_URL, {
       data:{data}
        
      });
    if (response.data.accessToken) {
      localStorage.setItem("access_token", JSON.stringify(response.data));
    }

    return response.data;
  }

  logout() {
    localStorage.removeItem("access_token");
  }
}
export default new AuthService();