<template>
  <div class="p-2">
    <TopBar class="mb-4" />
    <LoginDialog v-if="eventStore.loginDialogState"/>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import TopBar from "@/components/TopBar.vue";
import LoginDialog from "@/components/LoginDialog.vue";
import {useEventStore} from "@/stores/event.store";

const eventStore = useEventStore();

</script>

<style>
@import '@/assets/base.css';

</style>
