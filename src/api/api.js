const TOKEN = 'eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf';

export const loginRequest = (uuid) => fetch('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', {
  method: 'POST',
  body: `uuid=${uuid}`,
  headers: new Headers({
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  })
})
  .then(_ => _.json());
