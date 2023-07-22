import axios from "axios";
import { useSelector } from "react-redux";

interface AxiosProviderProps {
  children: React.ReactNode;
}

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APIENDPOINT}/api/`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": import.meta.env.VITE_APIENDPOINT,
  },
});

const AxiosProvider = ({ children }: AxiosProviderProps) => {
    const state = useSelector((state: any) => state);
    console.log(state)
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  return <>{children}</>;
};

const Post = async (url: string, data: any) => {
  const response = await instance.post(url, data);
  return response.data;
};
const Get = async (url: string) => {
  const response = await instance.get(url);
  return response.data;
};
export { Post, Get, AxiosProvider };
export default instance;
