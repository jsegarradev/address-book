<template>
  <form id="address-form">
    <div class="field">
      <label for="name">Name</label>
      <InputText v-model="address.name"
                 id="name"
                 aria-describedby="name-help"
                 type="text"/>
    </div>
    <div class="field">
      <label for="lastName">Last name</label>
      <InputText v-model="address.lastName"
                 id="lastName"
                 aria-describedby="lastName-help"
                 type="text"/>
    </div>
    <div class="field">
      <label for="address">Address</label>
      <InputText v-model="address.address"
                 id="lastName"
                 aria-describedby="address-help"
                 type="text"/>
    </div>
    <div class="field">
      <label for="city">City</label>
      <InputText v-model="address.city"
                 id="city"
                 aria-describedby="city-help"
                 type="text"/>
    </div>
    <div class="field">
      <label for="state">State</label>
      <InputText v-model="address.state"
                 id="state"
                 aria-describedby="state-help"
                 type="text"/>
    </div>
    <div class="field">
      <label for="country">Country</label>
      <InputText v-model="address.country"
                 id="country"
                 aria-describedby="country-help"
                 type="text"/>
    </div>
    <div class="field">
      <label for="phone">Phone</label>
      <InputText v-model="address.phone"
                 id="phone"
                 aria-describedby="phone-help"
                 type="text"/>
    </div>
    <div class="field">
      <label for="email">Email</label>
      <InputText v-model="address.email"
                 id="email"
                 aria-describedby="email-help"
                 type="text"/>
    </div>
    <div class="field">
      <label for="private" class="w-full">Make this address private</label>
      <Checkbox v-model="address.private" :binary="true"/>
    </div>
    <div class="field">
      <Button v-on:click="submitForm" label="Save address" class="w-full"/>
    </div>
  </form>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import type {Address} from "@/model/Address";
import type {Ref} from "vue";
import {ref} from "vue";
import {useAddressStore} from "@/stores/address.store";
import {v4 as uuid} from 'uuid';
import {DialogName} from "@/model/DialogName";
import {useEventStore} from "@/stores/event.store";

const eventStore = useEventStore();
const addressStore = useAddressStore();

const error: Ref<boolean> = ref(false);

const address: Ref<Address> = ref({
  id: '',
  name: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  phone: '',
  email: '',
  private: false
});

const submitForm = async (): Promise<void> => {
  validateForm();
  if (!error.value) {
    await saveAddress()
    resetForm();
    eventStore.closeDialog(DialogName.newAddress);
  }
}

const validateForm = (): void => {
  error.value = (
      address.value.name.length === 0 ||
      address.value.lastName.length === 0 ||
      address.value.email.length === 0);
}

const resetForm = (): void => {
  address.value = {
    id: '',
    name: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    email: '',
    private: false
  };
}

const saveAddress = async (): Promise<void> => {
  address.value.id = uuid();
  await addressStore.createAddress(address.value)
      .then((response) => console.log(response))
}
</script>