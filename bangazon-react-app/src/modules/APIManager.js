const remoteURL = "http://localhost:8000";


export default {

  delete(endpoint, id) {
    return fetch(`${remoteURL}/${endpoint}/${id}`, {
      "method": "DELETE",
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
      }
    }).then(result => result.json());
  },
  
  getAll(endpoint) {
    return fetch(`${remoteURL}/${endpoint}`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
      }
    }).then(result => result.json());
  },
  
  get(endpoint, id) {
    return fetch(`${remoteURL}/${endpoint}/${id}`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
      }
    }).then(result => result.json());
  }
};
