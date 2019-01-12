import { API_TOKEN } from '../constants';

export const loginRequest = (uuid) => fetch('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', {
  method: 'POST',
  body: `uuid=${uuid}`,
  headers: new Headers({
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  })
})
  .then(_ => _.json());

export const getJogsRequest = () => fetch('https://jogtracker.herokuapp.com/api/v1/data/sync', {
  method: 'GET',
  headers: new Headers({
    'Authorization': `Bearer ${API_TOKEN}`,
    'Accept': 'application/json'
  })
})
  .then(_ => _.json());
