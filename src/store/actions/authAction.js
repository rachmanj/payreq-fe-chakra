import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { successGlobal, errorGlobal } from "../reducers/notificationReducer";
import { setTokenCookie, removeTokenCookie } from "../../utils/tools";

const PAYREq_URL = "http://localhost:8000/api";
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { dispatch }) => {
    try {
      const response = await axios.post(`${PAYREq_URL}/login`, {
        email,
        password,
      });
      setTokenCookie(response.data.authorisation.token);
      dispatch(successGlobal("Logged in successfully!"));
      return response.data;
    } catch (error) {
      // console.log("errorAction: ", error.response.data.message);
      dispatch(errorGlobal(error.response.data.message));
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async ({ dispatch }) => {
    removeTokenCookie();
    dispatch(successGlobal("Logged out successfully!"));
  }
);
