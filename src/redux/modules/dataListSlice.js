import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Api/api";

export const __fetchDataList = createAsyncThunk(
  "fetchDataList",
  async (payload, thunkAPI) => {
    try {
      const response = await api.get("/post/search");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  list: [],
  isLoading: false,
  isError : false,
  error: null,
};

const dataListSlice = createSlice({
  name: "dataList",
  initialState,
  reducers: {
    uploadDataList: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    deleteDataList: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: {
    [__fetchDataList.pending]: (state, action) => {
      state.isLoading =true
    },
    [__fetchDataList.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isError = false
      state.list = action.payload
    },
    [__fetchDataList.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.error = action.payload
    }
  }
});

export const { uploadDataList, deleteDataList } =
  dataListSlice.actions;
export default dataListSlice.reducer;