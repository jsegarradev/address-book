<template>
  <div class="w-full border-1 border-300 border-round shadow-1 p-1">
    <div class="grid m-0 flex justify-content-end">
      <div v-if="authStore.user" class="col-12 sm:col-6 md:col-4 lg:col-2 flex align-items-center justify-content-end text-lg">
        {{authStore.user.email}}
      </div>
      <div class="col-12 sm:col-6 md:col-2 lg:col-1 flex justify-content-center">
        <div class="p-fluid w-full">
          <Button v-if="!authStore.user"
                  v-on:click="eventStore.openLoginDialog()"
                  label="Login"
                  class="p-button-outlined"/>
          <Button v-if="authStore.user"
                  v-on:click="authStore.logout()"
                  label="Logout"
                  class="p-button-outlined p-button-danger"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import {useAuthStore} from "@/stores/auth.store";
import {useEventStore} from "@/stores/event.store";

const authStore = useAuthStore();
const eventStore = useEventStore();
</script>