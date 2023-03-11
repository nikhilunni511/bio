import axios from "axios";

export const verifyToken = async (token) => {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/google/verify', { token });
    return true;
  } catch (error) {

    return false;
  }
}