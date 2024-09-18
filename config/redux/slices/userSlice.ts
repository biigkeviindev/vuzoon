import { api_customer_get } from "@/config/api-links";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserSlice {
  userData: any | null;
}

const initialState: UserSlice = {
  userData: null,
};

export const fetchUserByEmail = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userEmail: string) => {
    const {
      data: { result },
    } = await axios.post(api_customer_get, {
      email: userEmail,
    });

    return result;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByEmail.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
