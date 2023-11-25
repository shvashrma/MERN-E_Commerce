import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  loading: false,
  error: null,
  status: "idle",
  sellerAccount: null,
};

const registerSellerAccount = createAsyncThunk(
  "seller/registerSellerAccount",
  async (credentials) => {
    try {
      const { data } = await axios.post("api/v1/seller/register", credentials);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerSellerAccount.pending, (state) => {
        (state.loading = true), (state.status = "loading");
      })
      .addCase(registerSellerAccount.fulfilled, (state, action) => {
        (state.loading = false),
          (state.sellerAccount = action.payload),
          (state.status = "successfull"),
          (state.error = null);
      })
      .addCase(registerSellerAccount.rejected, (state, action) => {
        (state.loading = false),
          (state.sellerAccount = null),
          (state.status = "failed"),
          (state.error = action.payload);
      });
  },
});

export { registerSellerAccount };

export default sellerSlice.reducer;
