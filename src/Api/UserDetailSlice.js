import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for the API
const BASE_URL = "https://6637499c288fedf6937fefa6.mockapi.io/crude";

// Create User Action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(BASE_URL, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Get Users Action
export const getUser = createAsyncThunk(
  "getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Delete User Action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Update User Action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${BASE_URL}/${data.id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Initial State
const initialState = {
  users: [],
  loading: false,
  error: null,
};

// User Slice
export const userDetail = createSlice({
  name: "userDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.payload.id);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default userDetail.reducer;
