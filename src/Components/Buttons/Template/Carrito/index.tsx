
import { CartShopping } from "@/SVG/cartShopping"
import { Button } from "../.."


interface ButtonCarritoProps {

}

export const ButtonCarrito = ({ }: ButtonCarritoProps) => {
    return (<>
        <Button styleTemplate="btn3">
            <CartShopping />
            Carrito
        </Button>

    </>)
}