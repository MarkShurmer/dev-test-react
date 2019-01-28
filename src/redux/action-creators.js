const genericCreator = (actionType, payload) => ({
  type: actionType,
  payload: payload,
});

export { genericCreator };
