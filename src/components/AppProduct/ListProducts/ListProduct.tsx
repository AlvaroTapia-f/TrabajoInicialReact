import { Card } from "react-bootstrap"
import { ItemProduct } from "../AppProduct"

interface ListProductProps{
    items: ItemProduct[]
}

const ListProduct = ({items}: ListProductProps) => {
  return (
    <div className="p-1 m-3 border rounded d-grid gap-2" style={{
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
    {items.map((item, id)=>
         <Card key={id} style={{ width: '20rem' }}>
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>${item.price}</Card.Text>
            </Card.Body>
          </Card>
    )}
    </div>
  )
}

export default ListProduct