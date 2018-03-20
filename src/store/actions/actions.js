import * as actionTypes from './actionTypes';

export const addNumber = value => {
    return {type: actionTypes.ADD_NUMBER, value}
};

export const clear = () => {
    return {type: actionTypes.CLEAR}
};

export const backspace = () => {
    return {type: actionTypes.BACKSPACE}
};

export const result = () => {
    return {type: actionTypes.EVAL}
};