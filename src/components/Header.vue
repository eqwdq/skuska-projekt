<script>
import { RouterLink } from 'vue-router';

export default {
  props: {
    destinations: Object,
  },
  components: {
    RouterLink,
  },
  name: 'Header',
};
</script>
<template>
    <nav class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <RouterLink class="float-left mb-4 md:mb-0 " to="/">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> -->
      <img src="C:\Users\danie\OneDrive\Documents\js\skuska-projekt\vue-project\public\image\textlogo.png" class="rounded-full h-10" alt="">
    </RouterLink>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <RouterLink to="/about" class="mr-5 font-serif text-xl hover:font-extrabold">O nás</RouterLink>

    </nav>
    <router-link to="/cart" class="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>

    </router-link>
  </div>
</nav>
</template>