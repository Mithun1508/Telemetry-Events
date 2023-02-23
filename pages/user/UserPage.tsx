import React from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../../contexts/App/AppContenxt";
import { AppReducerActionTypes } from "../../hooks/useAppReducer/types";

import { USER_GROUP_ROUTE } from "../../routes";
import UserForm from "./UserForm";

const UserPage: React.FC = () => {
  const { dispatch } = React.useContext(AppContext);
  const history = useHistory();

  const onFinish = () => {
    history.push(USER_GROUP_ROUTE);
  };

  return (
    <UserForm
      onSubmit={user => {
        dispatch({
          type: AppReducerActionTypes.AddUser,
          payload: user
        });
        onFinish();
      }}
      onClose={onFinish}
    />
  );
};

export default UserPage;
