import { Users } from "src/app/shared/model/Users";

export interface StateUsers {
  users: Users[] ;
  isloading: boolean | null;
  error: string | null;
  }
  
  export const initialState: StateUsers = {
    users: [] ,
    isloading: false,
    error: ""
  };
  