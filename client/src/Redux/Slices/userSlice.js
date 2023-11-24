import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  user: null,
  loading: false,
  error: null,
  status: "idle",
  authToken: JSON.parse(localStorage.getItem("user")) || null,
};

// asynchronous action to login user
const loginUser = createAsyncThunk("user/loginUser", async (credentials) => {
  try {
    const { data } = await axios.post("api/v1/user/login", credentials);
    return data;
  } catch (error) {
    return error.response.data;
  }
});

// asynchronous action to register new user
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

const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (credentials) => {
    try {
      const { data } = await axios.get("api/v1/user", credentials);
      console.log(credentials)
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // synchronous action to save authToken in localstorage
    setUsertoLocalstorage: (state, action) => {
      state.authToken = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    // synchronous action to delete authToken from localstorage
    clearUserfromLocalStorage: (state) => {
      (state.authToken = null), localStorage.removeItem("user");
    },
  },

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
          (state.status = "successful"),
          (state.authToken = null);
      })
      .addCase(registerUser.rejected, (state, action) => {
        (state.loading = false),
          (state.status = "failed"),
          (state.error = action.payload);
      });

    builder
      .addCase(getUserDetails.pending, (state) => {
        (state.loading = true), (state.status = "loading");
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        (state.loading = false),
          (state.user = action.payload),
          (state.status = "successfull"),
          (state.error = null);
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        (state.loading = false),
          (state.user = null),
          (state.status = "failed"),
          (state.error = action.payload);
      });
  },
});

export { loginUser, registerUser, getUserDetails };

export const { setUsertoLocalstorage, clearUserfromLocalStorage } =
  userSlice.actions;

export default userSlice.reducer;
