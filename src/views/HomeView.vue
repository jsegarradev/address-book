<template>
  <div class="grid">
    <div class="col-4" v-for="address in addresses" :key="address.id">
      <AddressCard :address="address"/>
    </div>

<!--    <div v-for="address in addresses" :key="address.id" class="col-3">-->
<!--      <div class="p-2 border-1 border-round">{{address}}</div>-->
<!--    </div>-->
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
