<template>
  <div class="p-2 border-1 border-300 border-round shadow-1">
    <h2>{{ address.name }}</h2>
    <p>{{ address.address }}</p>
    <p>{{ address.email }}</p>
    <p>{{ address.phone }}</p>
  </div>
</template>

<script setup lang="ts">
import type {Address} from "@/model/Address";

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