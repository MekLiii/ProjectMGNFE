import { Post } from "@/API/axios";

interface ILoginData {
  email: string;
  password: string;
  userName: string;
}

const SignUp = async (data: ILoginData) => {
  const response = await Post("/Users/registerUser", data);
  return response;
};
export { SignUp };
