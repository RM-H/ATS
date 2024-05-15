import {Outlet} from 'react-router-dom'
import {Nav,Step} from '../components/index.js'

const Mainlayout = () => {
  return(
      <div className='main-cantainer' >

          <Nav/>
          <Step/>

          <Outlet/>


      </div>
  )
}
export default Mainlayout;