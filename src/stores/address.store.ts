import {defineStore} from 'pinia'
import type {Address} from "@/model/Address";
import type {AxiosResponse} from "axios";
import {addressService} from "@/services/address.service";

export const useAddressStore = defineStore({
    id: 'address',
    state: (): { addresses: Address[] } => ({
        addresses: []
    }),
    actions: {
        async getAll() {
            await addressService.getAddresses()
                .then((response: AxiosResponse<Address[]>) => {
                    console.log(response)
                    this.addresses = response.data
                });

        },
        async deleteAddress(id: string) {
            await addressService.deleteAddress(id)
                .then(response => {
                    console.log(response);
                    this.getAll();
                })
        },
     async createAddress(address: Address) {
            await addressService.createAddress(address)
                .then(response => {
                    console.log(response);
                    this.getAll();
                })
     }
    }

});
// https://blog.logrocket.com/complex-vue-3-state-management-pinia/#using-a-basic-pinia-store