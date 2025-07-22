import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <NavLink to='/' class="navbar-brand" href="#">Carrito de Compras</NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <NavLink to='/' class="nav-link active" aria-current="page" href="#">Comrpas</NavLink>
            </li>
        </ul>
            <NavLink to='/carrito'>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart color="action" />
                </Badge>
            </NavLink>
            
        </div>
    </div>
    </nav>
    )
}

