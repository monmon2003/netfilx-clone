import axios from "axios";

const instance = axios.create({
    base_URL:"https://api.themoviedb.org/3"
});
export default instance;