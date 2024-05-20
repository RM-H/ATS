import {createSelector, createSlice} from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'step',
    initialState:
        {step : 0}
    ,
    reducers: {
        setstep: (state,action)=>{
            state.step =action.payload
        } ,


    }
})

export const {setstep } = todosSlice.actions

export const stepselector = createSelector(
    state=>state.user,
    (state)=>state.step

)
export default todosSlice.reducer