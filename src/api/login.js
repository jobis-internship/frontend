import axios from "axios";

export const loginRequest = async (username, password) => {
  try {
    const response = await axios.post("https://api.example.com/login", {
      username,
      password,
    });

    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.error("로그인 실패:", error);
    throw error;
  }
};
