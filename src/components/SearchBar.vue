<template>
  <InputText v-model="eventStore.search"
             id="name"
             aria-describedby="name-help"
             class="w-full"
             type="text"/>
</template>

<script setup lang="ts">
import type {Ref} from "vue";
import {ref} from "vue";
import InputText from "primevue/inputtext";
import {useEventStore} from "@/stores/event.store";

const search: Ref<string> = ref('');

const eventStore = useEventStore();

</script>