const remoteURL = "http://localhost:8000";

export default {
  delete(endpoint, id) {
    return fetch(`${remoteURL}/${endpoint}/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },

  getAll(endpoint) {
    return fetch(`${remoteURL}/${endpoint}`, {
      method: "GET"
    }).then(result => result.json());
  },
  
  get(endpoint, id) {
    return fetch(`${remoteURL}/${endpoint}/${id}`, {
      method: "GET"
    }).then(result => result.json());
  },

  post : function(endpoint) {
    return fetch(`${remoteURL}/${endpoint}`, {
      method: "POST",
    })
    .then(response => response.json())
  }
};
