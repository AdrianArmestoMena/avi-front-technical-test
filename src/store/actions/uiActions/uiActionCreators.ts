import { Condition } from "../../../types/Service";
import { UIAction } from "./types/actionsUi";

export const closeModalActionCreator = (): UIAction => ({
  type: "closeModal",
});

export const openLoadingActionCreator = (): UIAction => ({
  type: "openLoadingModal",
});

export const openDateActionCreator = (date: string): UIAction => ({
  type: "openDateModal",
  payload: date,
});

export const openConditionActionCreator = (condition: Condition): UIAction => ({
  type: "openConditionModal",
  payload: condition,
});

export const openErrorActionCreator = (textContent: string): UIAction => ({
  type: "openErrorModal",
  payload: textContent,
});
