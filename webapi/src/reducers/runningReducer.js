export const runningReducer = (state={}, action) => {
    if (action.type === "CHANGE_IS_RUNNING") {
        state = {...state, isRunning: action.payload}
    }
    return state;
}