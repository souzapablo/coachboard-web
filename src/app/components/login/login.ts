export interface LoginResponse {
  userId: number;
  token: string;
}

export interface LoginInput {
  nickname: string;
  password: string;
}
