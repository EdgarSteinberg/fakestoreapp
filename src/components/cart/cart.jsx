import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import CartItem from "../cartItem/cartItem";
import styles from './styles.module.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    const totalPrice = cart.reduce((acc, item) => 
        acc + (item.quantity * item.price || 0)
     ,0)

    if(totalQuantity === 0) {
        return (
            <div className={styles.centrar}>
                <h1>No hay items en el carrito</h1>
                <Link to={'/'}> <Button variant="primary">Productos</Button>{' '}</Link>
            </div>
        )
    }
    return (
        <>
        { cart.map(p => <CartItem key={p.id} {...p}/>)}
        <h3 className={styles.total}>Total: ${totalPrice}</h3>
       <div className={styles.botones}>
       <Link to={'/Order'}><Button  variant="success">Terminar Compra</Button>{' '}</Link>
        <Button onClick={() => clearCart()}  variant="danger">vaciar carrito</Button>{' '}
       </div>
        </>
    )
}

export default Cart