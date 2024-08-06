import { http } from "../api/http";

type LoginResult = {
  account: string;
  avatar: string;
  id: number;
  username: string;
  token: string;
};
export const postLogin = (phoneNumber: string) => {
  return http<LoginResult>({
    method: "POST",
    url: "/api/wxlogin",
    data: {
      phoneNumber,
    },
  });
};
