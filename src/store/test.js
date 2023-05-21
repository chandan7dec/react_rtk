const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

//Need to test why this is not working for cartSlice.js file
const {createSlice} = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name:'cart',
    intialState :[],
    reducers : {
        add(state,action) {
            state.push(action.payload);
        },

        remove(state, action) {
            return state.filter((item) => item.id !== action.payload );
        },
    },
});


export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;