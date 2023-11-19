import { IUser } from "./abstract_models";

class User implements IUser {
  id?: number;
  username?: string;
  email?: string;
  activated: boolean = false;
  createdAt: string;
  updatedAt: string;

  constructor(
    id?: number,
    username?: string,
    email?: string,
    activated: boolean = false,
    createdAt: string = Date.now().toString(),
    updatedAt: string = Date.now().toString()
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.activated = activated;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static instance() {
    return new User(
      undefined,
      undefined,
      undefined,
      false,
      User._now(),
      User._now()
    );
  }

  private static _now() {
    return Date.now().toString();
  }

  static randomId() {
    return Math.ceil(Math.random() * Math.pow(10, 9)) % Math.pow(10, 9);
  }

  setId(id?: number | null) {
    this.id = id ? id : User.randomId();
  }

  setUsername(username?: string) {
    if (!username || username === "") {
      throw new Error("Username can't be neither `null` nor `empty`.");
    }
    this.username = username;
  }

  setEmail(email?: string) {
    if (!email || email === "")
      throw new Error("Email can't be neither `null` nor `empty`.");
    // const re: RegExp = new RegExp(
    //   "[^_.][w.]*[^._]@[^_.][w.]*[^._]\\.[a-zA-Z]+{2,}"
    // );
    const pattern = "[w.]{3,}@w+.[a-zA-Z]+{2,}";
    if (!/[\w\.]+@\w+\.\w+/.test(email)) {
      throw new Error(
        `Email must satisfy the following expression: \`${pattern}\``
      );
    }
    this.email = email;
  }

  setIsActivated(activated: boolean) {
    this.activated = activated;
  }

  setCreatedAt(createdAt?: string) {
    this.createdAt = createdAt ? createdAt : User._now();
  }

  setUpdatedAt(updatedAt?: string) {
    this.updatedAt = updatedAt ? updatedAt : User._now();
  }
}

export class UserBuilder {
  private _id?: number = undefined;
  private _username?: string = undefined;
  private _email?: string = undefined;
  private _activated: boolean = false;
  private _createdAt?: string = undefined;
  private _updatedAt?: string = undefined;

  public static instance() {
    return new UserBuilder();
  }

  username(username: string) {
    this._username = username;
    return this;
  }

  email(email: string) {
    this._email = email;
    return this;
  }

  isActivated(activated: boolean) {
    this._activated = activated;
    return this;
  }

  public update(user?: IUser) {
    if (user?.id && user.id === this._id)
      if (user?.email) {
        this._email = user.email;
      }
    if (user?.username) {
      this._username = user?.username;
    }
    if (this.username === null || this._email === null)
      throw new Error("You must specify `username` and `email`.");
    return this;
  }

  build(generateId: boolean = false) {
    const user: User = User.instance();
    user.setId(this._id || !generateId ? this._id : User.randomId());
    user.setUsername(this._username);
    user.setEmail(this._email);
    user.setIsActivated(this._activated);
    user.setCreatedAt(this._createdAt);
    user.setUpdatedAt(this._updatedAt);
    return user;
  }

  public static create(
    username: string,
    email: string,
    generateId: boolean = false
  ): IUser {
    return UserBuilder.instance()
      .username(username)
      .email(email)
      .build(generateId);
  }
}
