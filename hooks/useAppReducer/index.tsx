import React from "react";
import { AppAction, AppReducerActionTypes, AppState } from "./types";

export const initialFormData = {
  groupName: "",
  users: []
};

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case AppReducerActionTypes.ClearUserGroup: {
      return {
        ...state,
        formData: initialFormData
      };
    }
    case AppReducerActionTypes.AddUserGroup: {
      return {
        ...state,
        data: [...state.data, { ...state.formData }],
        formData: initialFormData
      };
    }
    case AppReducerActionTypes.AddUser: {
      return {
        ...state,
        formData: {
          ...state.formData,
          users: [...state.formData.users, action.payload]
        }
      };
    }
    case AppReducerActionTypes.SetUserGroupName: {
      return {
        ...state,
        formData: {
          ...state.formData,
          groupName: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};

const useAppReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    formData: initialFormData,
    data: []
  });

  return {
    state,
    dispatch
  };
};

export default useAppReducer;
