import { api_customer_get } from "@/config/api-links";
import { getAssets } from "@/packages/sdk/assets/assets.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserSlice {
  assets: object[] | null;
}

const initialState: UserSlice = {
  assets: null,
};

export const fetchAssets = createAsyncThunk("assets/fetchAssets", async () => {
  const assets = await getAssets();
  return assets;
});

export const assetsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAssets: (state, action) => {
      state.assets = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAssets.fulfilled, (state, action) => {
      state.assets = action.payload;
    });
  },
});

export const { setAssets } = assetsSlice.actions;

export default assetsSlice.reducer;
