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
  const token = useSelector((state: any) => state.auth.token);
  console.log(token);
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


export { AxiosProvider };
export default instance;
