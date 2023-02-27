export const closeModalActionCreator = () => ({
  type: "closeModal",
});

export const openLoadingActionCreator = () => ({
  type: "openLoadingModal",
});

export const openDateActionCreator = () => ({
  type: "openDateModal",
});

export const openConditionActionCreator = () => ({
  type: "openConditionModal",
});

export const openErrorActionCreator = (textContent: string) => ({
  type: "openErrorModal",
  payload: textContent,
});
