import axios from "axios";
import type {AxiosRequestHeaders, AxiosResponse} from "axios";
import {useAuthStore} from "@/stores/auth.store";
import type {Address} from "@/model/Address";

class AddressService {
    private readonly baseUrl = 'http://localhost:3001';

    public getAddresses(): Promise<AxiosResponse<Address[]>> {
        const headers: AxiosRequestHeaders = {
            'Authorization': useAuthStore().user?.tokenId || ''
        };
        return axios.get(`${this.baseUrl}/addresses`, {headers: headers})
            .then((response) => response.data)
            .catch((error) => console.log(error));
    }

    public deleteAddress(id: string): Promise<AxiosResponse<void>> {
        const config = {
            headers:{'Authorization': useAuthStore().user?.tokenId || ''},
            data: {id:id}
        };
        return axios.delete(`${this.baseUrl}/address`,config)
            .then((response) => response.data)
            .catch((error) => console.log(error));
    }

    public createAddress(address: Address):Promise<AxiosResponse<void>> {
        const headers: AxiosRequestHeaders = {
            'Authorization': useAuthStore().user?.tokenId || ''
        };
        return axios.post(`${this.baseUrl}/address`,address,{headers:headers})
            .then((response) => response.data)
            .catch((error) => console.log(error));
    }
}

export const addressService: AddressService = new AddressService();