import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/myproject-29eeb/us-central1/api)'
});

export default instance; 