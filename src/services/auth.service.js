import axios from "axios";
const login =  (phone, password) => {
    return axios({
      method: 'post',
      url: ' https://torbet.perla-tech.com/log_in',
      headers: {},
      data: {
        "body": {
          "password": password,
          "phone_number": phone
        }
      }
    }).then((response) => {
      
      return response.data;
    });
  }



const authService = {
  login,
 
};

export default authService;
