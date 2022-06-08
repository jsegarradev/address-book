import {AbstractApiService} from "@/services/abstract-api.service";
import type {AxiosRequestHeaders, AxiosResponse} from "axios";
import type {Address} from "@/model/Address";
import {useAuthStore} from "@/stores/auth.store";

class AddressesService extends AbstractApiService {

    constructor() {
        super('addresses');
    }

    getAddresses = (): Promise<AxiosResponse<Address[]>> => {
        const headers:  AxiosRequestHeaders = {
            'Authorization': useAuthStore().user?.tokenId || ''
        };
        return this.http
            .get('',{headers: headers})
            .then(this.handleResponse.bind(this))
            .catch(this.handleError.bind(this))
    }

}

export const addressesService: AddressesService = new AddressesService();