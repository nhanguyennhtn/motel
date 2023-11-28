import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:5000'
})

service.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error.response.data)
)

// User
export const apiUserRegister = data =>
    service.post('/api/user/register', data)

export const apiUserLogin = data =>
    service.post('/api/user/login', data)

export const apiUserReadOne = id =>
    service.get('/api/user/profile/' + id)

export const apiUserUpdate = data =>
    service.put(`/api/user/update/${data._id}`, data)

//room

export const apiRoomRead = () =>
    service.get('/api/room/read')

export const apiRoomReadOne = id =>
    service.get('/api/room/read/' + id)

export const apiRoomCreate = data =>
    service.post('/api/room/create', data)

export const apiRoomUpdate = data =>
    service.put(`/api/room/update/${data._id}`, data)

export const apiRoomDelete = id =>
    service.delete('/api/room/delete/' + id)

// contract
export const apiContractRead = () =>
    service.get('/api/contract/read')

export const apiContractCreate = data =>
    service.post('/api/contract/create', data)

export const apiContractUpdate = data =>
    service.put(`/api/contract/update/${data.id}`, data)

export const apiContractDelete = id =>
    service.delete('/api/contract/delete/' + id)
// bill
export const apiBilltRead = () =>
    service.get('/api/bill/read')

export const apiBillCreate = data =>
    service.post('/api/bill/create', data)
export const apiBillDelete = id =>
    service.delete('/api/bill/delete/' + id)
// price
export const apiPricetRead = () =>
    service.get('/api/price/read')

export const apiPriceCreate = data =>
    service.post('/api/price/create', data)

export const apiPriceDelete = id =>
    service.delete('/api/price/delete/' + id)
// price
export const apiContactRead = () =>
    service.get('/api/contact/read')

export const apiContactCreate = data =>
    service.post('/api/contact/create', data)

export const apiContactDelete = id =>
    service.delete('/api/contact/delete/' + id)

