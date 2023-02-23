import React from "react";
import {
  AppAction,
  AppState,
  initialFormData
} from "../../hooks/useAppReducer";

const AppContext = React.createContext<{
  dispatch: (action: AppAction) => void;
  state: AppState;
}>({
  dispatch: (action: AppAction) => {},
  state: {
    formData: initialFormData,
    data: []
  }
});

export default AppContext;
