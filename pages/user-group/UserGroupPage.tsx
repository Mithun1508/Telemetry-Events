import React from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../../contexts/App/AppContenxt";
import { AppReducerActionTypes } from "../../hooks/useAppReducer/types";

import { HOME_ROUTE } from "../../routes";
import UserGroupForm from "./UserGroupForm";

const UserGroupPage: React.FC<{}> = () => {
  const history = useHistory();
  const {
    state: { formData },
    dispatch
  } = React.useContext(AppContext);

  const onFinish = () => {
    history.push(HOME_ROUTE);
  };

  return (
    <UserGroupForm
      onSubmit={(value: string) => {
        dispatch({
          type: AppReducerActionTypes.AddUserGroup
        });
        onFinish();
      }}
      data={formData.groupName}
      onClose={() => {
        dispatch({ type: AppReducerActionTypes.ClearUserGroup });
        onFinish();
      }}
    />
  );
};

export default UserGroupPage;
