import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  loading: false,
  status: "idle",
  newProduct: null,
  error: null,
  products: null,
};

const uploadNewProduct = createAsyncThunk(
  "product/uploadNewProduct",
  async (formData, { getState }) => {
    try {
      const authToken = getState().user.authToken;
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const { data } = await axios.post("api/v1/product/new", formData, {
          headers,
          "Content-Type": "multipart/form-data",
        })
        console.log(data)
      return data;
    } catch (error) {
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadNewProduct.pending, (state) => {
        (state.loading = true), (state.status = "loading");
      })
      .addCase(uploadNewProduct.fulfilled, (state, action) => {
        (state.loading = false),
          (state.status = "successfull"),
          (state.error = null),
          (state.newProduct = action.payload);
      })
      .addCase(uploadNewProduct.rejected, (state, action) => {
        (state.loading = false),
          (state.newProduct = null),
          (state.status = "failed"),
          (state.error = action.error);
      });
  },
});

export { uploadNewProduct };

export default productSlice.reducer;
