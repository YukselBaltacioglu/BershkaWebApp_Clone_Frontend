import axios from 'axios';

export default class CategoryService {
    getAll(){
        return axios.get("http://localhost:8080/api/category/get-all")
    }

}