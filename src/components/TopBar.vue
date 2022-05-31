<template>
  <div class="w-full border-1 border-300 border-round shadow-1 p-1">
    <div class="grid m-0 flex justify-content-end">
      <div class="col-12 sm:col-6 md:col-4 lg:col-2 flex align-items-center justify-content-end text-lg">jsegarra.dev@gmail.com</div>
      <div class="col-12 sm:col-6 md:col-2 lg:col-1 flex justify-content-center">
        <div class="p-fluid w-full">
          <Button v-on:click="emit('showModal')"
                  label="Login"
                  class="p-button-outlined" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import {defineEmits} from "vue";

const emit = defineEmits(['showModal']);

</script>