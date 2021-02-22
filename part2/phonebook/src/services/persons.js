import axios from 'axios'

// 相对url
const baseUrl = "api/persons"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const update = (id, changePerson) => {
    const request = axios.put(`${baseUrl}/${id}`, changePerson)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

// 获取，创建，更新，删除
export default {getAll, create, update, remove}