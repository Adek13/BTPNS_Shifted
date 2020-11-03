const initialState = {
    statusLogin: false,
    dataUser: [],
    dataLogin: {
        token : "",
        id: ""
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "login":
            return {
                ...state,
                statusLogin: action.payload.statusLogin,
                dataLogin: {
                    token : action.payload.token,
                    id: action.payload.id
                }
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