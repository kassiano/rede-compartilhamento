
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'


const headers = {
  'Accept': 'application/json'
}


export const getAll = () =>
  fetch(`${api}/listarPosts`, { headers })
    .then(res => res.json())


export const create = (body) =>
  fetch(`${api}/insertPost`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
