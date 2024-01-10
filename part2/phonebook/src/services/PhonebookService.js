import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

const addPerson = (newPerson) => {
    console.log("in add Person method")
    console.log(newPerson)
    const request = axios.post(baseUrl, newPerson)
    return request.then(response =>response.data)
}

const getAllPeople = () => {
    const request =  axios.get(baseUrl)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    console.log(request)
    return request.then(response => response.data)
}

const updatePerson = (id, changedPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, changedPerson)
    return request.then(response => response.data)
}

export default {addPerson, getAllPeople, deletePerson, updatePerson}