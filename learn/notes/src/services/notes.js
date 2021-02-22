import axios from 'axios'

const baseUrl = "api/notes"

const getAll = () => {
    // 利用axios库get数据
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObj) => {
    // 利用axios库post数据
    const request = axios.post(baseUrl, newObj)
    return request.then(response => response.data)
}

const update = (id, changeObj) => {
    // 利用axios库put数据
    const request = axios.put(`${baseUrl}/${id}`, changeObj)
    return request.then(response => response.data)
}

// 包含三个方法：获取，创建，更新
export default {getAll, create, update}