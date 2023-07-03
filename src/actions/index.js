export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const ADD_MEMORY = "ADD_MEMORY"
export const R_MEMORY = "R_MEMORY"
export const C_MEMORY = "C_MEMORY"

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation = (operator) => {
  return ({ type: CHANGE_OPERATION, payload: operator})
}

export const clearDisplay = () => {
  return ({type: CLEAR_DISPLAY})
}

export const addMemory = () => {
  return ({type: ADD_MEMORY})
}

export const rMemory = () => {
  return ({type: R_MEMORY})
}

export const cMemory = () => {
  return ({type: C_MEMORY})
}