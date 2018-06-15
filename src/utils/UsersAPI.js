
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'


const headers = {
  'Accept': 'application/json'
}


export const getAll = () =>
  fetch(`${api}/listarUsuarios`, { headers })
    .then(res => res.json())


export const create = (body) =>
  fetch(`${api}/inserirUsuarios`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())


  export const remove = (body) =>
    fetch(`${api}/deleteUser`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
