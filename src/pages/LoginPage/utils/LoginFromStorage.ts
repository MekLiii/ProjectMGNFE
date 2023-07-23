import jwtDecode from "jwt-decode";
import { IDecodeToken } from "../types";

export const LoginFromStorage = () => {
  const token = localStorage.getItem("token");
  const decodeToken = token !== "null"
    ? (jwtDecode(token as string) as IDecodeToken)
    : null;
  const expireDate = decodeToken ? new Date(decodeToken?.exp * 1000) : null;
  if (expireDate && expireDate < new Date()) {
    localStorage.removeItem("token");
    return null;
  }
  if (decodeToken && token) {
    return {
      token,
      nameid: parseInt(decodeToken.nameid),
      email: decodeToken.email,
      Guid: decodeToken.Guid,
    };
  }
  return null;
};
