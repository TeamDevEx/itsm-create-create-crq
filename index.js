import axios from 'axios'

const createCrq = async (
  accessToken,
  { HOST_NAME, CRQ_ENDPOINT, cmdbId, REQUESTOR_ID, scheduledDate,issueDetails }
) => {
  const url = `${HOST_NAME}/${CRQ_ENDPOINT}`

  const requestData = {
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
        id: REQUESTOR_ID,
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

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }

  try {
    const response = await axios.post(url, requestData, { headers })
    return response.data
  } catch (error) {
    console.error('Error creating CRQ:', error)
    throw error
  }
}

export { createCrq }
