import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const Item = ({ title, image, id}) => {


    return (
        <>
            <div className={styles.card}>
                <p className={styles.title}>{title}</p>
                <img className={styles.img} src={image} alt="imagen" />
                <div className={styles.btn}>
                    <Link to={`/item/${id}`}> <Button variant="primary">ver detalle</Button>{' '}</Link>
                    
                </div>
            </div>
        </>
    )
}
export default Item

