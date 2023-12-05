import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  loading: false,
  status: "idle",
  newProduct: null,
  error: null,
  products: null,
  product: null,
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
      });
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

const gettingAllProduct = createAsyncThunk(
  "product/gettingAllProduct",
  async () => {
    try {
      const { data } = await axios.get("/api/v1/products");
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

const getSingleProduct = createAsyncThunk(
  "product/getSingleProduct",
  async (productId) => {
    try {
      const { data } = await axios.get(`/api/v1/product/${productId}`);
      console.log(data);
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
      })
      .addCase(gettingAllProduct.pending, (state) => {
        (state.loading = true), (state.status = "pending");
        state.newProduct = null;
      })
      .addCase(gettingAllProduct.fulfilled, (state, action) => {
        (state.loading = false),
          (state.status = "successfull"),
          (state.products = action.payload),
          (state.newProduct = null),
          (state.error = null),
          (state.product = null);
      })
      .addCase(gettingAllProduct.rejected, (state, action) => {
        (state.loading = false),
          (state.status = "rejected"),
          (state.product = null),
          (state.error = action.error),
          (state.products = null),
          (state.newProduct = null);
      })
      .addCase(getSingleProduct.pending, (state) => {
        (state.loading = true), (state.status = "pending");
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        (state.loading = false),
          (state.status = "successful"),
          (state.error = null),
          (state.products = null),
          (state.product = action.payload),
          (state.newProduct = null);
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        (state.loading = false),
          (state.status = "rejected"),
          (state.error = action.error),
          (state.products = null),
          (state.product = null),
          (state.newProduct = null);
      });
  },
});

export { uploadNewProduct, gettingAllProduct, getSingleProduct };

export default productSlice.reducer;
