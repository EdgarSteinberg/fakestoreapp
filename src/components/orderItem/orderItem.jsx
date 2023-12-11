import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 1
const OrderItem = ({onConfirm}) => {
    
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [showForm, setShowForm] = useState(true);

    const handleConfirm = (event) => {
        event.preventDefault()

        const UserData = {
            name,phone,email
        }
        onConfirm(UserData)
        setShowForm(false)
    }

    return (
        <>

            {showForm && (
                 <Form onSubmit={handleConfirm} className='container'>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">Nombre y Apellido</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder="Ingrese su Nombre y Apellido"
                            value={name}
                            onChange={({target}) => setName(target.value)}
                            />
                            
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">Telefono</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder="Ingrese su telefono"
                            value={phone}
                            onChange={({target}) => setPhone(target.value)}
                            />
                            
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">E-mail</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder="Ingrese su e-mail"
                            value={email}
                            onChange={({target}) => setEmail(target.value)}
                            />
                    </Form.Group>
                    <Button type="submit">Crear orden</Button>    
            </Form>
            )}

        </>
    )
}

export default OrderItem