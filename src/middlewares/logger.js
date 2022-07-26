export const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Action :", action);
  next(action);
  console.log("Result State :", store.getState());
  console.groupEnd();
};
