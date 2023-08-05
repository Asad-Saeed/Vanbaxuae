import { ActionTypes } from "../types";

let initialState = {
    pairs: []
}

const getPairsReducer = (state = initialState, { type, paylaod }) => {
    try {
        switch (type) {
            case ActionTypes.GET_PAIRS:
                return {
                    ...state,
                    pairs: paylaod
                }
            default:
                return state;

        }
    } catch (error) {
        console.error("error while get pair reducers", error);
    }
}

export default getPairsReducer;