import axios from 'axios';
import systemConfig from '../config/system';

const CATEGORIES = 'categories';
const DEPARTMENTS = 'departments';
const IN_DEPARTMENT = 'inDepartment';
class CategoriesService {
    constructor() {
        this.setDefaults();
    }

    setDefaults = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
    };

    getCategories = async () => {
        try {
            const res = await axios.get(`${systemConfig.serverBaseUrl}/${CATEGORIES}`);
            return res.data;
        } catch({response}) {
            throw response;
        }
    }

    getDepartments = async () => {
        try {
            const res = await axios.get(`${systemConfig.serverBaseUrl}/${DEPARTMENTS}`);
            return res.data;
        } catch (error) {
            throw error.response;
        }
    }

    getCategoriesInDepartment = async departmentId => {
        try {
            const res = await axios.get(`${systemConfig.serverBaseUrl}/${CATEGORIES}/${IN_DEPARTMENT}/${departmentId}`, {
                department_id: departmentId,
            });
            return res.data;
        } catch ({response}) {
            throw response;
        }
    }

    getFullDepartments = async () => {
        const departments = await this.getDepartments();
        return Promise.all([...departments].map(async ({department_id, name, description}) => {
            const categoriesInDepartment = await this.getCategoriesInDepartment(department_id);
            return {
                department_id,
                name,
                description,
                categories: categoriesInDepartment,
            };
        }))
    }
}

const instance = new CategoriesService();

export default instance;
