import {IUserRegister} from "./IUserRegister";

export interface IUserLogin extends IUserRegister{
  login: string,
  password: string
}
