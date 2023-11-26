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
  async (credentials, headers) => {
    try {
      const data = await axios.post("api/v1/seller/register", credentials, {
        headers: headers,
      }).then((response) => console.log(response));
      return data;
    } catch (error) {
      return error.response;
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
          (state.sellerAccount = action),
          (state.status = "successfull"),
          (state.error = null),
          console.log(action);
      })
      .addCase(registerSellerAccount.rejected, (state, action) => {
        (state.loading = false),
          (state.sellerAccount = null),
          (state.status = "failed"),
          (state.error = action.error);
      });
  },
});

export { registerSellerAccount };

export default sellerSlice.reducer;
