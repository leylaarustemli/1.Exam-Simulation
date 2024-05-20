import { Outlet } from 'react-router'
import Footer from '../../Layout/site/Footer/Footer'
import Header from '../../Layout/site/Header/Header'

const AdminRoot = () => {
  return (
    <div>
          <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default AdminRoot