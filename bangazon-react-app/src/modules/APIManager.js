const remoteURL = "http://localhost:8000"

export default {
    
delete(endpoint, id) {
    return fetch(`${remoteURL}/${endpoint}/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}