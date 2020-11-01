import axios from "axios";

const inst = axios.create({
    baseURL: 'https://fm-tiktok-clone.herokuapp.com'
});

export default inst;