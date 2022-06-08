import axios from "axios";

export class LoginService {
    private readonly baseUrl = 'http://localhost:3001';

    public login(email: string, password: string) {
        const data = {email: email, password: password};

        return axios.post(`${this.baseUrl}/login`, data)
            .then((response) => response.data)
            .catch((error) => console.log(error));
    }
}

export const loginService: LoginService = new LoginService();