export const userReducer = (state={}, action) => {
    if (action.type === "CHANGE_USER") {
        state = {...state, name: action.payload}
    }
    return state;
}