<template>
  <div class="w-full border-1 border-300 border-round shadow-1 p-1">
    <div class="grid m-0 flex justify-content-end">
      <div class="col-2 flex align-items-center justify-content-end text-lg">Jorge Segarra</div>

      <div class="col-1 flex justify-content-center">
        <div class="p-fluid">
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