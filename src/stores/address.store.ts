import {defineStore} from 'pinia'
import axios from "axios";

export const useAddressStore = defineStore({
    id: 'address',
    state: () => ({
        addresses: []
    }),
    getters: {
        addresses: (state) => state.addresses
    },
    actions: {
        // getAddresses: async () => {
        //     await axios.get('')
        //         .then((response) => )
        //
        // },
        // updateAddresses: (value) =>
    }

})
// https://blog.logrocket.com/complex-vue-3-state-management-pinia/#using-a-basic-pinia-store