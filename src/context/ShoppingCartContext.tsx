import { useContext, createContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    // cart methods
    handleClickCart: () => void
    getItemsQuantity: (id: number) => number
    increaseCartQuantity: (id:number) => void
    decreaseCartQuantity: (id:number) => void
    removeFromCart: (id:number) => void
    cartQuantity: number
    cartItems: CartItem[]
    isOpen: boolean
}


export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
    const [ isOpen, setIsOpen ] = useState(false)
    // create methods
    const handleClickCart = () => {
        setIsOpen(prev => !prev)
    }
    const getItemsQuantity = (id:number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const increaseCartQuantity = (id:number) => {
        setCartItems(currentItems => {
            // if we don't have this item in cart, add it
            if (currentItems.find(item=>item.id === id) == null){
                return [...currentItems, { id, quantity: 1 }]
            }else{
                return currentItems.map(item=>{
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }else{
                        return item
                    }
                })
            }
        })
        setIsOpen(true)
    }
    const decreaseCartQuantity = (id:number) => {
        setCartItems(currentItems => {
            // if we don't have this item in cart, add it
            if (currentItems.find(item=>item.id === id)?.quantity === 1){
                // return a list of items without this item 
                return currentItems.filter(item => item.id !== id)
            }else{
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity:item.quantity - 1 }
                    }else{
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id:number) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id != id)
        })
    }

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0) 

    return (
        <ShoppingCartContext.Provider 
            value={{ 
                getItemsQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItems,
                cartQuantity,
                isOpen,
                handleClickCart
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}