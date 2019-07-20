import { EventEmitter } from "events";
import axios from 'axios';
import systemConfig from '../config/system';

const ACCESS_TOKEN = "accessToken";

class AuthService extends EventEmitter {
    constructor() {
        super();
        this.setDefaults();
    }

    setDefaults = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
    };


    async signIn(email, password) {
        try {
            const res = await axios.post(systemConfig.serverBaseUrl+"/customers/login", {
                email,
                password,
            });
            localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
            return res.data;

        } catch (error) {
            throw error.response.data.error;
        }
    }

    async signInWithFacebook() {

    }


    async signUp(email, password, name) {
        try {
            const res = await axios.post(systemConfig.serverBaseUrl + "/customers", {
                name,
                email,
                password,
            });

            // localStorage

            return res.data;
        } catch(error) {
            throw error.response.data.error;
        }
    }

    async _getUser(token) {
        try {
            const res = await axios.get(systemConfig.serverBaseUrl + "/customer", {
                headers: {
                    "user-key": token,
                }
            });

            return res.data;
        } catch (error) {
            throw error.response.data.error;
        }
    }

    async getCurrentUser() {

        const token = localStorage.getItem(ACCESS_TOKEN);

        if (!token) {
            return null;
        } else {
            try {
                const user = await instance._getUser(token);
                return {
                    user,
                    token,
                }
            } catch (error) {
                console.log(error);
                localStorage.removeItem(ACCESS_TOKEN);
                return null;
            }
        }
    }

    async logout() {
        localStorage.removeItem(ACCESS_TOKEN);
    }

}

const instance = new AuthService();

export default instance;