import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import AppContext from "../../contexts/App/AppContenxt";
import { AppReducerActionTypes } from "../../hooks/useAppReducer/types";
import { USER_ROUTE } from "../../routes";

interface UserGroupFormProps extends UserBaseFormProps {
  data: string;
}

const UserGroupForm: React.FC<UserGroupFormProps> = props => {
  const { onClose, onSubmit } = props;
  const {
    dispatch,
    state: {
      formData: { groupName, users }
    }
  } = React.useContext(AppContext);

  return (
    <Form
      onSubmit={e => {
        onSubmit(groupName);
      }}
      onClose={onClose}
    >
      <label>Group name:</label>
      <input
        type={"text"}
        value={groupName}
        onChange={e => {
          dispatch({
            type: AppReducerActionTypes.SetUserGroupName,
            payload: e.target.value
          });
        }}
        placeholder={"Group name"}
      />
      <div>
        <label>Users:</label>
        <ul className={"range users-range"}>
          {users.map((user, idx) => (
            <li key={`user-${idx}`}>{user}</li>
          ))}
        </ul>
        <Link to={USER_ROUTE}>
          <span className="clickable-text">Add user</span>
        </Link>
      </div>
    </Form>
  );
};

export default UserGroupForm;
