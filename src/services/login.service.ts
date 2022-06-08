import {AbstractApiService} from "@/services/abstract-api.service";
import type {LoginResponse} from "@/model/LoginResponse";

class LoginService extends AbstractApiService {

    constructor() {
        super('login');
    }

    login = (email: string, password: string): Promise<LoginResponse> => {
        const params = {email:email,password:password};
        return this.http
            .post('',params)
            .then(this.handleResponse.bind(this))
            .catch(this.handleError.bind(this))
    }
}

export const loginService: LoginService = new LoginService();