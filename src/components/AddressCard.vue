<template>
  <div class="p-2 border-1 border-300 border-round shadow-1 h-15rem flex align-items-center overflow-auto">
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
</template>

<script setup lang="ts">
import type {Address} from "@/model/Address";
import Divider from "primevue/divider";

defineProps<{
  address: Address
}>();

</script>

<style scoped>
p {
  padding: 0!important;
  margin: 0!important;
}
</style>