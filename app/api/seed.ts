import { IUser } from "./abstract_models";
import { UserBuilder } from "./implemented_models";

export function createUser(username: string, email: string): IUser {
  return UserBuilder.create(username, email);
}
