import { ActionTypesUi } from "./actionsTypesUi";

export interface UIAction {
  type: ActionTypesUi;
  payload?: string;
}
