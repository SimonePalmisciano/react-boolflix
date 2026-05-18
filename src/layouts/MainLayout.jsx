import { Outlet } from "react-router"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"

function MainLayout() {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </>
    )
}
export default MainLayout