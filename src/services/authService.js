import { EventEmitter } from "events";
import axios from 'axios';
import systemConfig from '../config/system';

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

            return res.data;
        } catch(error) {
            throw error.response.data.error;
        }
    }

    async getCurrentUser() {
        try {
            const res = await axios.get(systemConfig.serverBaseUrl + "/customer", {
                headers: {
                    "user-key": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6NDk0MTcsIm5hbWUiOiJDaHJpc3RvcyIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTU2MzM5NTczMiwiZXhwIjoxNTYzNDgyMTMyfQ.Da3-XHLha0yf7GeKB-Fduvpa9jMDVTz_AuXk_a1sNFQ",
                }
            });

            return res.data;
        } catch (error) {
            throw error.response.data.error;
        }
    }


}

const instance = new AuthService();

export default instance;