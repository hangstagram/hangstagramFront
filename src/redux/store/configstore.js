import { configureStore } from "@reduxjs/toolkit";
import dataListSlice from "../modules/dataListSlice";

const store = configureStore({
    reducer:{dataListSlice,},
});

export default store