<template>
  <div class="p-2 border-1 border-300 border-round shadow-1 h-15rem overflow-auto"
       v-bind:class="{'bg-gray-200':address.private}"
  >
    <div class="grid">
      <div class="col-12 flex justify-content-end h-2rem">
        <i v-if="authStore.user"
           v-on:click="addressStore.deleteAddress(address.id)"
           class="pi pi-trash text-red-600"></i>
      </div>
      <div class="col-12 flex align-items-center ">
        <h2 class="text-center">{{ address.name }} {{address.lastName}}</h2>
        <divider layout="vertical"></divider>
        <div class="text-lg">
          <span>{{ address.address }}</span>
          <span>-</span>
          <span>{{address.zip}}</span>
          <span>-</span>
          <span>{{address.city}}</span>
          <span>-</span>
          <span>{{address.state}}</span>
          <span>-</span>
          <span>{{address.country}}</span>
          <p>{{address.email}}</p>
          <p>{{address.phone}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type {Address} from "@/model/Address";
import Divider from "primevue/divider";
import {useAuthStore} from "@/stores/auth.store";
import {useAddressStore} from "@/stores/address.store";

defineProps<{
  address: Address
}>();

const authStore = useAuthStore();
const addressStore = useAddressStore();

</script>

<style scoped>
p {
  padding: 0!important;
  margin: 0!important;
}
</style>