import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "filters",
    initialState: {
        filterValue: "",
    },
    reducers: {
        changeFilterValue: (state, action) => { state.filterValue = action.payload },
    },
});

export const { changeFilterValue } = slice.actions;
export default slice.reducer;