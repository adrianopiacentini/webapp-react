import { Outlet } from "react-router-dom"
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"

function AppLayout() {
    return (
        <>
            <AppHeader />
            <main className='container'>
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}

export default AppLayout