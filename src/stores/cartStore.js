import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import products from '@/data.json'

export const useCartStore = defineStore('cartStore',
    {
        state: () => {
            return {
                products: products,
                cart: [],
            }
        },
        getters: {
            cartQuantity: (state) => {
                return state.cart.reduce((total, product) => {
                    return total + product.quantity
                }, 0)
            },
        },
        actions: {
          addToCart(product) {
            const existingProductIndex = this.cart.findIndex(p => p.id === product.id);
            if (existingProductIndex == -1) {
              this.cart.push({...product, quantity: 1});
            }
          },
            removeFromCart(product) {
                const existingProduct = this.cart.find(p => p.id === product.id)
                if (existingProduct.quantity === 1) {
                    this.cart = this.cart.filter(p => p.id !== product.id)
                }
            },
            clearCart() {
                this.cart = []
            },
        }
    })
