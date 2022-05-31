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
import {addressBookService} from "@/services/address-book.service";
import {onMounted, ref} from "vue";
import type {Ref} from "vue";
import type {Address} from "@/model/Address";
import type {AxiosResponse} from "axios";

import AddressCard from "@/components/AddressCard.vue"

const addresses: Ref<Address[]> = ref([]);

onMounted( async () => await loadAddresses());

const loadAddresses = async () => {
  await addressBookService.getAddresses()
      .then((response: AxiosResponse<Address[]>) => addresses.value = response.data)
}

</script>
