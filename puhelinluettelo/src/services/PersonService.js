import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => { return response.data })
}

const create = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => { return response.data })
}

const remove = (id) => {
    const url = baseUrl + '/' + id
    const response = axios.delete(url)
    return response
}

const update = (person) => {
    const url = baseUrl + '/' + person.id
    const request = axios.put(url, person)
    return request.then(response => { return response.data })
}

export default { getAll, create, remove, update }