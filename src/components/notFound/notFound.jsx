import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css'

const NotFound = () => {
    return(
        <>
       <div className={styles.centrar}>
       <h1>Pagina no encontrada</h1>
        <Link to={'/'}><Button variant="primary">ir a Productos</Button>{' '}</Link>
       </div>
        </>
    )
}

export default NotFound