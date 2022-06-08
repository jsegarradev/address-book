<template>
  <div class="grid">
    <div v-for="address in addresses"
         :key="address.id"
         class="col-12 md:col-6 lg:col-4 xl:col-3 p-2 lg:p-4"
    >
      <AddressCard :address="address"/>
    </div>
  </div>

</template>

<script setup lang="ts">
import AddressCard from "@/components/AddressCard.vue"
import {useAddressStore} from "@/stores/address.store";
import {storeToRefs} from "pinia";
import {useAuthStore} from "@/stores/auth.store";

const addressStore = useAddressStore();
const authStore = useAuthStore();

const {addresses} = storeToRefs(addressStore);
addressStore.getAll();

authStore.$subscribe(() => addressStore.getAll());
</script>
