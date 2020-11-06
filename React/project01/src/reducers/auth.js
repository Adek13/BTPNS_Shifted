const initialState = {
    dataLogin: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "login":
            return {
                    ...state,
                    dataLogin: action.payload.token
            }
        case "logout":
            return {
                ...state,
                dataLogin: ""
            }
        default:
            return state
    }
}

export default authReducer