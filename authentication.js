import axios from 'axios'

export const getAccessToken = async ({ HOST_NAME, TOKEN_ENDPOINT, SCOPE, GRANT_TYPE, CLIENT_SECRET, CLIENT_ID }) => {
  return axios
    .post(`${HOST_NAME}/${TOKEN_ENDPOINT}`, null, {
      params: {
        grant_type: GRANT_TYPE,
        scope: SCOPE
      },
      headers: {
        Authorization: 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(JSON.stringify(error.response.data))
    })
}
