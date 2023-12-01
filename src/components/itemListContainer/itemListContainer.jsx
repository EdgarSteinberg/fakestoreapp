import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";
import styles from './styles.module.css'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const [titulo, setTitulo] = useState('')

     const url = id ?  `https://fakestoreapi.com/products/category/${id}` : 'https://fakestoreapi.com/products'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setProducts(json)
                setLoading(false)
                id ?  setTitulo(`${id}`) : setTitulo('Products') 
            })
            .catch(e => console.error(e))

    }, [id])

    if (loading) {
        return <div className={styles.loading}>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
         </div>
    }

    return (
        <>
            <h1>{greeting}</h1>
            
            <ItemList products={products} titulo={titulo}/>
        </>
    )
}

export default ItemListContainer