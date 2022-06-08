import {defineStore} from 'pinia'
import {addressesService} from "@/services/addresses.service";
import type {Address} from "@/model/Address";
import type {AxiosResponse} from "axios";

export const useAddressStore = defineStore({
    id: 'address',
    state: (): {addresses: Address[]} => ({
        addresses: []
    }),
    actions: {
        async getAll() {
            await addressesService.getAddresses()
                .then((response:AxiosResponse<Address[]>) => {
                    console.log(response)
                    this.addresses = response.data
                });

        }
    }

});
// https://blog.logrocket.com/complex-vue-3-state-management-pinia/#using-a-basic-pinia-store