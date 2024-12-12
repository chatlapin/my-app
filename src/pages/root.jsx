import { Outlet } from 'react-router'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Root() {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}