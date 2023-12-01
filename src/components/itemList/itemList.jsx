import Item from "../item/item"
import styles from "./styles.module.css"

const ItemList = ({products,titulo}) => {
    return(
        <>
        <h2 className={styles.tex}>{titulo}</h2>
       <div className={styles.flex}>
       {products.map((product )=> <Item key={product.id}{...product}/>)}
       </div>
        </>
    )
}

export default ItemList