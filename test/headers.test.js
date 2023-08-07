import { headers } from '../constant/headers'

it('headers', () => {
  const accessToken = 123
  const result = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
  expect(headers(accessToken)).toStrictEqual(result)
})
