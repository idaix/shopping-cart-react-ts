import { Card } from '../components'
import products from '../data/products.json'
const Store = () => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 bg-slate-100'>
      {
        products.map((product)=>(
          <Card {...product} key={product.id} />
        ))
      }
    </section>
  )
}

export default Store