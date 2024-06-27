import {createSelector, createSlice, current} from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'step',
    initialState:
        {
            loading:true,
            step: 0,
            user: null,
            work: [],
            questionsdraft: []
        }

    ,
    reducers: {
        setloading: (state, action) => {
            state.loading = action.payload
        },
        setstep: (state, action) => {
            state.step = action.payload
        },
        setuser: (state, action) => {
            state.user = action.payload
        },
        setwork: (state, action) => {
            state.work.push(action.payload)
        },
        resetWorkdraft: (state) => {
            state.work=[]
        },

        updatework: (state, action) => {
            state.work[action.payload.index].jobtitle = action.payload.jobtitle;
            state.work[action.payload.index].salary = action.payload.salary;
            state.work[action.payload.index].start_date = action.payload.start_date;
            state.work[action.payload.index].end_date = action.payload.end_date;
            state.work[action.payload.index].working = action.payload.working;

        },
        deleteWorkitem: (state, action) => {

            const workitems = current(state.work)

            const filtered = workitems.filter((item) => {
                return item.company != action.payload


            })
            state.work = filtered


        },

        addskilldraft: (state, action) => {

            let itemsarray = []
            action.payload.map((i) => {
                itemsarray.push({
                    question: i,
                    value: 3
                })
            })
            state.questionsdraft=itemsarray
        },
        addexistingskilltodraft : (state,action)=>{
            state.questionsdraft=action.payload
        }
        ,

        addvaluetoskill: (state, action) => {
            let item = state.questionsdraft.findIndex((item) => {
                return item.question == action.payload.q
            })
            state.questionsdraft[item].value = action.payload.v

        }


    }
})

export const {
    setloading,
    setstep,
    setuser,
    setwork,
    updatework,
    deleteWorkitem,
    addskilldraft,
    addvaluetoskill,
    addexistingskilltodraft,
    resetWorkdraft
} = todosSlice.actions

export const stepselector = createSelector(
    state => state.user,
    (state) => state.step
)

export const loadingSelector = createSelector(
    state => state.user,
    (state) => state.loading
)

export const userselector = createSelector(
    state => state.user,
    (state) => state.user
)

export const workselector = createSelector(
    state => state.user,
    (state) => state.work
)
export const skilldraftselector = createSelector(
    state => state.user,
    (state) => state.questionsdraft
)
export default todosSlice.reducer