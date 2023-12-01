import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/itemDetail";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";
import styles from './styles.module.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    

    useEffect(()=> {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setProduct(json)
            setLoading(false)
        })
        .catch(e => console.error(e))
    },[id])

    if(loading)  {
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
    return(
        <>
          <ItemDetail  {...product} />
        </>
    )
}

export default ItemDetailContainer