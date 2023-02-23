export type SetUserGroupNameAction = {
  type: AppReducerActionTypes.SetUserGroupName;
  payload: string;
};

export type AddUserAction = {
  type: AppReducerActionTypes.AddUser;
  payload: string;
};

export type AddUserGroupAction = {
  type: AppReducerActionTypes.AddUserGroup;
};

export type ClearUserGroupAction = {
  type: AppReducerActionTypes.ClearUserGroup;
};

export type AppAction =
  | SetUserGroupNameAction
  | AddUserAction
  | AddUserGroupAction
  | ClearUserGroupAction;

export type UserGroup = {
  groupName: string;
  users: string[];
};

export enum AppReducerActionTypes {
  SetUserGroupName = "SetUserGroupName",
  AddUser = "AddUser",
  AddUserGroup = "AddUserGroup",
  ClearUserGroup = "ClearUserGroup"
}

export interface AppState {
  formData: UserGroup;
  data: UserGroup[];
}
