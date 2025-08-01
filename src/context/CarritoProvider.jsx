import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"
const initialState = []

const CarritoProvider = ({ children }) => {
    
    const {listaCompras, dispatch} = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compra
    }
    dispatch(action)
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad Compra',
            payload: id
    }
    dispatch(action)
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad Compra',
            payload: id
    }
    dispatch(action)
    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
    }
    dispatch(action)
    return (
    <CarritoContext.Provider >
        {children}
    </CarritoContext.Provider>
    )
}



