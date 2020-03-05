const remoteURL = "http://localhost:8000";


export default {

  delete(endpoint, id) {
    return fetch(`${remoteURL}/${endpoint}/${id}`, {
      "method": "DELETE",
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
      }
    });
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
  },

  post : function(endpoint, object) {
    return fetch(`${remoteURL}/${endpoint}`, {
      method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
        },
        body: JSON.stringify(object)
      })
      .then(response => response.json())
    }
};

