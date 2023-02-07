import axios from "axios";
const login =  async (username, password) => {
  try {
    const response = await axios({
      method: 'post',
      url: ' https://torbet.perla-tech.com/log_in',
      headers: {},
      data: {
        "body": {
          "password": password,
          "phone_number": username
        }
      }
    });
    if (response.data.Token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;
