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
          textContent: "Cargando..",
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
          textContent: `La fecha de entrega se ha actualizado correctamente a ${action.payload}, informaremos al cliente.`,
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
          textContent: `El estado de la reparación se ha actualizado correctamente a ${action.payload}. ¿Desea actualizar la fecha de entrega?`,
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
