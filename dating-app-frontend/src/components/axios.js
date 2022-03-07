import axios from 'axios'

const instance = axios.create({
    baseURL:"https://dating-mern-backeng.herokuapp.com"
})

export default instance