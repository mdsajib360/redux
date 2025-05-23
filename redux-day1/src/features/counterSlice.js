import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'Counter App',
    initialState: { value: 0 },
    reducers: {
        increment: state => { state.value += 1 },
        decrement: state => {state.value -=1}
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
