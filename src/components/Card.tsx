import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type ProductProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
}

const Card = ({ id, name, price, imgUrl }: ProductProps) => {

  const { increaseCartQuantity } = useShoppingCart()
  return (
    <div className="bg-white rounded shadow-sm">
            <img src={imgUrl} alt={name} className="h-60  rounded-t"/>
            <div className="p-3">
              <h2 className="title text-sm font-semibold">{name}</h2>
              <div className="flex items-center justify-between">
                <p className='text-green-600 text-xs font-bold'>{formatCurrency(price)}</p>
                <button onClick={()=>increaseCartQuantity(id)} className='py-1 px-4 rounded bg-red-50 text-red-400 hover:bg-white duration-300'>Add to cart</button>
              </div>
            </div>
    </div>
  )
}

export default Card