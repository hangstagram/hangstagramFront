import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      content: "어려워요",
      postImg: null,
    },
  ],
};

const dataListSlice = createSlice({
  name: "dataList",
  initialState,
  reducers: {
    uploadDataList: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteDataList: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { uploadDataList, deleteDataList } = dataListSlice.actions;
export default dataListSlice.reducer;
