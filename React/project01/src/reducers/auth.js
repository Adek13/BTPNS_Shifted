const initialState = {
    statusLogin: false,
    dataUser: [],
    dataLogin: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "login":
            return {
                ...state,
                statusLogin: action.payload.statusLogin,
                dataLogin: action.payload.dataInput,
            }
        case "logout":
            return {
                ...state,
                dataLogin: {},
                statusLogin: false
            }
        default:
            return state
    }
}

export default authReducer