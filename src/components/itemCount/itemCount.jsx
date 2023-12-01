import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css'

const Counter = ({stock,initial, onAdd}) => {

    //quantity cantidad , onAdd agregar

    const [quantity, setQuantity] = useState(initial)

    const suma = () => {
        setQuantity(quantity + 1)
    }

    const resta = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

  /*   const agregarCarrito = () => {
        if (contador > 0 && contador <= stock) {
            onAdd(contador);
        }
    } */

    return (
        <>
            <div className={styles.flex}>
                <Button onClick={resta} variant="outline-primary">-</Button>{' '}
                <p className={styles.count}>{quantity}</p>
                <Button onClick={suma} variant="outline-primary">+</Button>{' '}
            </div>
            <div className={styles.flex}>
            <Button onClick={() => onAdd(quantity)}  variant="primary">Agregar al carrito</Button>{' '}
            </div>
        </>
    )
}

export default Counter