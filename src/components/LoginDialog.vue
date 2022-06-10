<!--https://medium.com/developer-rants/angular-style-reactive-form-validation-in-vue-js-and-typescript-d9881ca029e4-->

<template>
  <Dialog v-model:visible="eventStore.login"
          v-on:hide="eventStore.closeDialog(DialogName.login)"
          :modal="true"
          header="Login"
  >
    <LoginForm />
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "primevue/dialog";
import LoginForm from "@/forms/LoginForm.vue";
import {DialogName} from "@/model/DialogName";
import {useEventStore} from "@/stores/event.store";

const eventStore = useEventStore();

</script>