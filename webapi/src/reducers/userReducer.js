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
                // workTime: timeValue
            };
            break;
            
            case "RESET_TIME":
            state = {
                ...state,
                workTime: 0
            }
            break;

            case "SET_TIMER_TIME":
            state = {
                ...state,
                workTime: action.timePayload

            }
        
    }
    return state;
};