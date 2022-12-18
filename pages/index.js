import Image from 'next/image'
import Card from '../components/Card'
import CartItem from '../components/CartItem'
import Info from '../components/Info'
import Layout from '../components/Layout'
import Description from '../components/Description'

export default function Shop() {
  return (
      <Layout title="Tienda">
        {/* <Info title="Carrito" type="cart">
          <CartItem/>
        </Info> */}
        <Info title="Ploter 100cm" type="des">
          <Description />
        </Info>
        <main>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </main>
      </Layout>
  )
}
