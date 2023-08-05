import { ActionTypes } from "../types";
import Api from "../../client-config"
import jwt from "jsonwebtoken";
import {logout} from "../connection/actions"
export const getUserBalance = () => {

    return async (dispatch) => {
        try {
            let { userId } = jwt.decode(sessionStorage.token);
            let { data } = await Api.post("/user/getPointsBalance", {
                userId: userId,
            });
            dispatch({
                type: ActionTypes.USER_BALANCE,
                payload: data.data
            })
        } catch (error) {
            if (error.response.data.message == "Invalid token") {
                dispatch(logout());
            }
            console.error("error while get user balance", error);
        }
    }
}