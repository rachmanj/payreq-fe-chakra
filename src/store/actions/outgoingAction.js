import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PAYREQ_URL = "http://localhost:8000/api";

export const getOutgoings = createAsyncThunk(
  "outgoings/getOutgoings",
  async () => {
    try {
      const response = await axios.get(`${PAYREQ_URL}/outgoings`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
