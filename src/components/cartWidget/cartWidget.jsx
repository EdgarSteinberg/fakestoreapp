import { useContext } from 'react';
import { CartContext } from "../../context/cartContext"
import { BsCart4 } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge'
import styles from './styles.module.css'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <>
            <h4>
                {totalQuantity > 0 && (
                    <Badge className={styles['bg-primary']}>
                        <BsCart4 />{totalQuantity}
                    </Badge>
                )}
            </h4>
        </>
    )
}

export default CartWidget