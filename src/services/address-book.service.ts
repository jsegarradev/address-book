import {AbstractApiService} from "@/services/abstract-api.service";
import type {AxiosResponse} from "axios";
import type {Address} from "@/model/Address";

class AddressBookService extends AbstractApiService {

    constructor() {
        super('');
    }

    getAddresses = (): Promise<AxiosResponse<Address[]>> => {
        const params = {}
        return this.http
            .get('http://localhost:3001/addresses',{params: params})
            .then(this.handleResponse.bind(this))
            .catch(this.handleError.bind(this))
    }

}

export const addressBookService: AddressBookService = new AddressBookService();