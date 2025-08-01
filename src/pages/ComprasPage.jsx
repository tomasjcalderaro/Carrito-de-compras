import { Card } from "../component/Card"
export const ComprasPage = () => {
    
    const { productos } = useContext(ProductosContext)
    return (
        <>
        <h1>Compras: </h1>
        <hr />

        {productos.map(producto => (
            <Card key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            >

            </Card>
        ))}
        
        </>
    )
}
