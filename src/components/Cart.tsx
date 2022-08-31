import React from 'react'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaRegSadCry } from 'react-icons/fa'
import { BiHappyHeartEyes } from 'react-icons/bi'
import CartCard from './CartCard'
import { formatCurrency } from '../utilities/formatCurrency'
import storeItems from '../data/products.json'
type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartProps = {
  handleClickCart: () => void
  cartItems: CartItem[]
}

const Cart = ({ handleClickCart, cartItems }: ShoppingCartProps) => {
  return (
    <div className='fixed w-3/4 top-0 h-full left-0 bg-white shadow-2xl p-3 z-50'>
      <button onClick={()=>handleClickCart()} className='absolute top-3 right-3'><AiOutlineCloseCircle /></button>
      <h1 className="text-center text-xl font-semibold italic mb-2 text-red-300">Cart</h1>
      <hr />
      {cartItems.length == 0 ?(
        <>
          <p className='text-center text-slate-500 mt-4 flex items-center justify-center'>Your cart is empty <FaRegSadCry className='ml-2' /></p>
          <div><button onClick={()=>handleClickCart()} className='text-center mx-auto mt-4 flex items-center justify-center text-red-300 bg-red-50 px-4 py-1 rounded-lg hover:shadow-sm hover:bg-white duration-300'>Add some <BiHappyHeartEyes className='ml-2' /></button></div>
        </>
      ):
      (
        <>
          <div className="mt-3 grid">
          {
            cartItems.map(item=>(
              <CartCard {...item} key={item.id}/>
            ))
          }
        </div>
        <strong className="float-left text-green-700">
          Total: {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find(i=>i.id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity
            }, 0)
          )} 
        </strong>
        <button className="py-1 float-right px-3 rounded bg-red-50 text-red-400 hover:shadow-sm hover:bg-white duration-300 font-semibold">Checkout</button>
        </>
      )}
      
    </div>
  )
}

export default Cart