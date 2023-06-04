const { createSlice } = require('@reduxjs/toolkit');


export const STATUSES = Object.freeze(
    {
        IDLE: 'idle',
        ERROR: 'error',
        LOADING: 'loading'
    }
);
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            //const res = await fetch("https://fakestoreapi.com/products");
            //donot call like this
            //reducer is sync function, inside that we can not call async call.
            //reduceres are pure functions.

            //so to call the asyn call we need to use thunk middle ware
            //legacy redux we need to configure the thunk while creationg the sote
            // but in RTK it is already configured
            state.data = action.payload;
        },

        setStatus(state, action) {
            state.status = action.payload;
        }
        
    },
});

export const { setProducts,setStatus } = productSlice.actions;
export default productSlice.reducer;


//thunk
//thunk is a simple fucntion that return a sync function.
export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}




