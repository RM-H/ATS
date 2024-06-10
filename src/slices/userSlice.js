import {createSelector, createSlice} from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'step',
    initialState:
        {
            step: 0,
            user:null
        }

    ,
    reducers: {
        setstep: (state, action) => {
            state.step = action.payload
        },
        setuser: (state, action) => {
            state.user = action.payload
        },


    }
})

export const {setstep,setuser} = todosSlice.actions

export const stepselector = createSelector(
    state => state.user,
    (state) => state.step
)

export const userselector = createSelector(
    state => state.user,
    (state) => state.user
)
export default todosSlice.reducer