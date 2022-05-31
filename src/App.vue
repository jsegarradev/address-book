<template>
  <div class="p-2">
    <TopBar v-on:showModal="toggleDialogFlag" class="mb-4" />
    <LoginDialog v-if="showModal" v-on:hide="toggleDialogFlag" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import TopBar from "@/components/TopBar.vue";
import LoginDialog from "@/components/LoginDialog.vue";
import {ref} from "vue";
import type {Ref} from "vue";

const showModal: Ref<boolean> = ref(false);

const toggleDialogFlag = (): void => {
  showModal.value = !showModal.value;
}

</script>

<style>
@import '@/assets/base.css';

</style>
