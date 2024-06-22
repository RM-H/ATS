import Grid from "@mui/material/Unstable_Grid2";


import {useState, useEffect} from 'react'
import {getSplash, saveQuestions} from '../services/service.js'
import {toast} from "react-toastify";

import {Questionitem, Spinner} from '../components/index.js'
import {useSelector, useDispatch} from "react-redux";
import {
    userselector,
    addskilldraft,
    addexistingskilltodraft,
    skilldraftselector,
    setuser,
    setstep
} from "../slices/userSlice.js";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";


const SpecificQuestions = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()

    const [data, setData] = useState(false)
    // user info
    const user = useSelector(userselector)

    // user questions in redux
    const questions = useSelector(skilldraftselector)


    const [loading, setLoading] = useState(false)

    // getting questions


    const getQuestions = async () => {
        const response = await getSplash()
        if (response.data.code == 1) {

            // adding to skills draft if user already has chosen some skills
            if (user.questions != false) {
                let testdata = []
                testdata[0] = user.questions

                setData(testdata)

            } else {


                let filtered = response.data.departemans.filter((item) => {
                        return item.code == user.user.departemant
                    }
                )
                console.log(filtered)


                // adding items to skill draft in redux
                dispatch(addskilldraft(filtered[0].questions[0]))


                setData(filtered[0].questions)


            }


        } else {
            toast.warning(response.data.error)
        }
    }


    const handlenext = async () => {
        const formdata = new FormData()
        formdata.append('token', user.user.token)
        formdata.append('data', JSON.stringify(questions))

        setLoading(true)
        const response = await saveQuestions(formdata)
        if (response.data.code == 1) {
            setLoading(false)
            dispatch(setuser(response.data));
            dispatch(setstep(5))
            toast.success('پاسخ های شما دریافت شد')
            nav('/ats/status')
        } else {
            toast.warning(response.data.error)
        }


    }

    useEffect(() => {


        getQuestions().then()


    }, []);


    let content
    if (data !== false) {
        content = data[0].map((item, index) =>
            <Questionitem key={index} question={item.question ? item.question:item} defualtval={item.value !==null ? item.value:null}/>
        )
    } else {
        content = <Spinner/>
    }


    return (
        <>
            <Grid container className='margins'>




                {content}

                <Grid xs={12} sx={{textAlign: 'center'}}>
                    {
                        loading ? <Spinner/> :
                            <Button className='yekan-regular' onClick={handlenext} variant="contained">ادامه</Button>
                    }

                </Grid>

            </Grid>


        </>
    )
}
export default SpecificQuestions;