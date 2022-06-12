import { User } from "./user";

export interface authState{
  register:boolean,
  login:boolean,
  user: ReadonlyArray<User>
}