const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Ian';

const getItems = function () {
  return fetch(`${BASE_URL}/items`)
};

export default {
  getItems,
  createItem,
  updateItem
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