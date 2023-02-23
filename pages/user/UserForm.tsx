import React from "react";
import Form from "../../components/Form";

const UserForm: React.FC<UserBaseFormProps> = props => {
  const { onClose, onSubmit } = props;
  const [userName, setUserName] = React.useState<string>("");

  return (
    <Form
      onSubmit={e => {
        onSubmit(userName);
      }}
      onClose={onClose}
    >
      <input
        type={"text"}
        value={userName}
        onChange={e => {
          setUserName(e.target.value);
        }}
        placeholder={"User name"}
      />
    </Form>
  );
};

export default UserForm;
