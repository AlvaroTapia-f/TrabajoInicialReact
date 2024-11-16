import { useState } from "react"
import FormProducts from "./FormProducts/FormProducts"
import Header from "./Header/Header"
import ListProduct from "./ListProducts/ListProduct";

export interface ItemProduct{
    name: string;
    price: number;
    image: string;
}

const AppProduct = () => {
    
    const [products, setProducts] = useState<ItemProduct[]>([]);

    const handleAddProduct = (newItem: ItemProduct)=>{
        setProducts((p)=> [...products, newItem])
    }



  return (
    <>
    <Header/>
    <h2 className="text-center">Formulario agregar producto</h2>
    <FormProducts handleAddProduct={handleAddProduct}/>
    <h2 className="text-center">Productos</h2>
    { products.length > 0 ? <ListProduct items={products}/> : <p className="text-center">No hay productos para mostrar, puede intentar agregar alguno.</p>}
    </>
  )
}

export default AppProduct