import { SignInData } from "@/types";
import { postRequest } from "./axiosSetup";

export const signIn = async (data: SignInData) => {
  const resp = await postRequest("auth/login", data);
  return resp;
};

export const signUp = async (data: SignInData) => {
  const resp = await postRequest("auth/sign-up", data);
  return resp;
};
