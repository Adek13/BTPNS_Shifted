const initialState = {
    dataUser: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addUser":
            return {
                ...state,
                dataUser: action.payload.dataUser,
            }
        default:
            return state
    }
}

export default authReducer