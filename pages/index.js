import Image from 'next/image'
import Card from '../components/Card'
import Layout from '../components/Layout'

export default function Shop() {
  return (
    <div>
      <Layout title="Tienda">
        <main>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </main>
      </Layout>
    </div>
  )
}
