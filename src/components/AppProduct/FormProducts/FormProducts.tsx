import { Button, Form } from "react-bootstrap"
import useForm from "../../Hooks/useForm"
import { FC } from "react"

interface FormProductsProps{
    handleAddProduct: Function;
}

const FormProducts: FC<FormProductsProps> = ({handleAddProduct}: FormProductsProps) => {

    const {values, handleChange, resetForm} = useForm({
        name: '',
        price: 0,
        image: '',
    })

    const handleSubmitForm = ()=>{
        handleAddProduct(values);
        resetForm();
    }
    

  return (
    <>
    <Form className="p-4 border rounded m-3">
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="name" placeholder="Ingrese nombre del producto" value={values.name} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" name="price" placeholder="Ingrese precio del producto" value={values.price} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formImagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" name="image" placeholder="Ingrese URL de la imagen" value={values.image} onChange={handleChange} />
      </Form.Group>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="primary" onClick={handleSubmitForm}>Guardar</Button>
      </div>
    </Form>
    </>
  )
}

export default FormProducts