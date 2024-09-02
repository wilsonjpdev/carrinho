import axios from 'axios'

//json-server --watch db.json
const api = axios.create({
    baseURL: ' http://localhost:3000'
})

export default api
