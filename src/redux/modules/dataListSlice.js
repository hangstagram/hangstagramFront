import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        id:1,
        content: "어려워요",
        image: null
    }],
}

const dataListSlice = createSlice({
    name:"dataList",
    initialState,
    reducers: {
        uploadDataList: (state,action) => {
            state.list.push(action.payload);
        },
        deleteDataList : (state, action) =>{
            state.list = state.list.filter((item)=> item.id !== action.payload)
        },
    }
})


export const {uploadDataList} = dataListSlice.actions;
export default dataListSlice.reducer;