import { UiSrtucture } from "../../../types/UiContextStructure";
import { UIAction } from "../../actions/uiActions/types/actionsUi";

const uiReducer = (previewState: UiSrtucture, action: UIAction) => {
  let newUiState: UiSrtucture;

  switch (action.type) {
    case "closeModal":
      newUiState = {
        ui: {
          ...previewState.ui,
          isOpen: false,
        },
      };
      break;

    case "openLoadingModal":
      newUiState = {
        ui: {
          ...previewState.ui,
          isOpen: true,
          isCondition: false,
          isDate: false,
          isLoading: true,
          isError: false,
        },
      };
      break;

    case "openDateModal":
      newUiState = {
        ui: {
          ...previewState.ui,
          isOpen: true,
          isCondition: false,
          isDate: true,
          isLoading: false,
          isError: false,
        },
      };
      break;

    case "openConditionModal":
      newUiState = {
        ui: {
          ...previewState.ui,
          isOpen: true,
          isCondition: true,
          isDate: false,
          isLoading: false,
          isError: false,
        },
      };
      break;

    case "openErrorModal":
      newUiState = {
        ui: {
          textContent: action.payload as string,
          isOpen: true,
          isCondition: false,
          isDate: false,
          isLoading: false,
          isError: true,
        },
      };
      break;
    default:
      newUiState = {
        ...previewState,
      };
      break;
  }

  return newUiState;
};

export default uiReducer;
