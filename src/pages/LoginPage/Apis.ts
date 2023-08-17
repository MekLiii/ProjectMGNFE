import { Post } from "@/API/methods";

interface ILoginData {
  email: string;
  password: string;
}

const Login = async (data: ILoginData) => {
  return await Post("/Users/login", data);

};
export { Login };
