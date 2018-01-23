export const userReducer = (state = {
    isRunning: false,
    workTime: 0
}, action) => {
    switch (action.type) {
        case "SET_IS_RUNNING":
            let timeValue;
            state = {
                ...state,
                isRunning: action.payload,
                workTime: action.timePayload
                // workTime: timeValue
            };
            break;
        case "RESET_TIME":
            state = {
                ...state,
                workTime: 0
            }
    }
    return state;
};