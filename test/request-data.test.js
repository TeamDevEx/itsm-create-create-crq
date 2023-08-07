import { requestData } from './../constant/request-data'

it('requestData', () => {
  const cmdbId = 17830
  const requestorId = 'T151393'
  const scheduledDate = '2023-06-15'
  const issueDetails = 'this is a test'

  const result = {
    description: 'test',
    scheduledDate,
    characteristic: [
      {
        name: 'template',
        value: 'test_crq_template'
      },
      {
        name: 'Deployment Type',
        value: 'Automated'
      }
    ],
    targetEntity: [
      {
        id: cmdbId
      }
    ],
    relatedParty: [
      {
        id: requestorId,
        role: 'Requested By'
      }
    ],
    note: [
      {
        author: 'System',
        text: JSON.stringify(
          {
            issueDetails
          },
          null,
          2
        )
      }
    ]
  }

  expect(
    requestData(cmdbId, requestorId, scheduledDate, issueDetails)
  ).toStrictEqual(result)
})
