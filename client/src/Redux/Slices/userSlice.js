import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  user: null,
  loading: false,
  error: null,
  status: "idle",
  authToken: null,
};

const loginUser = createAsyncThunk("user/loginUser", async (credentials) => {
  try {
    const { data } = await axios.post("api/v1/user/login", credentials);
    return data;
  } catch (error) {
    return error.response.data;
  }
});

const registerUser = createAsyncThunk(
  "user/registerUser",
  async (credentials) => {
    try {
      const { data } = await axios.post("api/v1/user/register", credentials);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        (state.loading = true), (state.status = "loading");
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        (state.loading = false),
          (state.authToken = action.payload),
          (state.status = "successfull"),
          (state.user = null);
      })
      .addCase(loginUser.rejected, (state, action) => {
        (state.loading = false),
          (state.user = null),
          (state.error = action.payload),
          (state.status = "failed");
      });

    builder
      .addCase(registerUser.pending, (state) => {
        (state.loading = true), (state.status = "loading");
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        (state.loading = false),
          (state.user = action.payload),
          (state.status = "successful");
      })
      .addCase(registerUser.rejected, (state, action) => {
        (state.loading = false),
          (state.status = "failed"),
          (state.error = action.payload);
      });
  },
});

export { loginUser, registerUser };

export default userSlice.reducer;
