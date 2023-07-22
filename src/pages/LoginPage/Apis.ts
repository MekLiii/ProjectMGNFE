import { Post } from "@/API/axios";

interface ILoginData {
  email: string;
  password: string;
}

const Login = async (data: ILoginData) => {
  const response = await Post("/Users/login", data);
  return response;
};
export { Login };
