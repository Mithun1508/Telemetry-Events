import React from "react";
import { PropsWithoutRef } from "react";

interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
}

const Form: React.FC<PropsWithoutRef<FormProps>> = props => {
  const { onSubmit, children, onClose } = props;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      {children}
      <div className="buttons-container">
        <button onClick={onClose}>Close</button>
        <button type={"submit"}>submit</button>
      </div>
    </form>
  );
};

export default Form;
