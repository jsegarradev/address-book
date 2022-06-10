<template>
  <form id="login-form">
    <div class="field">
      <label for="email">Email</label>
      <InputText v-model="email"
                 id="email"
                 aria-describedby="email-help"
                 class="p-invalid w-full"
                 type="text"/>
    </div>
    <div class="field">
      <label for="password">Password</label>
      <InputText v-model="password"
                 id="password"
                 aria-describedby="password-help"
                 class="p-invalid w-full"
                 type="text"/>
    </div>
    <div class="field">
      <Button v-on:click="submitForm" label="Login" class="w-full"/>
    </div>
    <div class="field">
      <Button label="Register" class="p-button-outlined w-full"/>
    </div>
  </form>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import type {Ref} from "vue";
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth.store";
import {useEventStore} from "@/stores/event.store";
import {DialogName} from "@/model/DialogName";

const authStore = useAuthStore();
const eventStore = useEventStore();

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const error: Ref<boolean> = ref(false);

const submitForm = async (): Promise<void> => {
  validateForm();
  if (!error.value) {
    await loginAttempt();
    resetForm();
    eventStore.closeDialog(DialogName.login);
  }
}

const validateForm = (): void => {
  error.value = (email.value.length === 0 || password.value.length === 0);
}

const resetForm = (): void => {
  email.value = '';
  password.value = '';
}

const loginAttempt = async (): Promise<void> => {
  await authStore.login(email.value, password.value)
      .then(() => console.log(authStore.user))
}
</script>