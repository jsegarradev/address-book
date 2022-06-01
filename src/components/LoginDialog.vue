<!--https://medium.com/developer-rants/angular-style-reactive-form-validation-in-vue-js-and-typescript-d9881ca029e4-->

<template>
  <Dialog v-model:visible="displayModal"
          v-on:hide="emit('hide')"
          :modal="true"
          header="Login"
          :style="{width: '50vw'}"
  >
    <form id="login-form">
      <div class="field">
        <label for="email">Email</label>
        <InputText id="email"
                   aria-describedby="email-help"
                   class="p-invalid w-full"
                   type="text"/>
      </div>
      <div class="field">
        <label for="password">Password</label>
        <InputText id="password"
                   aria-describedby="password-help"
                   class="p-invalid w-full"
                   type="text"/>
      </div>
    </form>
    <template #footer>
      <div class="grid">
        <div class="col-12">
          <Button label="Login" class="w-full"/>
        </div>
        <div class="col-12">
          <divider></divider>
        </div>
        <div class="col-12">
          <Button label="Register" class="p-button-outlined w-full"/>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Divider from "primevue/divider";
import {defineEmits, onMounted, ref} from "vue";
import type {Ref} from "vue";

const displayModal: Ref<boolean> = ref(false);

const emit = defineEmits(['hide']);

onMounted(() => displayModal.value = true);

</script>