import {defineStore} from "pinia";

export const useEventStore = defineStore({
    id:'event',
    state: () => ({
        loginDialogState: false
    }),
    actions:{
        openLoginDialog() {
            this.loginDialogState = true
        },
        closeLoginDialog() {
            this.loginDialogState = false
        }
    }
});