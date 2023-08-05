import { ActionTypes } from "../types";


let initialState = {
    userBalance: null
}

const userDetailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.USER_BALANCE:
            return {
                ...state,
                userBalance: payload
            }

        default:
            return { ...state }
    }
}

export default userDetailReducer;