<!--https://medium.com/developer-rants/angular-style-reactive-form-validation-in-vue-js-and-typescript-d9881ca029e4-->

<template>
  <Dialog v-model:visible="eventStore.loginDialogState"
          v-on:hide="eventStore.closeLoginDialog()"
          :modal="true"
          header="Login"
  >
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
    </form>
    <template #footer>
      <div class="grid">
        <div class="col-12">
          <Button v-on:click="submitForm" label="Login" class="w-full"/>
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
import type {Ref} from "vue";
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth.store";
import {useEventStore} from "@/stores/event.store";

const authStore = useAuthStore();
const eventStore = useEventStore();

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const error: Ref<boolean> = ref(false);

const submitForm = (): void => {
  validateForm();
  if (!error.value) {
    loginAttempt();
    resetForm();
    eventStore.closeLoginDialog();
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
  await authStore.login(email.value,password.value)
      .then(() => console.log(authStore.user))
}

</script>