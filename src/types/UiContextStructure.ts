import { UIAction } from "../store/actions/uiActions/types/actionsUi";

export interface UI {
  isOpen: boolean;
  isDate: boolean;
  isCondition: boolean;
  isLoading: boolean;
  isError: boolean;
  textContent: string;
}

export type UiSrtucture = {
  ui: UI;
};

export interface UiContextStructure extends UiSrtucture {
  dispatch: React.Dispatch<UIAction>;
}
