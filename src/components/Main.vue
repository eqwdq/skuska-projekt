<script>
  import carsData from '../data.json'
  import { useCartStore } from "@/stores/cartStore"
  export default {
    data() {
      const cartStore = useCartStore();
      return {
        cars: carsData.cars,
        cartStore,
      }
    }
}
</script>
<template>
<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div v-for="car in cars" :key="car.id" class="lg:w-1/4 md:w-1/2 p-4 w-full ">
          <a class="block relative h-48 rounded-lg overflow-hidden border-solid border-2 border-slate-950">
            <!-- <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src='../assets/image/' + car.image> -->
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="'/image/' + car.image">
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ car.name }}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium"> {{ car.model }}</h2>
            <button @click="cartStore.addToCart(car)" class="float-end">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>

            </button>
            <p class="mt-1">{{ car.price }}€</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>