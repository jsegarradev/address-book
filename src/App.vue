<template>
  <div class="p-2">
    <div class="grid">
      <div class="col-12">
        <TopBar />
      </div>
      <div class="col-12">
        <RouterView />
      </div>
    </div>
    <LoginDialog v-if="eventStore.login" />
    <NewAddressDialog v-if="eventStore.newAddress" />
  </div>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import TopBar from "@/components/TopBar.vue";
import LoginDialog from "@/components/LoginDialog.vue";
import {useEventStore} from "@/stores/event.store";
import NewAddressDialog from "@/components/NewAddressDialog.vue";

const eventStore = useEventStore();


</script>

<style>
@import '@/assets/base.css';

</style>
