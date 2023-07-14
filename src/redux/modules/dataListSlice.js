import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list:[{
        id: 1,
        title:"시작해봅시다",
        body: "어려워요"
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


export const {addDataList} = dataListSlice.actions;
export default dataListSlice.reducer;