import axios from "axios";

export const verifyToken = async (token) => {
  console.log("🚀 ~ file: verifyToken.js:4 ~ verifyToken ~ token:", token)
  try {
    const response = await axios.post('http://localhost:3000/api/auth/google/verify', { token });
    console.log("🚀 ~ file: verifyToken.js:6 ~ verifyToken ~ response:", response)
    return true;
  } catch (error) {

    return false;
  }
}