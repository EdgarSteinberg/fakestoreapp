import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import OrderItem from '../orderItem/orderItem';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

const Order = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    const [orderId, setOrderId] = useState('');

    const crearOrder = ({ name, phone, email }) => {
        setLoading(true);

        const calculatedTotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

        const order = {
            buyer: {
                name,
                phone,
                email,
            },
            items: cart,
            total: calculatedTotal,
            date: new Date().toLocaleString(), // Fecha como string legible
        };
        setOrderId(order);
        clearCart();
        setLoading(false);
    };



    return (
        <>
            <OrderItem onConfirm={crearOrder} />
            {!loading && orderId && (
                <div className='container'>
                    <p>Su Compra fue efectuada correctamente.</p>
                    <p>Conserve este numero de seguimiento:</p>
                    <p>Fecha: {orderId.date}</p>
                    <p>Total: ${orderId.total}</p>
                    <p>Productos:</p>
                    <ul>
                        {orderId.items.map((item, index) => (
                            <li key={index}>
                                <p>Título: {item.title}</p>
                                <img className={styles.img} src={item.image} alt={item.title} />
                            </li>
                        ))}
                    </ul>
                   
                        <Link to={'/'}> <Button variant="warning">Realizar una nueva compra</Button></Link>
                    
                </div>
            )}
            
        </>
    );
};

export default Order;