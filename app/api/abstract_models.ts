export interface Timestamps {
  createdAt: string;
  updatedAt: string;
}

export interface IUser extends Timestamps {
  id?: number;
  username?: string;
  email?: string;
  activated?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserWithTimestamps extends Timestamps {
  createdBy: IUser;
  updatedBy: IUser;
}

export interface Genres extends UserWithTimestamps {
  id: number;
  name: string;
  description: string;
}

export interface Score extends UserWithTimestamps {
  id: number;
  value: number;
  name: string;
  description: string;
}
