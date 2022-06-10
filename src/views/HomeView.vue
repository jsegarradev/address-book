<template>
  <div class="grid">
    <div v-for="address in addresses"
         :key="address.id"
         class="col-12 md:col-6 lg:col-4 xl:col-3"
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
import {useEventStore} from "@/stores/event.store";

const addressStore = useAddressStore();
const authStore = useAuthStore();
const eventStore = useEventStore();

const {addresses} = storeToRefs(addressStore);
addressStore.getAll();

authStore.$subscribe(() => addressStore.getAll());

eventStore.$subscribe((callback,{search: string}) => {
  addressStore.filter(eventStore.search)
});



</script>
