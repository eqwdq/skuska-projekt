<template>
  <div v-if="cartStore.cartQuantity === 0">
    <p>Nemate ziadne oblubene produkty 😔</p>
  </div >
    <section v-else class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div v-for="car in cartStore.cart" :key="car.id" class="lg:w-1/4 md:w-1/2 p-4 w-full ">
          <a class="block relative h-48 rounded-lg overflow-hidden border-solid border-2 border-slate-950">
            <!-- <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src='../assets/image/' + car.image> -->
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="'/image/' + car.image">
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ car.name }}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium"> {{ car.model }}</h2>
            <button @click="cartStore.removeFromCart(car)" class="float-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>


            </button>
            <p class="mt-1">{{ car.price }}€</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>

<script>
import { useCartStore } from "@/stores/cartStore"
export default {
  data() {
    const cartStore = useCartStore();
    return {
      cartStore,
    }
  },
}
</script>