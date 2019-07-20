import systemConfig from '../config/system';
import axios from 'axios';

const ATTRIBUTES = 'attributes';

class AttributesService {
    constructor() {
        this.setDefaults();
    }

    getAttributes = async () => {
        try {
            const attributes = await this._getAttributes();
            return Promise.all([...attributes].map(async attribute => {
                const values = await this.getAttributeValues(attribute.attribute_id);
                return {
                    ...attribute,
                    values,
                }
            }))
        } catch (error) {
            throw error.response || error;
        }
    }
    
    _getAttributes = async () => {
        try {
            const res = await axios.get(`${systemConfig.serverBaseUrl}/${ATTRIBUTES}`);
            return res.data;
        } catch (error) {
            throw error.response;
        }
    }


    _getAttributeValues = async (attribute_id) => {
        try {
            const res = await axios.get(`${systemConfig.serverBaseUrl}/values/${attribute_id}`);
            return res.data;
        } catch (error) {
            throw error.response;
        }
    }

    setDefaults = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
    }
}

const instance = new AttributesService();
export default instance;
