import { Bike } from "./bike";

export class User {
    _id: string;
    username: string;
    email: string;
    password: string;
    bike:Bike[];
  }