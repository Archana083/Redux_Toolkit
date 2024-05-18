import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//create action

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6637499c288fedf6937fefa6.mockapi.io/crude",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk("getUser", async () => {
  const response = await fetch(
    "https://6637499c288fedf6937fefa6.mockapi.io/crude"
  );
  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});


    export const deleteUser = createAsyncThunk(
      "deleteUser",
      async (id, {rejectWithValue}) => {
        const response = await fetch(`https://6637499c288fedf6937fefa6.mockapi.io/crude/${id}`, {method: "DELETE"});
        try{
            const result = await response.json();
            console.log(result);
            return result;
        }
        catch(error)
        {
       return rejectWithValue(error);
        }
      }
    )
    
    export const getUserById = createAsyncThunk(
      "getUserById",
      async (id, {rejectWithValue}) => {
        const response = await fetch(`https://6637499c288fedf6937fefa6.mockapi.io/crude/${id}`, {method: "patch"});
        try{
            const result = await response.json();
            console.log(result);
            return result;
        }
        catch(error)
        {
       return rejectWithValue(error);
        }
      }
    )

    const initialState = {
      users: [],
      loading: false,
      error: null,
    };   
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
        state.users = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.payload.message;
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

        // const {id} = action.payload;
        // if(id)
        //   {
        //     state.users = state.users.filter((item) => item.id !== id);
        //   }
        console.log("delete action" , action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
  },
});

export default userDetail.reducer;
