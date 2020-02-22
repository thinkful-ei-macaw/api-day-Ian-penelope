const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Ian';
/**
 * listApiFetch - Wrapper function for native `fetch` to standardize error handling.
 * @param {string} url
 * @param {object} options
 * @returns {Promise} - resolve on all 2xx responses with JSON body
 *                    - reject on non-2xx and non-JSON response with
 *                      Object { code: Number, message: String }
 */
const listFetches = function (...args) {

  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        error = { code: res.status };
        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }
      return res.json();
    }).then(data => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    })
};

const getItems = function () {
  return listFetches(`${BASE_URL}/items`);
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  listFetches
}

function createItem(name) {
  let newItem = JSON.stringify({
    name: name
  })
  return fetch(`${BASE_URL}/items`, {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': newItem

  })
}

function updateItem(id, updateData) {
  return fetch(`${BASE_URL}/items/${id}`, {
    'method': 'PATCH',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(updateData)

  })
}

function deleteItem(id) {
  return fetch(`${BASE_URL}/items/${id}`, {
    'method': 'DELETE',
    'headers': {
      'Content-Type': 'application/json'
    }
  })
}