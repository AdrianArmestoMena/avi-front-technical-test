import { useReducer } from "react";
import { UI, UiSrtucture } from "../../../types/UiContextStructure";
import uiReducer from "../../reducers/uiReducer/uiReducer";
import UiContext from "./UiContext";

interface UiContextProviderProps {
  children: JSX.Element | JSX.Element[];
  initialUiState?: UiSrtucture;
}

const UiContextProvider = ({
  children,
  initialUiState = { ui: {} as UI },
}: UiContextProviderProps): JSX.Element => {
  const [UiState, dispatch] = useReducer(uiReducer, initialUiState);

  return (
    <UiContext.Provider value={{ ...UiState, dispatch }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
