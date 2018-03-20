import * as actionTypes from '../actions/actionTypes';

const initialState = {
    string: '0'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NUMBER:
            if(state.string.length === 1 && state.string === '0') {
                return {string: '' + action.value};
            } else {
                return {string: state.string + action.value};
            }
        case actionTypes.EVAL:
             try{
                 return {string: eval(state.string)}
             } catch(e) {
                 return {string: '0'}
             }
        case actionTypes.CLEAR:
            return {string: '0'};
        case actionTypes.BACKSPACE:
            return {string: state.string.slice(0, -1)};
        default:
            return state;
    }
};

export default reducer;