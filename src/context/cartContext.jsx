import { createContext, useState } from "react";

// Cart = Carro - Add = Agregar .- isincart = Carrito de compras - prev = anterior

// Remove = eliminar -  cartUpdated = Carrito Actualizado -  clearCart = Vaciar Carrito
export const CartContext = createContext({ cart: [], totalQuantity: 0  });

const CartComponentContext = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0);
    console.log(cart)

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
            setTotalQuantity(prevTotal => prevTotal + quantity);
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
        const removedItem = cart.find(prod => prod.id === itemId);
        if (removedItem) {
            setTotalQuantity(prevTotal => prevTotal - removedItem.quantity);
        }
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0);
    }


    return (
        <>
            <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartComponentContext