import {defineStore} from "pinia";
import type {DialogName} from "@/model/DialogName";

export const useEventStore = defineStore({
    id:'event',
    state: () => ({
        login: false,
        newAddress: false
    }),
    actions:{
        openDialog(name: DialogName) {
            this.$state[name] = true;
        },
        closeDialog(name: DialogName) {
            this.$state[name] = false;        }
    }
});