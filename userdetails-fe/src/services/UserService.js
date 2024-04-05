import axios from "axios";

const REST_API_BASE_URL = "http://localhost:2025/api/v2/user";

export const listUsers = () => axios.get(REST_API_BASE_URL);

export const createUser = (user) => axios.post(REST_API_BASE_URL, user);