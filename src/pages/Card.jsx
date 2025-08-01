import { useState} from "react"
import '../styles/card.css'
export const Card = ({ imagen, titulo, descripcion, precio }) => {
    
    const [added, setAdded] = useState(false)
    const clickAgregar = () => {
        setAdded(true)
    }
    const clickQuitar = () => {
        setAdded(false)
    }
    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">Price: ${precio}</p>
            </div>

            { added ? (
                <button 
                type="button" 
                className="boton-quitar"
                onClick={() => setAdded(false)}>
                    Quitar del carrito
                </button>
            ) : (
                <button 
                type="button" 
                className="boton-agregar" 
                onClick={() => setAdded(true)}>
                    Agregar al carrito
                </button>
            )}
        </div>
    )
}

