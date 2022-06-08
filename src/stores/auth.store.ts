// https://jasonwatmore.com/post/2022/05/26/vue-3-pinia-jwt-authentication-tutorial-example
// https://blog.logrocket.com/axios-vs-fetch-best-http-requests/#:~:text=To%20send%20data%2C%20fetch(),stringify%20method
import {defineStore} from "pinia";
import type {LoginResponse} from "@/model/LoginResponse";
import type {User} from "@/model/User";
import {loginService} from "@/services/login.service";

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): { user: User | null } => ({
        user: parseLocalStorageUser()
    }),
    actions: {
        async login(email: string, password: string): Promise<void> {
            const user = await loginService.login(email, password)
                .then((response: LoginResponse) => response.data);

            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        logout(): void {
            this.user = null;
            localStorage.removeItem('user');
        }
    }
})

const parseLocalStorageUser = (): User | null => {
    const userString = localStorage.getItem('user');
    const r: any[] = [
        "undefined",
        "null",
        "{}",
        undefined,
    ]
    if (!r.includes(userString) && userString !== null){
        return JSON.parse(userString);
    } else {
        return null
    }
}