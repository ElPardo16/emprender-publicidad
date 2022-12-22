import Image from 'next/image'
import Card from '../components/Card'
import CartItem from '../components/CartItem'
import Info from '../components/Info'
import Layout from '../components/Layout'
import Description from '../components/Description'
import { useSelector } from 'react-redux'

export default function Shop() {
  const productsState = useSelector(state => state.product)
  const filterState = useSelector(state => state.filter)
  const products = productsState.filter(item => item.category == filterState.category)
  /* const dialogState = useSelector(state => state.dialog) */
  return (
      <Layout title="Tienda">
        {/* {dialogState.showDialog && 
        <Info title="Carrito" type={dialogState.dialogType}>
          <CartItem/>
          <CartItem/>
        </Info>} */}
        <main>
          {products.length != 0 ? products.map(item => <Card key={item.id} data={item}/>) 
            : <h3 className='empty'>No hay productos para mostrar</h3>}
        </main>
      </Layout>
  )
}
