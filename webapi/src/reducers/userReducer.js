export const userReducer = (state = {
    isRunning: false,
    workTime: 0
}, action) => {
    switch (action.type) {
        case "START_COUNTER":
            state = {
                ...state,
                isRunning: true,
            };
            break;

        case "STOP_COUNTER":
            state = {
                ...state,
                isRunning: false,
            };
            break;

        case "RESET_TIME":
            state = {
                ...state,
                workTime: action.timePayload
            }
            break;

        case "SET_TIMER_TIME":
            state = {
                ...state,
                workTime: action.timePayload
            }
            break;
    }
    return state;
};