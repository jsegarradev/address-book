import {AbstractApiService} from "@/services/abstract-api.service";
import type {AxiosResponse} from "axios";
import type {Address} from "@/model/Address";

class AddressBookService extends AbstractApiService {

    constructor() {
        super('addresses');
    }

    getAddresses = (): Promise<AxiosResponse<Address[]>> => {
        return this.http
            .get('')
            .then(this.handleResponse.bind(this))
            .catch(this.handleError.bind(this))
    }

}

export const addressBookService: AddressBookService = new AddressBookService();