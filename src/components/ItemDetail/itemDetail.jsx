import styles from './styles.module.css'
import Counter from '../itemCount/itemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({title, description,price,image,id,stock}) => {

    const [quantityAdded, setQuantityAdded] = useState()

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,title,price,image
        }

        addItem(item,quantity)
    }

    return(
        <>
        <div className={styles.flex}>
        <img className={styles.img} src={image} alt="img" />
        <div>
        <p className={styles.letras}><strong>Product: {title}</strong> </p>
        <p className={styles.letras}>Description: {description}</p>
        <p className={styles.color}>Price: {price}</p>
        {quantityAdded > 0 ? (
            <div className={styles.btn}><Link to={"/cart"} > <Button  variant="success">Terminar Compra</Button>{' '}</Link></div>
        ) : (

            <Counter initial={1} stock={stock} onAdd={handleOnAdd}/>
        )
        }
        </div>
        </div>
        </>
    )
}

export default ItemDetail