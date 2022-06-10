
<template>
  <Dialog v-model:visible="eventStore.newAddress"
          v-on:hide="eventStore.closeDialog(DialogName.newAddress)"
          :modal="true"
          header="New address"
  >
    <AddressForm />
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "primevue/dialog";
import AddressForm from "@/forms/AddressForm.vue";
import {DialogName} from "@/model/DialogName";
import {useEventStore} from "@/stores/event.store";

const eventStore = useEventStore();

</script>