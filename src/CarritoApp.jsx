import { Route, Routes, Navigate } from "react-router-dom"
import { NavBar } from "./component/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
            <NavBar></NavBar>
            <div className="container">
            <Routes>
                <Route path="/home" element={<ComprasPage></ComprasPage>}></Route>
                <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                <Route path="/*" element={<Navigate to='/home' />}></Route>
            </Routes>
            </div>
            </CarritoProvider>
        </ProductosProvider>
        )
}
