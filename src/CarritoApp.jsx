improt { Route, Routes } from "react-router-dom"
import { NavBar } from "./component/NavBar"
import { CarritoPage } from "./pages/ComprasPage"

export const CarritoApp = () => {
    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                <Route path="/*" element={<Navigate to='/' />}></Route>
            </Routes>
        </>
        )
}
