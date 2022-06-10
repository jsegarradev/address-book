<template>
  <div class="grid border-1 border-300 border-round shadow-1 m-0 p-2">
    <div class="col-12 sm:col-6 md:col-2 xl:col-2 item">
      <div class="p-fluid w-full xl:w-6">
        <Button v-if="authStore.user"
                v-on:click="eventStore.openDialog(DialogName.newAddress)"
                icon="pi pi-plus"
                label="New address"/>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4 xl:col-5 item bg-black-alpha-60"></div>
    <div class="col-12 sm:col-6 md:col-4 xl:col-4 item justify-content-end text-lg bg-bluegray-200"
        v-if="authStore.user"
    >
      {{ authStore.user.email }}
    </div>
    <div class="col-12 sm:col-6 md:col-2 xl:col-1 item justify-content-end"
         v-bind:class="{'lg:col-3':!authStore.user}"
    >
      <div class="p-fluid w-full xl:w-min">
        <Button v-if="!authStore.user"
                v-on:click="eventStore.openDialog(DialogName.login)"
                label="Login"
                class="p-button-outlined"/>
        <Button v-if="authStore.user"
                v-on:click="authStore.logout()"
                label="Logout"
                class="p-button-outlined p-button-danger"/>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import Button from "primevue/button";
import {DialogName} from "@/model/DialogName";
import {useAuthStore} from "@/stores/auth.store";
import {useEventStore} from "@/stores/event.store";

const authStore = useAuthStore();
const eventStore = useEventStore();
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
}
</style>