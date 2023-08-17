import { Post } from "@/API/methods";

interface ILoginData {
  email: string;
  password: string;
  userName: string;
}

const SignUp = async (data: ILoginData) => {
  return  await Post("/Users/registerUser", data);
};
export { SignUp };
