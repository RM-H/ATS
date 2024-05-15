import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {

    }
})

// export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer