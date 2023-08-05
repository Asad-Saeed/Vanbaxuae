import axios from "axios";
import { ActionTypes } from "../types"

export const getPairs = () => async (dispatch) => {
    try {
        const { data } = await axios.get("https://www.binance.com/fapi/v1/exchangeInfo");
       //  console.log("get Live Pairs data==>",data);
        dispatch({
            type: ActionTypes.GET_PAIRS,
            paylaod: data.symbols.map((symbol) => {
               // console.log("get Live Pairs symbol==>",symbol);
                return { label: symbol.symbol, value: symbol.baseAsset }
            })
        })
    } catch (error) {
        console.error("error while get pair action", error);
    }
}

export const getPairsData = () => async (dispatch) => {
    try {
        const { data } = await axios.get("https://vanbaxuae.nakshtech.info/GetCoinMaster");
        //  console.log("data==>",data);
        dispatch({
            type: ActionTypes.GET_PAIRS,
            paylaod: data.data.map((symbol) => {
                console.log("data==>",symbol);
                return { label: symbol.coin_symbol, value: symbol.coin_name,remark:symbol.remark }
            })
        })
    } catch (error) {
        console.error("error while get pair action", error);
    }
}