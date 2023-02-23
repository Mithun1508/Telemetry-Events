import React from "react";
import useAppReducer from "../../hooks/useAppReducer";
import AppContext from "../App/AppContenxt";

const AppContextProvider: React.FC<{}> = props => {
  const { state, dispatch } = useAppReducer();

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
