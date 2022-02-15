import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGY0YzRmOTVjNWMwN2RmNjRkZWM5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjUwNjQ5MywiZXhwIjoxNjQyNzY1NjkzfQ.8sj3U04Qh2N1qY2ByCqpHo3ENQLsJI_qqJY_srwX9Mw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
