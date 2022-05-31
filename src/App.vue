<template>
  <div class="p-2">
    <TopBar class="mb-2" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import TopBar from "@/components/TopBar.vue";
</script>

<style>
@import '@/assets/base.css';

</style>
