
import { ActionTypes } from "../types";
import Api from "../../client-config"
import { toast } from 'react-toastify';
export const userLogin = (userDetail) => {
  return async (dispatch) => {
    try {
    let { data: { data } } = await Api.post("/api/auth/login", userDetail);
    sessionStorage.setItem("token", data.token)
    window.location.href = "/";
  } catch (error) {
    toast.error(error.response.data.showableMessage)
  }
  };
};
export const logout = () => {
  return async () => {
    sessionStorage.removeItem("token")
    window.location.href = "/Login";
  };
};

export const registerUser = (userData) => {
  return async () => {
    try {
      console.log("userData", userData);
      let { data } = await Api.post("/api/auth/register", userData);
      if (data.status == "success") {
        sessionStorage.setItem("token", data.data.token)
        toast.info(data.showableMessage)
        window.location.href = "/";
      }
    } catch (error) {
      toast.error(error.response.data.showableMessage)
      console.error("error while register user", error);
    }
  }
}

export const verifyEmail = (obj) => async () => {
  try {
    let { data } = await Api.post(`/api/auth/getUserId`, obj)
    if (data.status == "success") {
      sessionStorage.setItem("userId", data.data.userId)
      window.location.href = `/Reset_password/${obj.email}`
    }
  } catch (error) {
    toast.error(error.response.data.showableMessage)
    console.error("error while verify email", error.response.data.showableMessage);
  }
}

export const sendOTP = (obj) => async () => {
  try {
    let { data } = await Api.post("/api/auth/reset-code", obj)
    if (data.status == "success") {
      toast.info(data.showableMessage)
    }
  } catch (error) {
    toast.error(error.response.data.showableMessage)
    console.error("error while sendOTP", error);
  }
}

export const resetPassword = (obj) => async () => {
  try {
    let { data } = await Api.post("/api/auth/reset-password", obj);
    if (data.status == "success") {
      toast.info(data.showableMessage)
      window.location.href = "/Login";
    }
  } catch (error) {
    toast.error(error.response.data.showableMessage)
    console.error("error while reset password", error);
  }
}

