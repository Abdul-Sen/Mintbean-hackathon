function markdownReducer(currentState = { input: "" }, actionRequested) {
  switch (actionRequested.type) {
    case "UPDATE_INPUT":
      return {
        ...currentState,
        input: actionRequested.payload
      };
    default:
      return currentState;
  }
}

export default markdownReducer;
